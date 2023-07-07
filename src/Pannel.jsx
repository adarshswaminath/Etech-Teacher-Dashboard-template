import React from "react";
import Navbar from "./Components/Navbar";
// import icons
import {BiHomeAlt,BiMessage} from "react-icons/bi"
import {SlCalender} from "react-icons/sl"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {BsGraphUpArrow} from "react-icons/bs"
import Dashboard from "./Components/Dashboard/Dashboard";

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Schedule from "./Components/Schedule/Schedule";
import Message from "./Components/Message/Message";
import Course from "./Components/Course/Course";
import Account from "./Components/Account/Account";
import Signin from "./Components/Signin/Signin";

function Pannel() {
  return (
   <Router>
        


           <div className="bg-gray-200">
      {/* drawer starts */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* page components */}
          <Navbar/>
           {/* adding router */}
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/schedule" element={<Schedule/>}></Route>
        <Route exact path="/message" element={<Message/>}></Route>
        <Route exact path="/course" element={<Course/>}></Route>
        <Route exact path="/account" element={<Account/>}></Route>
      </Routes>
          {/* close of components */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-12 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
            <h1 className="text-3xl font-semibold text-violet-600">E-Tech</h1>
              <Link to="/dashboard" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BiHomeAlt/>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/schedule"  className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <SlCalender/>
                My Schedule
              </Link>
            </li>
            <li>
              <Link to="/message" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BiMessage/>
                Message
              </Link>
            </li>
            <li>
              <Link to="/course" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <AiOutlinePlayCircle/>
                My Course
              </Link>
            </li>
            <li>
              <Link to="/account" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BsGraphUpArrow/>
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>

     
      {/* drawer close */}
    </div>
   </Router>
  );
}

export default Pannel;
