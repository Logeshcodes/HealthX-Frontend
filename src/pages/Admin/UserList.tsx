import React, { useEffect, useState, useCallback } from 'react';
import { UserX, UserCheck, Search } from 'lucide-react';
import { getAllUser, blockUser } from '../../api/action/AdminActionApi';
import { toast } from 'react-toastify';
import { debounce } from 'lodash';
import LoadingSpinner from '../../components/AdminComponents/LoadingSpinner';

interface UserProps {
  isDarkMode: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
  status: 'Blocked' | 'Unblocked';
  created: string;
}

const ITEMS_PER_PAGE = 7;

const UserList: React.FC<UserProps> = ({ isDarkMode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null); // For specific action loading
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const userData = await getAllUser();
        if (userData) {
          const formattedUsers = userData.map((user: any) => ({
            id: user._id,
            name: user.name || 'N/A',
            email: user.email,
            status: user.isBlocked ? 'Blocked' : 'Unblocked',
            created: new Date(user.createdAt).toLocaleDateString(),
          }));
          setUsers(formattedUsers);
          setFilteredUsers(formattedUsers);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = debounce((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    if (query.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, 300);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleBlock = useCallback(
    async (email: string) => {
      setActionLoading(email); 
      const updatedUsers = users.map((user : any) =>
        user.email === email
          ? { ...user, status: user.status === 'Blocked' ? 'Unblocked' : 'Blocked' }
          : user
      );
      setUsers(updatedUsers); 

      try {
        const response = await blockUser(email);
        if (response.success) {
          setTimeout(() => {
            window.location.reload();
          },5000);
          toast.success(response.message);
        } else {
          throw new Error(response.message);
        }
      } catch (error: any) {
        // Revert the optimistic UI update
        setUsers(users);
        toast.error(error.message || 'Unknown Error Occurred!');
      } finally {
        setActionLoading(null); // Stop action-specific loading
      }
    },
    [users]
  );

  if (loading) {
    return <LoadingSpinner message="Loading Users..." />;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-500">User List</h1>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search User"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white w-full p-2 rounded-lg"
            />
          </div>
        </div>

        <div className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className="px-6 py-4 text-left">S.No</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-150 hover:bg-opacity-50 ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === 'Blocked'
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : 'bg-green-100 text-green-800 border border-green-200'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{user.created}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleBlock(user.email)}
                          className={`p-2 rounded-full transition-all duration-200 ${
                            user.status === 'Blocked'
                              ? 'bg-red-100 text-red-600 hover:bg-red-200'
                              : 'bg-green-100 text-green-600 hover:bg-green-200'
                          } transform hover:scale-110`}
                          title={user.status === 'Blocked' ? 'Unblock User' : 'Block User'}
                          disabled={actionLoading === user.email}
                        >
                          {actionLoading === user.email ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-gray-400" />
                          ) : user.status === 'Blocked' ? (
                            <UserX className="h-4 w-4" />
                          ) : (
                            <UserCheck className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-4">
                    No Users are available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex justify-between items-center py-4 px-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
