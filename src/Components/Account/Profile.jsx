import React from 'react'

import {AiOutlineUser} from 'react-icons/ai'
import {BiSolidMessageDetail} from "react-icons/bi"
import {BsFillBookFill,BsActivity} from "react-icons/bs"

const Label = ({icon,color,title,caption}) => {
    return (
        <div className='mt-3'>
            <div className="flex gap-6 items-center">
                <div className={`text-3xl bg-${color}-200 text-${color}-600 rounded-lg h-16 w-16 p-4`}>
                    {icon}
                </div>
                <div>
                    <h3 className='text-gray-600 font-semibold'>{title}</h3>
                    <h3 className='text-gray-500'>{caption}</h3>
                </div>
            </div>
        </div>
    )
} 


function Profile() {
  return (
    <div className='p-4'>
        <div className="bg-white rounded-lg p-2">
            <div className='font-semibold text-xl text-gray-600'>User Profile</div>
            {/* user profile badge */}
            <div className='mt-6 flex  gap-8'>
                <img 
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" 
                    className='w-16 h-16 shadow-lg rounded' />
                <div>
                    <h3 className='text-xl font-semibold text-gray-600'>Satoshi</h3>
                    <h3 className='text-gray-500'>UI/UX Designer</h3>
                    <h3 className='text-gray-500'>uiuxdesigner@gmail.com</h3>
                </div>
            </div>
            {/* profile badge close  */}
            {/* user labels */}
            <Label icon={<AiOutlineUser/>} color="green" title="Profile" caption="Account Setting Profile"/>
            <Label icon={<BiSolidMessageDetail/>} color="violet" title="My Message" caption="Inbox and draft"/>
            <Label icon={<BsActivity/>} color="red" title="My Activity" caption="Logs and Notification"/>
            <Label icon={<BsFillBookFill/>} color="blue" title="My Course" caption="90 Courses"/>
            <Label icon={<BsFillBookFill/>} color="blue" title="Payment Method" caption="Latest Courses"/>
            


        </div>
    </div>
  )
}

export default Profile