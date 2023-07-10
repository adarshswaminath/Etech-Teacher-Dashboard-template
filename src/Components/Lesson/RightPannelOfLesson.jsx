import React from 'react'
import {BsBell,BsFillAspectRatioFill} from "react-icons/bs"
import {MdOutlineMonitorHeart} from "react-icons/md"
import {AiOutlinePieChart,AiOutlineMonitor,AiOutlineFilePdf} from "react-icons/ai"

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


function RightPannelOfLesson() {
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
            <h3 className='text-xl font-semibold text-violet-900 mb-4'>Tips & Tricks</h3>
            {/* first pannel */}
            <div className="grid gap-5">
             {/* first sone */}
                <div className='bg-green-200 flex gap-6 p-4 items-center'>
                    <div className='text-5xl text-green-400'><MdOutlineMonitorHeart/></div>
                    <div className="grid">
                        <div className='text-violet-500 font-semibold'>Make course on adobe xd</div>
                        <div className='text-gray-500'>9 Jan 2023 at 11:53</div>
                    </div>
                </div>
            {/* second one */}
                <div className='bg-red-200 flex gap-6 p-4 items-center'>
                    <div className='text-5xl text-red-400'><AiOutlinePieChart/></div>
                    <div className="grid">
                        <div className='text-violet-500 font-semibold'>Mobile App Design From Scratch</div>
                        <div className='text-gray-500'>UI Design</div>
                    </div>
                </div>
            {/* third one */}
                <div className='bg-indigo-200 flex gap-6 p-4 items-center'>
                        <div className='text-5xl text-indigo-400'><AiOutlineMonitor/></div>
                        <div className="grid">
                            <div className='text-violet-500 font-semibold'>Design For Humanity: For New</div>
                            <div className='text-gray-500'>User Experience</div>
                        </div>
                    </div>
            {/* fourth one */}
            <div className='bg-blue-200 flex gap-6 p-4 items-center'>
                    <div className='text-5xl text-blue-400'><BsFillAspectRatioFill/></div>
                    <div className="grid">
                        <div className='text-violet-500 font-semibold'>UI/UX Design Specilization</div>
                        <div className='text-gray-500'>WEB DESIGN UI&UX</div>
                    </div>
                </div>
            </div>
            {/* second pannel */}
            <h3 className='text-xl font-semibold text-violet-900 mb-4 mt-4'>Recent Notification</h3>
            <div className='grid gap-5'>
                <NotificationList Color="green"/>
                <NotificationList Color="red"/>
                <NotificationList Color="indigo"/>
                <NotificationList Color="green"/>

            </div>
         </div>
    </div>
  )
}

export default RightPannelOfLesson