import { Card } from "../../../components/Card";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import PasswordField from "../../Users/common/passwordField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../../@types/LoginData";
import { login } from "../../../api/auth/DoctorAuthentication";
import { setDoctor } from "../../../redux/slices/DoctorSlice";

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
      const response = await login(data.email, data.password);
      console.log("Response received:", response);

      const doctor = response?.user;
      if (doctor) {
        localStorage.setItem("doctor", JSON.stringify(doctor));
        toast.success(response.message);

        dispatch(
          setDoctor({
            name: doctor.name,
            email: doctor.email,
            role: doctor.role,
            profilePicture: doctor.profilePicture,
          })
        );

        setTimeout(() => {
          navigate(`/doctor`);
        }, 1000);
      } else {
        const message = response?.message || "An unexpected error occurred";
        toast.error(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center p-4">
      <Card className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="max-w-6xl overflow-hidden flex flex-col md:flex-row bg-white shadow-xl w-full">
            <div className="hidden md:block relative bg-gradient-to-br from-purple-600 to-blue-500 p-14">
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

          <div className="p-8 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Hi Doctor, Welcome Back! 👋
              </h2>
            </div>

            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
              {({ errors, touched }) => (
                <Form className="space-y-6">
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

                  <div>
                    <div className="relative">
                      <PasswordField name="password" placeholder="password" />
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

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
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
