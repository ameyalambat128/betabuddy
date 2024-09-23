import React from 'react';

const errors = [
  "No file uploaded",
  "Invalid file type",
  "Invalid file size",
  "Could not read image",
  "Network timeout",
  "Unknown error",
];

export default function ErrorPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-8">Error Report</h1>
      
      {/* Introduction Section */}
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-400 mt-2">
          Below is a list of potential errors errors. Please find your error code and resolve the issue accordingly.
        </p>
      </div>
      
      {/* Error List */}
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-4">Potential Issues:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {errors.map((error, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">{`Error ${index + 1}`}</h3>
              <p className="text-gray-400 mt-2">{error}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer or Additional Information */}
      <div className="mt-16 text-sm text-gray-400">
        Please contact support if the issue persists.
      </div>
    </div>
  );
}
