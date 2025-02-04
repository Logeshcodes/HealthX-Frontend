import React, { useState } from 'react';
import { User, Phone, Mail, Briefcase, GraduationCap, Clock, Settings, Calendar, MapPin } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  mobile: string;
  department: string;
  education: string;
  experience: string;
  description: string;
  workingHours: string;
  consultationFee: string;
}

interface EditProfileProps {
  userData: UserData;
}

const EditProfile: React.FC<EditProfileProps> = ({ userData }) => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [mobile, setMobile] = useState(userData.mobile);
  const [department, setDepartment] = useState(userData.department);
  const [education, setEducation] = useState(userData.education);
  const [experience, setExperience] = useState(userData.experience);
  const [description, setDescription] = useState(userData.description);
  const [workingHours, setWorkingHours] = useState(userData.workingHours);
  const [consultationFee, setConsultationFee] = useState(userData.consultationFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add logic to update the profile data here
    alert('Profile updated successfully');
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Editable fields */}
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Phone Number</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Department</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Education</label>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Experience</label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Working Hours</label>
                <input
                  type="text"
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Consultation Fee</label>
                <input
                  type="text"
                  value={consultationFee}
                  onChange={(e) => setConsultationFee(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Bio</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-gray-50 rounded-lg"
                rows={4}
              />
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
              <h3 className="font-medium text-gray-800">{name}</h3>
              <p className="text-gray-500">{department}</p>

              <div className="w-full mt-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-blue-500" />
                    <span className="text-sm">Joined</span>
                  </div>
                  {/* <span className="text-sm text-gray-600">{userData}</span> */}
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-blue-500" />
                    <span className="text-sm">Location</span>
                  </div>
                  {/* <span className="text-sm text-gray-600">{userData.city}</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
