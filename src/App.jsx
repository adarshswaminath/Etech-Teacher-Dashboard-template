import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import { BiHomeAlt, BiMessage } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Schedule from "./Components/Schedule/Schedule";
import Message from "./Components/Message/Message";
import Course from "./Components/Course/Course";
import Account from "./Components/Account/Account";
import Signin from "./Components/Signin/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Router>
  );
}

function Panel() {
  return (
    <div className="bg-gray-200">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/panel/schedule" element={<Schedule />} />
            <Route exact path="/panel/message" element={<Message />} />
            <Route exact path="/panel/course" element={<Course />} />
            <Route exact path="panel/account" element={<Account />} />
          </Routes>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-12 w-80 h-full bg-base-200 text-base-content">
            <li>
              <h1 className="text-3xl font-semibold text-violet-600">E-Tech</h1>
              <Link to="/panel" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BiHomeAlt />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/panel/schedule" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <IoCalendarOutline />
                My Schedule
              </Link>
            </li>
            <li>
              <Link to="/message" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BiMessage />
                Message
              </Link>
            </li>
            <li>
              <Link to="/course" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <AiOutlinePlayCircle />
                My Course
              </Link>
            </li>
            <li>
              <Link to="/panel/account" className="mt-6 text-xl flex hover:bg-violet-600 hover:text-white">
                <BsGraphUp />
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
