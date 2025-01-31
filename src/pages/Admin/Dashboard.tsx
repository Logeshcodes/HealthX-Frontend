import React from 'react';
import { Card } from '../../components/Card';

interface DashboardProps {
  isDarkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode }) => {
  // Placeholder data for widgets
  const stats = {
    doctorCount: 4689,
    usersCount: 10293,
    appointments: 89000
  };

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8 text-blue-500">Admin Dashboard</h1>

      <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg mb-2">Doctor Count</h3>
                  <p className="text-3xl font-bold">{stats.doctorCount}</p>
                </Card>
                <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg mb-2">Users Count</h3>
                  <p className="text-3xl font-bold">{stats.usersCount}</p>
                </Card>
                <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg mb-2">Appointments</h3>
                  <p className="text-3xl font-bold">{stats.appointments}</p>
                </Card>
              </div>

              {/* Graph placeholder */}
              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} h-96`}>
                <h3 className="text-lg mb-4">Graph Overview</h3>
                <div className="h-full flex items-center justify-center text-gray-500">
                  Graph visualization would go here
                </div>
              </Card>
            </div>
    </div>
  );
};

export default Dashboard;
