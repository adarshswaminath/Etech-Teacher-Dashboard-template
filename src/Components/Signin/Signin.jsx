import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import image from "../Images/signup.svg"
function Signin() {
  return (
    <div>
      <div className="grid lg:flex bg-violet-500">
        <div className="w-full text-center h-screen lg:w-1/2 bg-white p-3 border rounded-br-sm  rounded-tr-sm  lg:rounded-br-[28px]  lg:rounded-tr-[28px] grid">
            {/* top header */}
            <div className="flex justify-between">
                <div className="logo text-3xl font-semibold text-violet-500">E-tech</div>
                <Link to="/signup" className="btn bg-white border border-gray-600">Sign Up</Link>
            </div>
            <div className="p-2 md:p-4 lg:p-8">
            <Form/>
            </div>
        </div>
        <div
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: '100% 100%',
  }}
  className="hidden h-screen lg:grid w-full lg:w-1/2 p-2"
>
  
</div>

      </div>
    </div>
  );
}

export default Signin;
