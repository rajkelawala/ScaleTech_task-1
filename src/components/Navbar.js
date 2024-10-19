import React from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  return (
    <nav className="bg-white pt-4 pl-4 flex justify-between items-center w-full pr-4">
      <div className="text-xl font-bold">Personal</div>
      
      <div className="flex items-center">
        {/* Notification icon */}
        <FaBell className="w-5 h-5 text-black mr-4 cursor-pointer" />
        
        {/* Profile image */}
        <img
          className="w-8 h-8 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        
        {/* Full name */}
        <span className="ml-3 font-semibold">Full Name</span>

        {/* Dropdown icon */}
        <FaChevronDown className="w-3 h-3 ml-2 text-black cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
