import React from 'react';
import { FaHome, FaGraduationCap, FaBriefcase, FaHeart, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-white text-black h-screen flex flex-col justify-between pl-8 pt-5 pb-5">
      
      <ul className="space-y-6">
        <li className='text-xl font-bold'>Personal</li>
        <li className="flex items-center">
          <FaHome className="mr-3" />
          <span>Contact Information</span>
        </li>
        <li className="flex items-center">
          <FaGraduationCap className="mr-3" />
          <span>Schooling Information</span>
        </li>
        <li className="flex items-center">
          <FaBriefcase className="mr-3" />
          <span>Employment Details</span>
        </li>
        <li className="flex items-center">
          <FaHeart className="mr-3" />
          <span>Hobbies and Interests</span>
        </li>
        <li className="flex items-center">
          <FaUser className="mr-3" />
          <span>Preferred Contact</span>
        </li>
      </ul>

      <div className="space-y-6">
        <li className="flex items-center">
          <FaUser className="mr-3" />
          <span>Profile</span>
        </li>
        <li className="flex items-center">
          <FaCog className="mr-3" />
          <span>Settings</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
