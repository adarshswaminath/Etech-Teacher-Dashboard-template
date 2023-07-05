import React from "react";
import { BsPieChartFill ,BsGraphUpArrow} from "react-icons/bs";
import Graph from "./Graph";



const Counrty = ({ counrty }) => {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <div>
          <h3 className="text-violet-600">{counrty} </h3>
          <span className="text-gray-500">4000</span>
        </div>
        <BsPieChartFill className="text-xl text-violet-600" />
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div className="p-2 md:p-4 lg:p-6 xl:p-8">
      <div className="grid lg:flex md:flex gap-4 mt-[-4px]">
        {/* first box */}
        <div className="w-full lg:w-3/4 h-96 p-4 bg-white rounded-lg">
            <div className="title flex justify-between">
                <div className="flex items-center">
                    <h3 className="text-violet-600 text-xl font-semibold">Revenue</h3>
                    <div className="flex items-center bg-gray-200 rounded-full h-6 w-20 ml-2 font-semibold">
                    <BsGraphUpArrow className="ml-2 text-green-500"/> 
                    <span className="ml-2 text-green-500">0.3%</span>
                    </div>
                </div>
                {/* countries */}
                <div className="flex gap-3">
                    <div className="flex items-center">
                        Course Visit
                        <div className="h-4 w-4 ml-2 rounded-full bg-red-500 "></div>
                    </div>
                    <div className="flex items-center">
                        Course Sale
                        <div className="h-4 w-4 ml-2 rounded-full bg-violet-500 "></div>
                    </div>

                </div>
            </div>
            {/* box body */}
            {/* <Graph/> */}
        </div>
        
        {/* second Box */}
        <div className="w-full lg:w-1/4 h-96 p-8 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-violet-600">
            Top Student Locations
          </h2>
          {/* countries */}
          <div className="grid gap-2 mt-3">
            <Counrty counrty="El Salvador" />
            <Counrty counrty="Dominican" />
            <Counrty counrty="Chillie" />
            <Counrty counrty="Chillie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
