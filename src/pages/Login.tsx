// import { Shield } from 'lucide-react';
import { Card } from "../components/card2"
import * as Yup from "yup"
// import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {toast} from 'react-toastify'
import { StudentGoogleLogin } from "../api/studentAuthentication";
import { setUser } from "../redux/slices/userSlices";

// Validation Schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});





const LoginPage = () => {


  // const dispatch = useDispatch();



  const initialValues = {
    email: "",
    password: "",
  };






  // const googleSubmit = async (credentialResponse: any) => {
  //   try {
  //     const decoded : any = jwtDecode(credentialResponse.credential);
  //     const response = await StudentGoogleLogin({
  //       name: decoded.name,
  //       email: decoded.email,
  //       password: decoded.sub,
  //     });

  //     const user = response?.user;
  //     if (response) {
  //       dispatch(
  //         setUser({
  //           userId: user._id,
  //           name: user.name,
  //           email: user.email,
  //           role: user.is_blocked,
  //         })
  //       );
  //       toast.success(response.message);
  //       window.location.href = "/home"; // Redirect to home page
  //     } else {
  //       const { message } = response.response?.data;
  //       toast.error(message);
      
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-4 flex items-center justify-center">
  
      <Card className=" max-w-6xl overflow-hidden flex flex-col md:flex-row bg-white rounded-3xl shadow-xl w-full">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex items-center gap-2 mb-8">
            {/* <Shield className="w-6 h-6 text-blue-600" /> */}
            <img
                src="Logo.png"
                alt="Healthcare professional"
                className="rounded-lg mb-4 w-10 h-10"
              />
            <span className="text-xl font-bold">Health X</span>
          </div>

          <h2 className="text-2xl font-bold mb-8">Hi, Welcome Back! 👋</h2>

          <form className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="email"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <input 
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="text-right">
                <a href="#" className="text-red-500 hover:text-red-600 text-sm">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Login Now
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or With</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              <img src="/api/placeholder/20/20" alt="Google logo" className="w-5 h-5" />
              Login with Google
            </button>

            <p className="text-center text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Right Section */}
        <div className="hidden md:block relative bg-gradient-to-br from-purple-600 to-blue-500  p-14">
          <div className="text-center text-white p-4">
            <h2 className="text-3xl font-bold mb-8 ">Patient Login</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-14 ml-16 max-w-sm">
              <img
                src="Login-template.png"
                alt="Healthcare professional"
                className="rounded-lg mb-4"
              />
              <div className="absolute bottom-8 right-8">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;