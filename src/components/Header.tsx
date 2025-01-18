import { useState} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Home, Users, Calendar, Grid, Info, LogIn } from 'lucide-react';


const navigation = [
  { name: 'Home', href: '#' ,  id: 'home', icon: Home },
  { name: 'Doctors', href: '#' , id: 'doctors', icon: Users },
  { name: 'Appointments', href: '#',   id: 'appointments', icon: Calendar  },
  { name: 'Service', href: '#',  id: 'services', icon: Grid },
  { name: 'About Us', href: '#' , id: 'about', icon: Info }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home');


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-blue-600">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">HealthX</span>
              <img
                alt="HealthX"
                src="Logo.png"
                title='HealthX'
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
              <span className="sr-only">Open main menu </span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(({name ,href , id, icon: Icon }) => (
              <a key={name} href={href} >
                <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200
                ${activeTab === id 
                  ? 'bg-white text-indigo-600' 
                  : 'text-white hover:bg-indigo-500'}`}
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </button>
              </a>
            ))}


          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
          <a href="/login">
          <button type="button" className="mr-3 inline-block px-6 py-3 font-bold text-center bg-gradient-to-tl from-blue-600 to-cyan-400 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white">Login</button>
          </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"> HealthX</span>
                <img
                  alt=""
                  src="Logo.png"
                  className="h-8 w-auto"
                />
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
                  {navigation.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <Icon className="mr-2 h-5 w-5 text-gray-500" />
                      {name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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
  )
}
