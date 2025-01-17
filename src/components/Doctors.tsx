import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DoctorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Neurologist",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/6998/6998099.png"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      imageUrl: "https://as1.ftcdn.net/jpg/01/22/14/46/1000_F_122144677_FCVJF5Fyh0EZrzkPji7ARzphAuRzZQoe.jpg"
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Pediatrician",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3774/3774293.png"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/4974/4974208.png"
    },
    {
      name: "Dr. Amanda Martinez",
      specialty: "Dermatologist",
      imageUrl: "https://media.istockphoto.com/id/1219185969/vector/the-icon-the-doctor-on-a-turquoise-background-in-a-circle-vector-illustration.jpg?s=612x612&w=0&k=20&c=NufjEIGGpxX-fic8Z-uVQAN7X-7Y5JIedJ3KXMbk_HU="
    },
    
    {
      name: "Dr. Amanda Martinez",
      specialty: "Dermatologist",
      imageUrl: "https://img.freepik.com/premium-vector/female-doctor-with-stethoscope-round-icon-vector-illustration-cartoon-style_1142-66659.jpg"
    },
    
    {
      name: "Dr. Amanda Martinez",
      specialty: "Dermatologist",
      imageUrl: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Amanda Martinez",
      specialty: "Dermatologist",
      imageUrl: "/api/placeholder/200/200"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const getVisibleDoctors = () => {
    const visibleDoctors = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      if (index < 0) index = doctors.length + index;
      if (index >= doctors.length) index = index - doctors.length;
      visibleDoctors.push({ ...doctors[index], position: i });
    }
    return visibleDoctors;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Medical Specialists</h2>
      
      <div className="relative">
               {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          <ChevronRight size={24} />
        </button>

        {/* Doctors Carousel */}
        <div className="flex justify-center items-center gap-4 overflow-hidden">
          {getVisibleDoctors().map((doctor, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-300 ${
                doctor.position === 0 
                  ? 'scale-100 opacity-100 z-10' 
                  : Math.abs(doctor.position) === 1
                  ? 'scale-75 opacity-70'
                  : 'scale-50 opacity-40'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 w-64">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{doctor.name}</h3>
                <p className="text-gray-600 text-center">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {doctors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCarousel;