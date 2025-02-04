// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  link: string;
}

interface SidebarProps {
  navItems: NavItem[];
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, activePage, setActivePage }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          onClick={() => setActivePage(item.id)}
          className={`flex items-center space-x-4 p-2 rounded-md hover:bg-gray-200 transition ${
            activePage === item.id ? 'bg-gray-200' : ''
          }`}
        >
          <item.icon size={20} className="text-gray-600" />
          <span className="text-sm text-gray-600">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
