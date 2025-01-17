import { useState } from 'react';
import { Card } from "../components/card2"

const SignupPage = () => {
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', contactInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-4 flex items-center justify-center">
      <Card className="w-full max-w-6xl grid md:grid-cols-2 overflow-hidden bg-white rounded-xl shadow-xl">
        
        {/* Left Section */}
        <div className="p-8 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
              
              <img
                src="Logo.png"
                alt="Healthcare professional"
                className="rounded-lg mb-4 w-10 h-10"
              />
              
              <h1 className="text-xl font-semibold">Health X</h1>
        </div>
          <div className="mb-8">
            
            <h2 className="text-2xl font-bold mb-2">Welcome to HealthX</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">
              Get started with your email
              <br />
              Or Mobile Number
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg bg-gray-100 p-4">
              {/* <label className="block text-sm text-gray-600 mb-2">
                Email or Mobile Number:
              </label> */}
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                placeholder="Enter email or mobile number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </form>


          <div className="flex items-center gap-4 m-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500">Or With</span>
                <div className="flex-1 h-px bg-gray-300"></div>
        </div>     

          <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-50 transition-colors">
                <img src="" alt="Google icon" className="w-5 h-5" />
                <span>Login with Google</span>
              </button>

              <div className="text-center space-y-2 m-2">
                <a href="#" className="text-red-500 hover:underline">
                  Register as Doctor ? Click here
                </a>
                <p className="text-gray-600">
                  Already have an account ?{' '}
                  <a href="#" className="text-purple-600 hover:underline">
                    Login
                  </a>
                </p>
              </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:block relative bg-gradient-to-br from-purple-600 to-blue-500 p-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Patient Signup</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 ml-16 max-w-sm">
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

export default SignupPage;