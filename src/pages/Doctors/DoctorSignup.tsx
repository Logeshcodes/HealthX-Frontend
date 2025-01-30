import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordField from '../Users/common/passwordField';
import InputField from '../Users/common/inputField';
import { DoctorRegister } from '../../@types/DoctorSignupType';
import { signup } from '../../api/DoctorAuthentication';
import Loader from '../../components/Common/Fallbacks/Loader';

const DoctorSignup = () => {


  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();


  const initialValues = {
    name: "",
    email: "",
    Mobile: "",
    department: "",
    consultationType: "",
    education: "",
    experience: "",
    description: "",
    password: "",
    confirmPassword: "",
   
  };



  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    Mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    department: Yup.string().required("Department is required"),
    consultationType: Yup.string()
      .oneOf(["In-person", "Online"], "Invalid consultation type")
      .required("Consultation type is required"),
    education: Yup.string()
      .min(2, "Education must be at least 2 characters")
      .required("Education is required"),
    experience: Yup.number()
      .typeError("Experience must be a number")
      .min(0, "Experience cannot be negative")
      .required("Experience is required"),
    description: Yup.string()
      .max(500, "Description must be less than 500 characters")
      .required("Description is required"),
    password: Yup.string()
      .matches(/^\S*$/, "Password must not contain spaces")
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = useCallback(async (values: DoctorRegister) => {
    try {

      setLoader(true);
      console.log("Signup click")

      const formData = new FormData();
     

      // Append all other fields except MedicalLicense
    for (const key of Object.keys(values) as (keyof DoctorRegister)[]) {
      if (values[key] !== undefined) {
        formData.append(key, values[key] as string); // Append as string
      }
    }


     // Debugging: Log form data entries
     for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

      const response = await signup(formData);
      console.log("response ?" ,response, );
      if (response.success) {
        localStorage.setItem("verificationToken", response.token);
        localStorage.setItem("email", values.email);
        toast.success(response.message);
        navigate("/doctor/verify_otp");
      } else {
        toast.error(response.message);
        setLoader(false);
      }
    } catch (error: any) {
      toast.error(error.message || "An unknown error occurred!");
      setLoader(false);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-purple-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden flex">
        {/* Left side - Branding */}
        <div className="w-1/2 bg-purple-600 p-12 hidden lg:block">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-white p-2 rounded-lg">
              <div className="text-purple-600 text-2xl">👨‍⚕️</div>
            </div>
            <h2 className="text-white text-2xl font-bold">Health X</h2>
          </div>
          <h1 className="text-white text-4xl font-bold mb-6">Doctor Signup</h1>
          <img src="../../../Logo.png" className="rounded-lg mb-4" alt="Health X Logo" />
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Create a new account!</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6 my-4 flex flex-col">
                <InputField type="text" name="name" placeholder="Name" label="Name" />
                <InputField type="email" name="email" placeholder="Email" label="Email" />
                <InputField type="text" name="Mobile" placeholder="Mobile" label="Mobile" />
                <InputField type="text" name="department" placeholder="Department" label="Department" />
                <InputField type="text" name="consultationType" placeholder="In-person/Online" label="Consultation Type [ In-person, Online ]" />
                <InputField type="text" name="education" placeholder="Education" label="Education" />
                <InputField type="number" name="experience" placeholder="Experience" label="Experience (years)" />
                <InputField type="textarea" name="description" placeholder="Short Description" label="Description" />
                <PasswordField name="password" placeholder="Password" />
                
                <PasswordField name="confirmPassword" placeholder="Confirm Password" />
                

                {!loader ? (
                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
                ) : (
                  <Loader />
                )}
                
              </Form>
              
            )}
          </Formik>
          
          <div className="flex items-center gap-4 m-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500">Or With</span>
                <div className="flex-1 h-px bg-gray-300"></div>
        </div>    
        <div className="text-center space-y-2 m-2">
                <a href="/user/signup" className="text-red-500 hover:underline">
                  Register as User ? Click here
                </a>
                <p className="text-gray-600">
                  Already have an account ?{' '}
                  <a href="/doctor/login" className="text-purple-600 hover:underline">
                    Login
                  </a>
                </p>
              </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default DoctorSignup;
















  // const [medicalLicensePreview, setMedicalLicensePreview] = useState<string>("");


  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setFieldValue("MedicalLicense", file);

  //     // File preview
  //     const reader = new FileReader();
  //     reader.onload = () => setMedicalLicensePreview(reader.result as string);
  //     reader.readAsDataURL(file);
  //   }
  // };








  {/* File Upload Field */}
                {/* <div className="flex items-center space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <Upload className="text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Upload Medical License</span>
                    <input
                      type="file"
                      name="MedicalLicense"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setFieldValue)}
                    />
                  </label>
                </div> */}

                {/* Preview */}
                {/* {medicalLicensePreview && (
                  <img src={medicalLicensePreview} alt="License Preview" className="w-32 h-32 mt-2" />
                )} */}