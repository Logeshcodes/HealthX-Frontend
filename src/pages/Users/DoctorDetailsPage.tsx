import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoctorDataById } from '../../api/UserActionApi'; // You'll need to create this API call

const DoctorDetailPage = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorDataById(); // Fetch the doctor by ID
        // const data = await getDoctorDataById(doctorId!); // Fetch the doctor by ID
        setDoctor(data);
      } catch (error) {
        console.log('Error fetching doctor details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) {
      fetchDoctor();
    }
  }, [doctorId]);

  if (loading) return <div>Loading...</div>;

  if (!doctor) return <div>No doctor found.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 pt-36">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 flex items-center justify-center">
              <img
                src={doctor.imageUrl || '/api/placeholder/96/96'}
                alt="Doctor"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-blue-500">{doctor.name}</h2>
            <p className="text-gray-600 mb-2">{doctor.department}</p>
            <p className="text-gray-600 mb-1">{doctor.education}</p>
            <p className="text-gray-500 text-sm mb-2">{doctor.experience} years experience overall</p>
            <p className="font-medium mb-1">{doctor.city}, {doctor.state}</p>
            <p className="text-gray-600 text-sm">{doctor.hospital}</p>
            <p className="text-gray-500 text-sm mt-2">{doctor.description}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-green-500 text-sm font-medium">FREE</span>
              <span className="text-gray-500 text-sm">{doctor.consultationFee} Consultation fee at clinic</span>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-6">
              Book Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDetailPage;
