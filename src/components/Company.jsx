// Company.jsx

import React from 'react';

const Company = ({ logo, name, location }) => {
  return (
    <div className="bg-transparent border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center justify-between space-y-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:opacity-90 h-48 min-w-[150px]">
      {/* Company logo */}
      <img src={logo} alt={name} className="w-16 h-16 object-contain transition-transform duration-300" />

      {/* Company name */}
      <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>

      {/* Company location */}
      <p className="text-sm text-gray-500 text-center">{location}</p>

      {/* Optional: Add a horizontal divider */}
      <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
    </div>
  );
};

export default Company;
