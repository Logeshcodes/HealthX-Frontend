import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import BrickLoader from '../components/Common/Fallbacks/BrickLoader';

import Home from '../pages/Users/Home';
import SignupPage from '../pages/Users/Auth/Signup';
import LoginPage from '../pages/Users/Auth/Login';
import ForgotPassword from '../pages/Users/Auth/ForgotPassword';
import OTPVerification from "../pages/Users/Auth/verifyOTP";
import ResetVerificationOTP from '../pages/Users/Auth/ResetVerifyOTP';
import ResetPassword from '../pages/Users/Auth/ResetPassword';
import DoctorListingPage from '../pages/Users/Navbar/DoctorList';
import About from '../pages/Users/Navbar/About';

import Layout from '../layouts/Layout';
import PrivateRoute from '../Protecter/UserPrivateRoute';
import NotFoundPage from '../pages/Users/NotFoundPage';



const UserRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
      <Routes>

        {/* auth - Unprotected Route  */}
        
        <Route path="/user/signup" element={  <SignupPage />  } />
        <Route path="/user/verify_otp" element={  <OTPVerification /> } />
        <Route path="/user/login" element={ <LoginPage /> } />
        <Route path="/user/verifyEmail" element={  <ForgotPassword />  } />
        <Route path="/user/forgot-password-otp" element={ <ResetVerificationOTP />  } />
        <Route path="/user/resetPassword" element={ <ResetPassword /> } />
     

        {/* auth - Unprotected Route  */}



        {/* nav-item */}

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/user/doctor_list" element={<DoctorListingPage />} />
            <Route path="/user/about" element={<About />} />
          </Route>
        </Route>

        {/* nav-item */}


        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />

        
      </Routes>
    </Suspense>
  );
};

export default UserRouter;
