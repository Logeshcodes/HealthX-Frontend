import React, { useEffect, useState } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { getAllDepartment } from '../../api/AdminActionApi';

interface DepartmentProps {
  isDarkMode: boolean;
}

interface Department {
  _id: string;
  departmentName: string;
  isListed: boolean;
  createdAt: string;
}

const Department: React.FC<DepartmentProps> = ({ isDarkMode }) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(true);
      try {
        const response = await getAllDepartment();
        console.log('data', response.data);
        setDepartments(response.data.departments || []);
      } catch (error) {
        console.error('Error fetching departments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-500">Departments List</h1>

          {/* Add More button */}
          <a href="/admin/addDepartment">
            <button
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
              hover:from-blue-600 hover:to-blue-700 transition-all duration-200 
              shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              flex items-center gap-2 font-medium"
            >
              <Plus className="h-4 w-4" />
              Add More
            </button>
          </a>
        </div>

        <div className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className="px-6 py-4 text-left">S.No</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created At</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-4">
                    Loading departments...
                  </td>
                </tr>
              ) : departments.length > 0 ? (
                departments.map((dept, index) => (
                  <tr
                    key={dept._id}
                    className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-150 hover:bg-opacity-50 ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{dept.departmentName}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          dept.isListed
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}
                      >
                        {dept.isListed ? 'Listed' : 'Unlisted'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Date(dept.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        <button
                          className={`p-2 rounded-full transition-all duration-200 ${
                            isDarkMode
                              ? 'hover:bg-blue-500 hover:bg-opacity-20 text-blue-400 hover:text-blue-300'
                              : 'hover:bg-blue-100 text-blue-600 hover:text-blue-700'
                          } transform hover:scale-110`}
                          title="Edit Department"
                        >
                          <a href="/admin/editDepartment">
                            <Pencil className="h-4 w-4" />
                          </a>
                        </button>

                        {/* <button
                          className={`p-2 rounded-full transition-all duration-200 ${
                            isDarkMode
                              ? 'hover:bg-red-500 hover:bg-opacity-20 text-red-400 hover:text-red-300'
                              : 'hover:bg-red-100 text-red-600 hover:text-red-700'
                          } transform hover:scale-110`}
                          title="Delete Department"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-4">
                    No Departments are available
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

export default Department;
