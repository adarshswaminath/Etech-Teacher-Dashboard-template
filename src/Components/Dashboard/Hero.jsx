import React from "react";
import { BsPieChartFill, BsGraphUpArrow } from "react-icons/bs";
import Graph from "./Graph";

const Country = ({ country }) => {
  return (
    <div className="flex justify-between mt-3">
      <div>
        <h3 className="text-violet-600">{country}</h3>
        <span className="text-gray-500">4000</span>
      </div>
      <BsPieChartFill className="text-xl text-violet-600" />
    </div>
  );
};

function Hero() {
  return (
    <div className="grid lg:flex md:flex gap-4 mt-[-4px]">
      {/* First Box */}
      <div className="w-full lg:w-3/4  p-4 bg-white rounded-lg">
        <div className="title flex justify-between items-center">
          <h3 className="text-violet-600 text-xl font-semibold">Revenue</h3>
          <div className="flex items-center bg-gray-200 rounded-full h-6 w-20 font-semibold">
            <BsGraphUpArrow className="text-green-500 mr-1" />
            <span className="text-green-500">0.3%</span>
          </div>
        </div>
        <Graph/>
        {/* Graph */}
        {/* Countries */}
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-red-500"></div>
              <span className="ml-1">Course Visit</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-violet-500"></div>
              <span className="ml-1">Course Sale</span>
            </div>
          </div>
          <BsPieChartFill className="text-xl text-violet-600" />
        </div>
      </div>

      {/* Second Box */}
      <div className="w-full lg:w-1/4 h-96 p-8 bg-white rounded-lg mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold text-violet-600">
          Top Student Locations
        </h2>
        {/* Countries */}
        <div className="grid gap-2 mt-3">
          <Country country="El Salvador" />
          <Country country="Dominican" />
          <Country country="Chile" />
          <Country country="Chile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
