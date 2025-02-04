import { Suspense } from 'react';
import BrickLoader from '../components/BrickLoader';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layouts/Layout';
import Home from '../pages/Users/Home';
import SignupPage from '../pages/Users/Signup';
import LoginPage from '../pages/Users/Login';
import ForgotPassword from '../pages/Users/ForgotPassword';
import OTPVerification from "../pages/Users/verifyOTP";
import ResetVerificationOTP from '../pages/Users/ResetVerifyOTP';
import ResetPassword from '../pages/Users/ResetPassword';
import DoctorListingPage from '../pages/Users/DoctorList';
import About from '../pages/Users/About';
import PublicRoute from '../Protecter/PublicRoute';



const UserRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
      <Routes>

        {/* auth */}
        
        <Route path="/user/signup" element={  <PublicRoute><SignupPage /></PublicRoute>  } />
        <Route path="/user/verify_otp" element={  <PublicRoute><OTPVerification /></PublicRoute>  } />
        <Route path="/user/login" element={  <PublicRoute><LoginPage /></PublicRoute>  } />
        <Route path="/user/verifyEmail" element={  <PublicRoute><ForgotPassword /></PublicRoute>  } />
        <Route path="/user/forgot-password-otp" element={  <PublicRoute><ResetVerificationOTP /></PublicRoute>  } />
        <Route path="/user/resetPassword" element={  <PublicRoute><ResetPassword /></PublicRoute>  } />
     

        {/* auth */}



        {/* nav-item */}
        
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/doctor_list" element={<DoctorListingPage />} />
          <Route path="/user/about" element={<About />} />
        </Route>

        {/* nav-item */}

        
      </Routes>
    </Suspense>
  );
};

export default UserRouter;
