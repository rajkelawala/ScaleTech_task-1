import React, { useState, useEffect } from "react";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { FaUserGraduate, FaCalendarAlt, FaTools, FaStar } from 'react-icons/fa'; // Importing icons

const Forms = ({ jsonData }) => {
  const [formData, setFormData] = useState({});


  // Render form fields based on the JSON structure
  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.name] || ""}
            className=" p-2 w-full shadow-md"
          />
        );
        case "textarea":
          return (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ""}
              className=" p-2 w-full shadow-md"
            />
          );
      case "dropdown":
        return (
          <select
            name={field.name}
            required={field.required}
            value={formData[field.name] || ""}
            className=" p-2 w-full shadow-md"
          >
            <option value="">Select an option</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "radio":
        return field.options.map((option) => (
          <label key={option.value} className="mr-4">
            <input
              type="radio"
              name={field.name}
              value={option.value}
              checked={formData[field.name] === option.value}
              className="mr-2"
            />
            {option.label}
          </label>
        ));
      case "checkbox":
        return field.options.map((option) => (
          <label key={option.value} className="block">
            <input
              type="checkbox"
              name={field.name}
              value={option.value}
              checked={formData[field.name] || false}
              className="mr-2"
            />
            {option.label}
          </label>
        ));
      case "slider":
        return (
          <input
            type="range"
            name={field.name}
            min={field.min}
            max={field.max}
            step={field.step}
            value={formData[field.name] || field.min}
            className="w-full"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="pl-6 w-3/5">
      <div className="grid grid-cols-4 gap-x-8 mb-4"> {/* Adjusted gap-x-8 for more explicit horizontal spacing */}
        <div className="flex items-center justify-center">
          <FaUserGraduate className="mr-2" />
          <span>Highest</span>
        </div>
        <div className="flex items-center justify-center">
          <FaCalendarAlt className="mr-2" />
          <span>Graduation Year</span>
        </div>
        <div className="flex items-center justify-center">
          <FaTools className="mr-2" />
          <span>Skills</span>
        </div>
        <div className="flex items-center justify-center">
          <FaStar className="mr-2" />
          <span>Level of Interest</span>
        </div>
      </div>


      <hr className="mb-4" />

      <div className="flex  mb-4">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <button className="absolute bottom-0 right-0 p-1 bg-black text-white rounded">
            <BiEditAlt className="w-4 h-4" />
          </button>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block font-medium mb-1 ">Address</label>
            {renderField({
              type: 'textarea',
              classname: 'shadow-md',
              name: 'address',
              placeholder: 'Enter your address',
              required: true
            })}
          </div>
          <div>
            <label className="block font-medium mb-1">State</label>
            {renderField({
              type: 'dropdown',
              name: 'state',
              required: true,
              options: ["Alabama", "California", "New York", "Texas", "Washington"]
            })}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Phone Number</label>
          {renderField({
            type: 'text',
            name: 'phoneNumber',
            placeholder: 'Enter your phone number',
            required: true
          })}
        </div>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="">
            <label className="block font-medium mb-1">Preferred Contact Method</label>
            {renderField({
              type: 'dropdown',
              name: 'preferredContact',
              required: true,
              options: ["Email", "Phone", "SMS"]
            })}
          </div>

          <div className="">
            <label className="block font-medium mb-1">Current Job Title</label>
            {renderField({
              type: 'text',
              name: 'currentJobTitle',
              placeholder: 'Enter your current job title'
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block font-medium mb-1">Employment Status</label>
            {renderField({
              type: 'dropdown',
              name: 'employmentStatus',
              required: true,
              options: ["Employed", "Unemployed", "Student"]
            })}
          </div>
          <div>
            <label className="block font-medium mb-1">Skills</label>
            {renderField({
              type: 'text',
              name: 'skills',
              placeholder: 'Enter your skills'
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block font-medium mb-1">Favorite Hobby</label>
            {renderField({
              type: 'text',
              name: 'favoriteHobby',
              placeholder: 'Enter your favorite hobby'
            })}
          </div>
          <div>
            <label className="block font-medium mb-1">Level of Interest</label>
            {renderField({
              type: 'slider',
              name: 'levelOfInterest',
              min: 1,
              max: 10,
              step: 1
            })}
          </div>
        </div>

        <button type="submit" className="w-full bg-black text-white p-2 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
