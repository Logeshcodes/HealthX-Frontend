import React, { useEffect, useState, useCallback } from 'react';
import { UserX, UserCheck } from 'lucide-react';
import { getAllUser, blockUser } from '../../api/AdminActionApi';
import { toast } from 'react-toastify';

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

const UserList: React.FC<UserProps> = ({ isDarkMode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
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
      }
    };

    fetchUsers();
  }, []);

  const handleBlock = useCallback(
    async (email: string) => {
      try {
        console.log("Blocking/unblocking user with email:", email);
        const response = await blockUser(email);
        if (response.success) {
          toast.success(response.message);
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.email === email ? { ...user, status: user.status === 'Blocked' ? 'Unblocked' : 'Blocked' } : user
            )
          );
        } else {
          toast.error(response.message);
        }
      } catch (error: any) {
        console.error("Error toggling user block status:", error);
        toast.error(error.message || "Unknown Error Occurred!");
      }
    },
    []
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-500">User List</h1>
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
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-150 hover:bg-opacity-50 ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
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
                        {/* Block/Unblock Toggle Button */}
                        <button
                          onClick={() => handleBlock(user.email)}
                          className={`p-2 rounded-full transition-all duration-200 ${
                            user.status === 'Blocked'
                              ? 'bg-red-100 text-red-600 hover:bg-red-200'
                              : 'bg-green-100 text-green-600 hover:bg-green-200'
                          } transform hover:scale-110`}
                          title={user.status === 'Blocked' ? 'Unblock User' : 'Block User'}
                        >
                          {user.status === 'Blocked' ? (
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
        </div>
      </div>
    </div>
  );
};

export default UserList;
