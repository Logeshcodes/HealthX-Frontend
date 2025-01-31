import React from 'react';
import DataTable from '../../components/AdminComponents/DataTable';

interface UserProps {
  isDarkMode: boolean;
}

const VerifiedDoctorList: React.FC<UserProps> = ({ isDarkMode }) => {
  const doctors = [
    { name: 'John Smith', specialization: 'Orthopedic', mobile: '078 5054 8877', email: 'johnsmith@mail.com', status: 'Active', mode: 'online' },
    { name: 'Michael J', specialization: 'Pediatrician', mobile: '215 302 3376', email: 'michaelj@mail.com', status: 'Blocked', mode: 'offline' }
  ];

  return <DataTable doctors={doctors} isDarkMode={isDarkMode} showActions={true} statusType="verified" />;
};

export default VerifiedDoctorList;
