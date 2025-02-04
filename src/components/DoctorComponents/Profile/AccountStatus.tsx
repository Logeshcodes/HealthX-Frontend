// AccountStatus.tsx
import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface UserData {
  name: string;
  department: string;
  accountStatus: string;
  joinDate: string;
}

interface AccountStatusProps {
  userData: UserData;
}

const AccountStatus: React.FC<AccountStatusProps> = ({ userData }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Status</h2>
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
        <img
          src="../../../profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-medium text-gray-800 mb-2">{userData.name}</h3>
        <p className="text-gray-500 mb-6">{userData.department}</p>

        {userData.accountStatus === 'verified' ? (
          <div className="flex items-center space-x-2 text-green-500">
            <CheckCircle size={24} />
            <span className="font-medium">Verified Account</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-yellow-500">
            <Clock size={24} />
            <span className="font-medium">Pending Verification</span>
          </div>
        )}

        <div className="mt-6">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Joined</span>
            <span className="text-sm text-gray-600">{userData.joinDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
