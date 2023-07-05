import React from "react";
import Navbar from "./Components/Navbar";
// import icons
import {BiHomeAlt,BiMessage} from "react-icons/bi"
import {SlCalender} from "react-icons/sl"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {BsGraphUpArrow} from "react-icons/bs"

function App() {
  return (
    <div>
      {/* drawer starts */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* page components */}
          <Navbar/>
          {/* close of components */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-12 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
            <h1 className="text-3xl font-semibold text-violet-600">E-Tech</h1>
              <a className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BiHomeAlt/>
                Dashboard
              </a>
            </li>
            <li>
              <a className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <SlCalender/>
                My Schedule
              </a>
            </li>
            <li>
              <a className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BiMessage/>
                Message
              </a>
            </li>
            <li>
              <a className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <AiOutlinePlayCircle/>
                My Course
              </a>
            </li>
            <li>
              <a className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BsGraphUpArrow/>
                My Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* drawer close */}
    </div>
  );
}

export default App;
