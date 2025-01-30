import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Menu, Sun, Moon, Users, UserCheck, Layout, LogOut, CircleUserIcon, Warehouse } from 'lucide-react';


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  const stats = {
    doctorCount: 4689,  // dashboard
    usersCount: 10293,
    appointments: 89000,
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); 
    toast.success("Logged out successfully!");
    navigate("/admin/login"); 
  };

  // Sidebar items with href
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Layout, href: '/admin/dashboard' },
    { id: 'verified-doctors', label: 'Verified Doctors', icon: UserCheck, href: '/admin/verified-doctors' },
    { id: 'requested-doctors', label: 'Requested Doctors', icon: Users, href: '/admin/requested-doctors' },
    { id: 'departments', label: 'Departments', icon: Warehouse, href: '/admin/department' },
    { id: 'users', label: 'Users', icon: CircleUserIcon, href: '/admin/users' },
    { id: 'logout', label: 'Logout', icon: LogOut, action: handleLogout },
  ];

  const handleNavigation = (href : string) => {
    window.location.href = href; // Use the navigate function from 'react-router-dom' for navigation
    setActiveTab(href); 
  };

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`
            ${isSidebarOpen ? 'w-64' : 'w-20'} 
            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
            transition-all duration-300 p-4 shadow-lg
          `}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className={`font-bold ${!isSidebarOpen && 'hidden'}`}>Health X</h1>
            <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-700">
              <Menu size={20} />
            </button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.href) {
                      handleNavigation(item.href); // Navigate if href is defined
                    } else {
                      item.action && item.action(); // Execute action (logout) if provided
                    }
                    setActiveTab(item.id);
                  }}
                  className={`
                    w-full flex items-center gap-4 p-3 rounded-lg
                    ${activeTab === item.id ? (isDarkMode ? 'bg-blue-600' : 'bg-blue-100') : 'hover:bg-gray-700'}
                  `}
                >
                  <Icon size={20} />
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {sidebarItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-700">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
