import React from 'react';
import DataTable from '../../components/AdminComponents/DataTable';

interface UserProps {
  isDarkMode: boolean;
}

const RequestedDoctorList: React.FC<UserProps> = ({ isDarkMode }) => {
  const doctors = [
    { name: 'Abin Babu', specialization: 'Dentist', mobile: '078 5054 8877', email: 'abinbabu@mail.com', status: 'Requested', mode: 'online' },
    { name: 'Laura Prichet', specialization: 'Cardiologist', mobile: '215 302 3376', email: 'lauraonline@mail.com', status: 'Requested', mode: 'offline' },
    { name: 'Mohammad Karim', specialization: 'General Medicine', mobile: '050 414 8778', email: 'karimbal@mail.com', status: 'Requested', mode: 'online' },
    { name: 'Josh Bill', specialization: 'Physiologist', mobile: '216 75 612 706', email: 'joshbill@mail.com', status: 'Requested', mode: 'online' },
    { name: 'Josh Adam', specialization: 'Neurologist', mobile: '02 75 150 655', email: 'joshadam@mail.com', status: 'Requested', mode: 'offline' }
  ];

  return <DataTable doctors={doctors} isDarkMode={isDarkMode} showActions={true} statusType="requested" />;
};

export default RequestedDoctorList;
