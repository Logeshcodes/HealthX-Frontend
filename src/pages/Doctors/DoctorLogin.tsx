
import { Card } from "../../components/Card"
import * as Yup from "yup"
import {toast} from 'react-toastify'
import { Formik, Form, Field } from "formik";
import PasswordField from "../Users/common/passwordField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../@types/LoginData";
import { setDoctor } from "../../redux/slices/DoctorSlice";
import { login } from "../../api/auth/DoctorAuthentication";

// Validation Schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});


const DoctorLogin = () => {


  const initialValues: Login = {
    email: "",
    password: "",
    role: "", 
    isBlocked: false, 
  };
  
  

  
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const onSubmit = async (data: Login) => {
    try {
      // Perform the login request
      console.log("Response received:",data);
      const response = await login(data.email,data.password); // Assuming `login` is an API function
      console.log("Response received:>", response.message);

      const user = response?.user;

      if (user) {
        // Store user data in localStorage and show success toast
        localStorage.setItem("doctor", JSON.stringify(user));
        toast.success("Welcome to HealthX");
        console.log('user data ___________>', user)

        // dispatch((setDoctor({
        //   name: user.name,
        //   role: user.is_blocked


        // })))

       
        setTimeout(() => {
          navigate(`/doctor`);
        }, 1000);
      } else {
        // Log error and handle different error messages
        console.log("res msg =>>>>", response?.message)
        if (response?.message == "access denied") {
          toast.error("Access denied");
        } else if (response?.message == 'Invalid Password') {
          toast.error("Invalid Password");
        } else if (response?.message == 'invalid email id') {
          toast.error("Invalid email");
        } else {
          toast.error('An unexpected error occured')
        }

      }
    } catch (error) {
      console.log(error)
    }
  };
 






  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center p-4">
      <Card className=" bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          

           {/* Left Side - Animation */}
           <Card className=" max-w-6xl overflow-hidden flex flex-col md:flex-row bg-white  shadow-xl w-full">
          {/* Right Section */}
          <div className="hidden md:block relative bg-gradient-to-br from-purple-600 to-blue-500  p-14">
          <div className="text-center text-white p-4">
            <h2 className="text-3xl font-bold mb-8 ">Patient Login</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-14 ml-16 max-w-sm">
              <img
                src="../../../doctor-img.png"
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

          {/* Right Section with Login Form */}
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Hi Doctor, Welcome Back! 👋</h2>
            </div>

            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>

          {({ errors, touched }) => (
            <Form className="space-y-6">
              {/* Email Field */}
              <div>
                <div className="relative">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email && touched.email ? "focus:ring-red-500" : "focus:ring-purple-500"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="relative">
                  <PasswordField
                    name="password"
                    placeholder="password"
                    
        
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                  )}
                </div>
                <div className="text-right">
                  <a href="/doctor/verifyEmail" className="text-red-500 hover:text-red-600 text-sm">
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Login Now
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or With</span>
                </div>
              </div>

             

              {/* Sign Up Link */}
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <a href="/doctor/register" className="text-purple-600 hover:text-purple-700 font-medium">
                  Sign Up
                </a>
              </p>
            </Form>
          )}
    </Formik>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DoctorLogin;