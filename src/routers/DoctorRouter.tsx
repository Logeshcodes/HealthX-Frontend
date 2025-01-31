import { Routes , Route } from 'react-router-dom'
import {Suspense} from 'react';
import BrickLoader from '../components/BrickLoader';
import DoctorLogin from '../pages/Doctors/DoctorLogin';
import DoctorSignup from '../pages/Doctors/DoctorSignup';
import Home from '../pages/Doctors/DoctorHome';
import DoctorVerificationOTP from '../pages/Doctors/DoctorOtpPage';
import DoctorLayout from '../layouts/DoctorLayout';
import DoctorForgotPassword from '../pages/Doctors/DoctorForgotPassword';
import DoctorResetVerificationOTP from '../pages/Doctors/DoctorResetVerifyOTP';
import DoctorResetPassword from '../pages/Doctors/DoctorResetPassword';

const DoctorRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
        <Routes>


            {/* auth */}
           

            
            <Route path="register" element={<DoctorSignup />} />
            <Route path="verify_otp" element={<DoctorVerificationOTP />} />

            <Route path="login" element={<DoctorLogin />} />
            <Route path="/verifyEmail" element={<DoctorForgotPassword />} />
            <Route path="/forgot-password-otp" element={<DoctorResetVerificationOTP />} />
            <Route path="/resetPassword" element={<DoctorResetPassword />} />


            {/* auth */}




            {/* nav-item */}

            <Route path="/" element={<DoctorLayout />}>
                <Route path="" element={<Home />} />
            </Route>

            {/* nav-item */}

            
        </Routes>

    </Suspense>
  )
}

export default DoctorRouter