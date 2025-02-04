import React from 'react';
import { Upload } from 'lucide-react';

const VerifyProfile: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Upload Medical License */}
        <div className="bg-sky-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-white">Upload Medical License</h2>
          <div className="flex flex-col items-center">
            <div className="w-full mt-6 border-2 border-dashed border-blue-600 rounded-lg p-6 text-center">
              <Upload className="mx-auto text-gray-400 mb-2" size={24} />
              <p className="text-blue-500 hover:underline cursor-pointer">Click to upload</p>
              <p className="text-gray-400 text-sm mt-2">or drag and drop</p>
              <p className="text-gray-400 text-sm mt-1">SVG, PNG, JPG, or PDF</p>
              <p className="text-gray-400 text-sm">(max. 800 X 800px)</p>
            </div>
          </div>
        </div>

        {/* Right Side: Upload Experience or Degree Certificate */}
        <div className="bg-sky-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-white">Upload Experience or Degree Certificate</h2>
          <div className="flex flex-col items-center">
            <div className="w-full mt-6 border-2 border-dashed border-blue-600 rounded-lg p-6 text-center">
              <Upload className="mx-auto text-gray-400 mb-2" size={24} />
              <p className="text-blue-500 hover:underline cursor-pointer">Click to upload</p>
              <p className="text-gray-400 text-sm mt-2">or drag and drop</p>
              <p className="text-gray-400 text-sm mt-1">SVG, PNG, JPG, or PDF</p>
              <p className="text-gray-400 text-sm">(max. 800 X 800px)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyProfile;
