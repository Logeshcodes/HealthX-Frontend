import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Home, Users, Calendar, Grid, Info, LogIn, ChevronDown, User, MessageSquare, Wallet, LogOut  } from 'lucide-react';

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducer/reducer"
import { clearUserDetials } from "../../redux/slices/userSlice";


const navigation = [
  { name: 'Home', href: '/', id: 'home', icon: Home },
  { name: 'Doctors', href: '/user/doctor_list', id: 'doctors', icon: Users },
  { name: 'Appointments', href: '/user/appointments', id: 'appointments', icon: Calendar },
  { name: 'Service', href: '/user/services', id: 'services', icon: Grid },
  { name: 'About Us', href: '/user/about', id: 'about', icon: Info },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');


  const [userId, setUserId] = useState(null);


  useEffect(() => {
    
    const userDataString = localStorage.getItem("user"); // localStorage.getItem may return null
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);   // Parse only if not null
        if (userData?.userId ) {
          setUserId(userData); 
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);



  const dispatch = useDispatch();
  const navigate = useNavigate();


  const user = useSelector((state: RootState) => state.UserSlice);
  

  useEffect(() => {


    const currentPath = window.location.pathname;
    const activeNavItem = navigation.find((item) => item.href === currentPath);
    if (activeNavItem) {
      setActiveTab(activeNavItem.id);
    }
  }, []);

  const handleNavigation = (href :  string , id :  string)  => {
    setActiveTab(id);
    window.location.href = href; // Navigate to the URL
  };

  const handleLogout = () => {
    dispatch(clearUserDetials ());
    toast.success("Logged out successfully");
    navigate("/user/login");
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 bg-blue-600"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HealthX</span>
              <img
                alt="HealthX"
                src="../../../Logo.png"
                title="HealthX"
                className="h-16 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(({ name, href, id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavigation(href, id)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeTab === id
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-indigo-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            {userId ? (
              

              <div className="flex items-center gap-2 mr-14">
              <img
                src="../../../profile.jpg" 
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-white object-cover cursor-pointer"
              />
               <button
                onClick={toggleDropdown}
                className="flex items-center justify-center p-1 mt-8 rounded-md  focus:outline-none"
                >
                <ChevronDown size={24} />
              </button>
              {isDropdownOpen && (
                <div
                  className={`absolute right-0  mt-56 w-48 bg-white shadow-lg rounded-lg ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="text-gray-700">
                    <li
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => (window.location.href = "/user/profile")}
                    >
                      <User size={18} />
                      Profile
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => (window.location.href = "/user/chat")}
                    >
                      <MessageSquare size={18} />
                      Chat
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => (window.location.href = "/user/wallet")}
                    >
                      <Wallet size={18} />
                      Wallet
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 text-red-500"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} />
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
            ) : (
              <a href="/user/login">
                <button
                  type="button"
                  className="mr-3 inline-block px-6 py-3 font-bold text-center bg-gradient-to-tl from-blue-600 to-cyan-400 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white"
                >
                  Login
                </button>
              </a>
            )}
          </div>
         
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">HealthX</span>
                <img alt="HealthX" src="Logo.png" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(({ name, href, id, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => {
                        handleNavigation(href, id);
                        setMobileMenuOpen(false);
                      }}
                      className="flex w-full items-center rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <Icon className="mr-2 h-5 w-5 text-gray-500" />
                      {name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <LogIn className="mr-2 h-5 w-5 text-gray-500" />
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
