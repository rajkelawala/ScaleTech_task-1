import React from 'react';
import { BiStar } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { FaHome, FaGraduationCap, FaBriefcase, FaHeart, FaUser, FaCog } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const Sidebar = () => {
  // const divStyles = {
  //   boxShadow: '1px 2px 9px rgba(0, 0, 0, 0.1)',
  //   margin: '5px',
  //   padding: '1em',
  // };
  return (
    <div className="w-1/6 bg-white text-black h-screen flex flex-col justify-between pl-8 pt-5 pb-5 border-r shadow-lg mr-4" >
      
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
          <IoCall className="mr-3" />
          <span>Grade Point Average</span>
        </li>
        <li className="flex items-center">
          <BsStarFill className="mr-3" />
          <span>Do you participate in</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
