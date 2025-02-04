// MyAccount.tsx
import React from 'react';
import { User, Phone, Mail, Briefcase, GraduationCap, Clock, Settings, Calendar, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

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

interface MyAccountProps {
  userData: UserData;
}

const MyAccount: React.FC<MyAccountProps> = ({ userData }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2">
             <div className="space-y-6">
               <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Full Name</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <User size={20} className="text-blue-500" />
                     <span>{userData.name}</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Phone Number</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <Phone size={20} className="text-blue-500" />
                     <span>{userData.mobile}</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Email Address</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <Mail size={20} className="text-blue-500" />
                     <span>{userData.email}</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Department</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <Briefcase size={20} className="text-blue-500" />
                     <span>{userData.department}</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Education</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <GraduationCap size={20} className="text-blue-500" />
                     <span>{userData.education}</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Experience</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     
                     <span>{userData.experience} years</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Working Hours</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <Clock size={20} className="text-blue-500" />
                     <span>{userData.workingHours}</span>
                   </div>
                 </div>
   
                 <div className="space-y-2">
                   <label className="text-sm text-gray-600">Consultation Fee</label>
                   <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                     <Settings size={20} className="text-blue-500" />
                     <span>{userData.consultationFee}</span>
                   </div>
                 </div>
               </div>
   
               <div className="space-y-2">
                 <label className="text-sm text-gray-600">Bio</label>
                 <div className="p-3 bg-gray-50 rounded-lg">
                   {userData.description}
                 </div>
               </div>
             </div>
           </div>
   
           <div className="lg:col-span-1">
             <div className="bg-gray-50 rounded-lg p-6">
               <div className="flex flex-col items-center">
                 <img
                   src="../../../profile.jpg"
                   alt="Profile"
                   className="w-32 h-32 rounded-full object-cover mb-4"
                 />
                 <h3 className="font-medium text-gray-800">{userData.name}</h3>
                 <p className="text-gray-500">{userData.department}</p>
                 
                 <div className="w-full mt-6 space-y-4">
                   <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                     <div className="flex items-center space-x-3">
                       <Calendar size={20} className="text-blue-500" />
                       <span className="text-sm">Joined</span>
                     </div>
                     <span className="text-sm text-gray-600">{userData.joinDate}</span>
                   </div>
   
                   <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                     <div className="flex items-center space-x-3">
                       <MapPin size={20} className="text-blue-500" />
                       <span className="text-sm">Location</span>
                     </div>
                     <span className="text-sm text-gray-600">{userData.city}</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
  );
};

export default MyAccount;
