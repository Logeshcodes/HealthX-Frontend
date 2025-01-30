const DoctorCard = ({ doctor, position } : any) => {
    return (
      <div
        className={`transform transition-all duration-300 ${
          position === 0
            ? 'scale-100 opacity-100 z-10'
            : Math.abs(position) === 1
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
    );
  };
  
  export default DoctorCard;
  