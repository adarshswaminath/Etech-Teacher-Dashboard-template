import React from 'react'
import {BiDollar,BiSolidGraduation,BiSolidBadgeCheck} from 'react-icons/bi'
import {BsGraphUpArrow,BsGlobe} from "react-icons/bs"
const Card = ({title,caption,icon,logo}) => {
  return (
    <div className='p-8 bg-white rounded-lg'>
      <div className="flex justify-between items-center">
        <div className="grid gap-3">
          <h2 className='text-xl font-semibold text-violet-600'>{title}</h2>
          <div className="flex gap-2 items-center">
            <h3 className='text-xl font-semibold text-violet-600'>{caption}</h3>
            <h3 className='text-xl font-semibold text-green-500 flex gap-2'>
              {icon}
            </h3>
          </div>
        </div>
        <div className='bg-gray-300 hover:bg-gray-400 px-4 py-5 text-4xl rounded-lg font-semibold text-violet-600'>
         {logo}
        </div>
      </div>
    </div>
  )
}


function Cards() {
  return (
    <div className='mt-3 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
      <Card title="Total Revenue" caption="$11,081" icon={<BsGraphUpArrow/>} logo={ <BiDollar/>}/>
      <Card title="Average Rating" caption="4.46" icon="+15 New" logo={ <BiSolidBadgeCheck/>}/>
      <Card title="Total Students" caption="12,700" icon="+5 New" logo={ <BiSolidGraduation/>}/>
      <Card title="Countries" caption="155" icon="+15 New" logo={ <BsGlobe/>}/>
      

    </div>
  )
}

export default Cards