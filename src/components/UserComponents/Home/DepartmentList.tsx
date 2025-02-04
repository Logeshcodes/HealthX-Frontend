import { useState } from 'react';
import { Card } from '../../Common/card/Card.tsx';
import {
  Building2,
  Stethoscope,
  Heart,
  ActivitySquare,
  TestTube,
  Shield,
  Hospital,
  Bone
} from 'lucide-react';

const Departments = () => {
  const [showAll, setShowAll] = useState(false);

  const specialists = [
    { icon: Building2, name: 'General Medicine', description: 'Primary healthcare services' },
    { icon: Stethoscope, name: 'Primary Care', description: 'Routine medical care' },
    { icon: Heart, name: 'Cardiology', description: 'Heart and cardiovascular care' },
    { icon: ActivitySquare, name: 'Radiologist', description: 'Medical imaging specialist' },
    { icon: TestTube, name: 'Hematologist', description: 'Blood disorder specialist' },
    { icon: Shield, name: 'Piscologist', description: 'Mental health care' },
    { icon: Hospital, name: 'Homeopathic', description: 'Alternative medicine' },
    { icon: Bone, name: 'Orthopedist', description: 'Bone and joint specialist' },
    { icon: Building2, name: 'Neurologist', description: 'Brain and nerve specialist' },
    { icon: Stethoscope, name: 'Dermatologist', description: 'Skin specialist' },
    { icon: Heart, name: 'Pediatrician', description: 'Child healthcare specialist' },
    { icon: ActivitySquare, name: 'ENT Specialist', description: 'Ear, nose, and throat doctor' }
  ];

  const displayedSpecialists = showAll ? specialists : specialists.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        Find By Specialisation
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedSpecialists.map((specialist, index) => (
          <Card 
            key={index} 
            
          >
            <div className="flex flex-col items-center text-center">
              <specialist.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">{specialist.name}</h3>
              <p className="text-sm text-gray-600">{specialist.description}</p>
            </div>
          </Card>
        ))}
      </div>
      
      {specialists.length > 8 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Departments;