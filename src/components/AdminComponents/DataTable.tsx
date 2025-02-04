import React, { useState } from 'react';
import { Eye, UserRoundPen, UserRoundX, UserCheck, UserX, Pencil } from 'lucide-react';

interface Doctor {
  name: string;
  specialization: string;
  mobile: string;
  email: string;
  status: string;
  mode: string;
}

interface DataTableProps {
  doctors: Doctor[];
  isDarkMode: boolean;
  showActions: boolean; // For controlling the display of action buttons
  statusType: 'requested' | 'verified'; // For determining which status and buttons to display
}

const DataTable: React.FC<DataTableProps> = ({ doctors, isDarkMode, showActions, statusType }) => {
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter doctors based on the search query
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500 hover:bg-green-400 text-white';
      case 'Blocked':
        return 'bg-red-500 hover:bg-red-400 text-white';
      case 'Requested':
        return 'bg-blue-500 hover:bg-blue-400 text-white';
      case 'Rejected':
        return 'bg-pink-500 hover:bg-pink-400 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-400 text-white';
    }
  };

  return (
    <div className="w-full p-4 bg-slate-900 rounded-lg">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, specialization or email"
          className="w-full p-2 bg-slate-700 text-white rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">S:No</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">Doctor Name</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">Mobile Number</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">Email</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">Status</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">Mode</th>
              {showActions && <th className="px-4 py-3 text-sm font-medium text-gray-200 text-left">Action</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedDoctors.map((doctor, index) => (
              <tr key={index} className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-150 hover:bg-opacity-50 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}>
                <td className="px-4 py-4 text-sm text-gray-300">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img src="../../../profile.jpg" alt="doctor" className="w-12 h-12 bg-gray-300 rounded-full" />
                    <div>
                      <div className="text-sm font-medium text-gray-200">{doctor.name}</div>
                      <div className="text-xs text-gray-400">{doctor.specialization}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-300">{doctor.mobile}</td>
                <td className="px-4 py-4 text-sm text-gray-300">{doctor.email}</td>
                <td className="px-4 py-4">
                    {doctor.status== "Active" && (
                         <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-200 text-green-600 ">
                         {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                       </span>
                    )}
                    {doctor.status== "Blocked" && (
                         <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-200 text-red-600 ">
                         {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                       </span>
                    )}
                    {doctor.status== "Requested" && (
                         <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-600 ">
                         {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                       </span>
                    )}
                 
                </td>
                <td className="px-4 py-4">
                  <span className={`text-sm ${
                    doctor.mode === 'online' 
                      ? 'text-blue-400' 
                      : 'text-gray-400'
                  }`}>
                    {doctor.mode.charAt(0).toUpperCase() + doctor.mode.slice(1)}
                  </span>
                </td>
                {showActions && (
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button className={`p-2 rounded-full transition-all duration-200 ${isDarkMode
                          ? 'hover:bg-blue-500 hover:bg-opacity-20 text-blue-400 hover:text-blue-300'
                        : 'hover:bg-blue-100 text-blue-600 hover:text-blue-700'
                        } transform hover:scale-110`} title="View Documents"
                        >
                        <Eye className="h-4 w-4" />                     
                        </button>

                      {/* Action button with dynamic color */}
                      {/* <button
                        className={`p-2 rounded-full transition-all duration-200 ${getStatusColor(doctor.status)} transform hover:scale-110`}
                        title="Edit Department"
                      >
                        <a href="/admin/editDepartment">
                          <Pencil className="h-4 w-4" />
                        </a>
                      </button> */}

                      {/* Status change buttons */}
                      {statusType === 'requested' && doctor.status === 'Requested' && (
                        <button className={`p-2 rounded-full transition-all  text-yellow-400 hover:text-yellow-300 duration-200 ${getStatusColor(doctor.status)} transform hover:scale-110`}>
                          <UserRoundPen size={16} />
                        </button>
                      )}
                      {statusType === 'requested' && doctor.status === 'Rejected' && (
                        <button className="p-1 text-pink-400 hover:text-pink-300">
                          <UserRoundX size={16} />
                        </button>
                      )}

                      {statusType === 'verified' && doctor.status === 'Active' && (
                        <button className={`p-2 rounded-full transition-all duration-200 ${getStatusColor(doctor.status)} transform hover:scale-110`}>
                          <UserCheck size={16} />
                        </button>
                      )}
                      {statusType === 'verified' && doctor.status === 'Blocked' && (
                        <button className={`p-2 rounded-full transition-all duration-200 ${getStatusColor(doctor.status)} transform hover:scale-110`}>
                          <UserX size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center py-4 px-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
