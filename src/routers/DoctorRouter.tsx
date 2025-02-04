import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import BrickLoader from '../components/BrickLoader';
import DoctorLogin from '../pages/Doctors/Auth/DoctorLogin';
import DoctorSignup from '../pages/Doctors/Auth/DoctorSignup';
import DoctorHome from '../pages/Doctors/DoctorHome';
import DoctorVerificationOTP from '../pages/Doctors/Auth/DoctorOtpPage';
import DoctorLayout from '../layouts/DoctorLayout';
import DoctorForgotPassword from '../pages/Doctors/Auth/DoctorForgotPassword';
import DoctorResetVerificationOTP from '../pages/Doctors/Auth/DoctorResetVerifyOTP';
import DoctorResetPassword from '../pages/Doctors/Auth/DoctorResetPassword';


import ProfileManagement from '../components/DoctorComponents/Profile/ProfileManagement';
import MyAccount from '../components/DoctorComponents/Profile/MyAccount';
import ChangePassword from '../components/DoctorComponents/Profile/ChangePassword';
import AccountStatus from '../components/DoctorComponents/Profile/AccountStatus';
import EditProfile from '../components/DoctorComponents/Profile/EditProfile';
import VerifyProfile from '../components/DoctorComponents/Profile/VerifyProfile';

const DoctorRouter: React.FC = () => {
  // You should have the `userData` state here or import it from wherever it's stored
  const userData = {
    name: "Dr. Logesh",
    email: "logesh@example.com",
    mobile: "9361231669",
    department: "Dentist",
    education: "MBBS",
    experience: "5 years",
    description: "Doctor-Engineer-Artist",
    address: "123 Medical Center Dr",
    city: "Chennai",
    state: "Tamil Nadu",
    workingHours: "9:00 AM - 5:00 PM",
    consultationFee: "₹500",
    accountStatus: "verified",
    joinDate: "Jan 30, 2025"
  };

  return (
    <Suspense fallback={<BrickLoader />}>
      <Routes>
        {/* Auth Routes */}
        <Route path="register" element={<DoctorSignup />} />
        <Route path="verify_otp" element={<DoctorVerificationOTP />} />
        <Route path="login" element={<DoctorLogin />} />
        <Route path="verifyEmail" element={<DoctorForgotPassword />} />
        <Route path="forgot-password-otp" element={<DoctorResetVerificationOTP />} />
        <Route path="resetPassword" element={<DoctorResetPassword />} />


       

        {/* Protected Routes with Layout */}
        <Route path="/" element={<DoctorLayout />}>
          <Route path="" element={<DoctorHome />} />
          <Route path="/profile" element={<ProfileManagement />}>
            <Route path="my-account" element={<MyAccount userData={userData} />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="account-status" element={<AccountStatus userData={userData} />} />
            <Route path="verify-profile" element={< VerifyProfile />} />
            <Route path="edit-profile" element={<EditProfile userData={userData}/>} />
          </Route>
        </Route>



          
        
        


      </Routes>
    </Suspense>
  );
};

export default DoctorRouter;
