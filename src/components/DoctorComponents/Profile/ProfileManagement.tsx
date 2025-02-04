// ProfileManagement.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MyAccount from './MyAccount';
import ChangePassword from './ChangePassword';
import AccountStatus from './AccountStatus';
import EditProfile from './EditProfile';
import VerifyProfile from './VerifyProfile';
import { User, Lock, Shield, Edit2 , BadgeCheck } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  mobile: string;
  department: string;
  education: string;
  experience: string;
  description: string;
  address: string;
  city: string;
  state: string;
  workingHours: string;
  consultationFee: string;
  accountStatus: string;
  joinDate: string;
}

const ProfileManagement: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('myAccount');
  const [userData, setUserData] = useState<UserData>({
    name: "Logesh",
    email: "logeshc182@gmail.com",
    mobile: "9361231669",
    department: "Dentist",
    education: "MBBS",
    experience: "5",
    description: "Docter-Engineer-Artist",
    address: "123 Medical Center Dr",
    city: "Chennai",
    state: "Tamil Nadu",
    workingHours: "9:00 AM - 5:00 PM",
    consultationFee: "₹500",
    accountStatus: "verified",
    joinDate: "Jan 30, 2025"
  });

  const navItems = [
    { id: 'myAccount', label: 'My Account', icon: User, link: '/doctor/profile/my-account' },
    { id: 'accountStatus', label: 'Account Status', icon: Shield, link: '/doctor/profile/account-status' },
    { id: 'editProfile', label: 'Edit Profile', icon: Edit2, link: '/doctor/profile/edit-profile' },
    { id: 'verifyProfile', label: 'Verify Profile', icon: BadgeCheck, link: '/doctor/profile/verify-profile' },
    { id: 'changePassword', label: 'Change Password', icon: Lock, link: '/doctor/profile/change-password' },
  ];

  const renderContent = () => {
    switch (activePage) {
      case 'myAccount':
        return <MyAccount userData={userData} />;
      case 'changePassword':
        return <ChangePassword />;
      case 'accountStatus':
        return <AccountStatus userData={userData} />;
      case 'editProfile':
        return <EditProfile userData={userData} />;
      case 'verifyProfile':
        return <VerifyProfile />;
      default:
        return <MyAccount userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="text-sm">Dashboard / Settings</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Sidebar navItems={navItems} activePage={activePage} setActivePage={setActivePage} />
        </div>

        <div className="lg:col-span-3">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
