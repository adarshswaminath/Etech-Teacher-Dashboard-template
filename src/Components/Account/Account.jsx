import React from "react";
import { BsBell} from "react-icons/bs";
import Profile from "./Profile";
import Performance from "./Performance";
import Form from "./Form";
import ImageUpload from "./ImageUpload";
import Information from "./Information";
import Presence from "./Presence";
import Search from "../Search";

function Account() {
  return (
    <div className="p-2 md:p-4 lg:p-6 xl:p-8">
      <div className="grid lg:flex items-center justify-between mb-3">
        <div className="grid">
          <h3 className="text-2xl font-semibold text-violet-500">My Account</h3>
          <h4 className="text-sm text-gray-600">Education Teacher Dashboard</h4>
        </div>
        <Search bgcolor="white"/>
      </div>
      <div className="grid lg:flex gap-4">
        <div className="w-full lg:w-2/3 bg-white p-3 ">
          <h3 className="text-xl text-violet-600 font-semibold">Generals</h3>
          <hr />

          <div className="grid lg:flex items-center gap-4">
            <div className="w-full lg:w-4/5">
              <Form />
            </div>
            <div className="w-full lg:w-1/5">
              <ImageUpload />
            </div>
          </div>
          {/* first box content */}
          <Information />
          <Presence />
        </div>
        <div className="w-full lg:w-1/3 bg-gray-100 rounded-lg p-2">
          {/* top button section */}
          <div className="flex justify-between items-center">
            <div>
              <button className="flex text-xl py-2 px-6 lg:px-6 rounded text-white bg-[#fb6d3a] hover:bg-[#ec7e3c]">
                New Upload
              </button>
            </div>
            <div className="text-2xl hover:animate-bounce">
              <BsBell />
            </div>
            <div className="flex gap-3 items-center">
              <div className="grid">
                <span className="font-semibold text-gray-600">Satoshi</span>
                <span className="text-gray-500 text-sm">Designer</span>
              </div>
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
                className="w-14 h-14 shadow-lg rounded"
              />
            </div>
          </div>
          {/* top section created */}
          {/* user profile section */}

          <Profile />
          <Performance />
        </div>
      </div>
    </div>
  );
}

export default Account;
