import React from 'react'
import {BsBell,BsFillAspectRatioFill,BsThreeDotsVertical} from "react-icons/bs"
import {MdOutlineMonitorHeart} from "react-icons/md"
import {AiOutlinePieChart,AiOutlineFilePdf} from "react-icons/ai"


const WithdrawList = ({domain}) => {
  return(
    <div>
      <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-3">
            <div className="grid">
              <div className="text-violet-500 font-semibold">{domain}</div>
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

const NotificationList = ({Color}) => {
    const color = ['green','red','indigo','blue']
    return(
      <div>
        <div className="mt-3 flex justify-between items-center">
            <div className="flex gap-3">
              <div className={`bg-${Color}-200 text-${Color}-400 p-3 rounded-lg text-xl font-semibold`}><AiOutlineFilePdf/></div>
              <div className="grid">
                <div className="text-violet-500 font-medium">Refferences.zip</div>
                <div className="text-gray-500">19 May 2023 at 11:53</div>
              </div>
            </div>
            <div className=" text-gray-500">
              1.8 MB
            </div>
          </div>
      </div>
    )
  }


function RightPannel() {
  return (
    <div className='p-2'>
        {/* top bar */}
        <div className="flex justify-between items-center mb-3">
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
          {/* top bar close */}
          {/* @dev cards representing user option */}
         <div className="bg-white p-3 gird">
           {/* second pannel */}
           <h3 className='text-xl font-semibold text-violet-900 mb-4 mt-4'>Shared Files</h3>
            <div className='grid gap-5'>
                <NotificationList Color="green"/>
                <NotificationList Color="red"/>
                <NotificationList Color="indigo"/>
                <NotificationList Color="green"/>

            </div>
            <h3 className='text-xl font-semibold text-violet-900 mb-4 mt-6'>Shared Links</h3>
            {/* first pannel */}
            <div className="grid gap-5">
             <WithdrawList domain="Muz.li"/>
             <WithdrawList domain="google.com"/>
             <WithdrawList domain="facebook.com"/>
             <WithdrawList domain="amazon.in"/>

            </div>
           
         </div>
    </div>
  )
}

export default RightPannel