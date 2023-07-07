import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";

function Form() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Email"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Phone No"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Expertise"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="User Name"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div className="relative">
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              className="absolute right-2 top-4 text-gray-600"
              onClick={toggleShowPassword1}
            >
              {showPassword1 ? <AiFillEye /> : <BsFillEyeSlashFill />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              className="mt-2 absolute right-2 top-2 text-gray-600"
              onClick={toggleShowPassword}
            >
              {showPassword ? <AiFillEye /> : <BsFillEyeSlashFill />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
