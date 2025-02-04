import { useEffect, useState } from 'react';
import { Search, Calendar, ChevronDown } from 'lucide-react';
import DoctorCard from '../../components/UserComponents/Doctor/DoctorCard';
import { getDoctorData } from '../../api/action/UserActionApi';



const DoctorListingPage = () => {
  const [doctors, setDoctors] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctorData();
        console.log("docyors list   ", data)
        setDoctors(data.users || []); // Set an empty array if data is null or undefined
      } catch (error) {
        console.log("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 pt-36">
        {/* Stats */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            {doctors?.length || 0} doctors are ready to serve you
          </h1>
          <p className="text-gray-600 flex items-center gap-2 text-sm md:text-base">
            <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
          
          <div className="relative">
            <select className="w-full px-4 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>All Department</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select className="w-full px-4 py-2 border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Select Time Slot</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-50">
            <Calendar className="w-5 h-5" />
            <span>Select Date</span>
          </button>
          
          <button className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
            Clear Filter
          </button>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-4">
          {loading ? (
            <div>Loading...</div>
          ) : (
            (doctors && doctors.length > 0 ? (
              doctors.map((doctor: any) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <DoctorCard doctor={doctor} />
                </div>
              ))
            ) : (
              <div>No doctors available.</div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default DoctorListingPage;
