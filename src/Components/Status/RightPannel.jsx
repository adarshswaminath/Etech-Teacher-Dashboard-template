import React from "react";
import { BsBell,BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";


const WithdrawList = () => {
  return(
    <div>
      <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-3">
            <div className="bg-green-200 text-green-400 p-3 rounded-lg text-xl font-semibold"><AiOutlineCheck/></div>
            <div className="grid">
              <div className="text-gray-500 font-semibold">US $350.80</div>
              <div className="text-gray-500">19 May 2023</div>
            </div>
          </div>
          <div className="text-xl text-gray-500">
            <BsThreeDotsVertical/>
          </div>
        </div>
    </div>
  )
}



function RightPannel() {
  return (
    <div>
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
      {/* color cards */}
      <div className="p-3 bg-white">
        <h3 className="mb-3 text-lg font-semibold text-violet-500">
          Your Balance
        </h3>
        <div className="grid gap-3">
          {/* first card open */}
          <div className="bg-red-300 p-3 flex items-center justify-between rounded-lg">
            <div className="grid">
              <h3 className="text-2xl font-semibold text-violet-600">
                $55,800
              </h3>
              <h4 className="text-gray-500">Total Earning</h4>
            </div>
            <div className="bg-white p-3 rounded-lg text-red-500 text-xl hover:animate-ping">
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* first card close */}
          {/* second card open */}
          <div className="bg-blue-300 p-3 flex items-center justify-between rounded-lg">
            <div className="grid">
              <h3 className="text-2xl font-semibold text-violet-600">$72.80</h3>
              <h4 className="text-gray-500">Total Revenue</h4>
            </div>
            <div className="bg-white p-3 rounded-lg text-blue-500 text-xl hover:animate-ping">
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* second card close */}
          {/* third card open */}
          <div className="bg-green-200 p-3 flex items-center justify-between rounded-lg">
            <div className="grid">
              <h3 className="text-2xl font-semibold text-violet-600">$52.80</h3>
              <h4 className="text-gray-500">Total Pending</h4>
            </div>
            <div className="bg-white p-3 rounded-lg text-green-500 text-xl hover:animate-ping">
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* third card close */}
          {/* third card open */}
          <div className="bg-green-400 p-3 flex items-center justify-between rounded-lg">
            <div className="grid">
              <h3 className="text-2xl font-semibold text-violet-600">
                $1022.80
              </h3>
              <h4 className="text-gray-500">Available</h4>
            </div>
            <div className="bg-green-500 p-3 rounded-lg text-white text-xl hover:animate-ping">
              <AiOutlineArrowRight />
            </div>
          </div>
          {/* third card close */}
          {/* button */}
          <div className="p-4 bg-violet-500 text-white text-center">
            Make request For Withdraw
          </div>
        </div>
      </div>
      <div className="p-3 bg-white mt-6">
        <h3 className="text-xl font-semibold text-violet-600">
          Payout Withdraw
        </h3>
        <div className="rounded-lg m-auto p-4 text-center">
          <div
            className="radial-progress text-primary "
            style={{ "--value": 80, "--size": "12rem" }}
          >
            80%
          </div>
        </div>
        {/* graph finish menu starts */}
        <div className="grid gap-3 mt-3">
          <WithdrawList/>
          <WithdrawList/>
          <WithdrawList/>
          <WithdrawList/>

        </div>
      </div>
    </div>
  );
}

export default RightPannel;
