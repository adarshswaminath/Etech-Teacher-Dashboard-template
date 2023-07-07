import React from "react";
import {AiOutlineBell,AiOutlineMessage} from "react-icons/ai"
import {BsGraphUpArrow} from "react-icons/bs"
import {BiUpload} from 'react-icons/bi'
import Search from "./Search";
function Navbar() {
  return (
    <div className="bg-violet-600 p-2">
      <div className="navbar bg-base-100 flex justify-between">
        {/* dont remove this label its working perfect  */}
        <div className="flex">
          <label htmlFor="my-drawer" className="drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Hello Mad</a>
        </div>
        </div>
        {/* label close */}
        
        <div className="hidden lg:flex">
            <Search bgcolor="gray-100"/>
        </div>

        <div className="hidden lg:flex gap-3">
            <button className="flex text-xl py-2 px-12 rounded text-white bg-[#fb6d3a] hover:bg-[#ec7e3c]">
                New Upload
            </button>
            <div className="hidden lg:flex text-2xl bg-gray-200 hover:bg-gray-400 px-2 py-2 rounded-lg">
                <AiOutlineBell/>
            </div>
            <div className="hidden lg:flex text-2xl bg-gray-200 hover:bg-gray-400 px-2 py-2 rounded-lg">
                <AiOutlineMessage/>
            </div>
            <div className="hidden lg:flex text-2xl bg-gray-200 hover:bg-gray-400 px-2 py-2 rounded-lg">
                <BsGraphUpArrow/>
            </div>
        </div>

        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
       
      </div>
    </div>
  );
}

export default Navbar;
