import React, { useState } from 'react';
import { 
  Pencil, 
  Trash2, 
  Search,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';


const DepartmentPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newDepartment, setNewDepartment] = useState('');
  const [editingDepartment, setEditingDepartment] = useState({ id: null, name: '' });
  
  const [departments, setDepartments] = useState([
    { id: '01', name: 'Anaesthesia', status: 'Unlisted', created: '29 Dec 2022' },
    { id: '02', name: 'General Surgery', status: 'Listed', created: '24 Dec 2022' },
    { id: '03', name: 'Orthopaedics', status: 'Unlisted', created: '12 Dec 2022' },
    { id: '04', name: 'Physiology', status: 'Unlisted', created: '21 Oct 2022' },
    { id: '05', name: 'General Medicine', status: 'Listed', created: '21 Oct 2022' },
  ]);

  const handleAdd = () => {
    if (newDepartment.trim()) {
      const newId = (departments.length + 1).toString().padStart(2, '0');
      setDepartments([...departments, {
        id: newId,
        name: newDepartment,
        status: 'Listed',
        created: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
      }]);
      setNewDepartment('');
      setIsAddModalOpen(false);
    }
  };

  const handleEdit = () => {
    if (editingDepartment.name.trim()) {
      setDepartments(departments.map(dept =>
        dept.id === editingDepartment.id
          ? { ...dept, name: editingDepartment.name }
          : dept
      ));
      setIsEditModalOpen(false);
    }
  };

  const startEdit = (department: any) => {
    setEditingDepartment(department);
    setIsEditModalOpen(true);
  };

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Departments List</h1>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="mr-2 h-4 w-4" /> Add More
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white w-full"
            />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left">Serial No.</th>
                <th className="px-6 py-3 text-left">Dept</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Created</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.map((dept) => (
                <tr key={dept.id} className="border-t border-gray-700">
                  <td className="px-6 py-4">{dept.id}</td>
                  <td className="px-6 py-4">{dept.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      dept.status === 'Listed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {dept.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{dept.created}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => startEdit(dept)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          <button>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button >1</button>
          <button >1</button>
          <button >1</button>
          <button >1</button>
          <button >1</button>
          
          <button>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default DepartmentPage;