import React from 'react'
import Search from '../Search'
import {BsFilterCircleFill} from "react-icons/bs"
import Box from './Box'
import Card from './Card'
import RightPannel from './RightPannel'

function Schedule() {
  return (
    <div className="p-2 md:p-4 lg:p-6 xl:p-8">
        <div className="grid lg:flex gap-4">
          {/* first section */}
          <div className='w-full lg:w-2/3'>
            <div className="grid lg:flex justify-between">
              <div className="grid  mb-2">
                <h3 className='text-3xl text-violet-600 font-semibold'>My Schedule 👋</h3>
                <p className='text-gray-500'>Education Teacher Dashboard</p>
              </div>
              <Search/>
            </div>
            {/* trend course */}
            <div className="flex justify-between items-center mt-3 mb-3">
              <div className='flex items-center gap-4'>
                <div className='border-4 hover:border-b-[#ecb8c2] duration-300'>
                  <h3 className='text-xl font-semibold text-violet-600'>Top Trend Course</h3>
                </div>
                <div className='border-4 hover:border-b-[#ecb8c2]'>
                  <h3 className='hidden lg:flex text-violet-600 font-semibold'>New Course</h3>
                </div>
              </div>
              <div className='flex'>
                <button className='btn'>
                  Filter
                  <BsFilterCircleFill/>
                </button>
              </div>
            </div>
            <Box/>
            <Card/>
          </div>

          {/* second box */}
          <div className='w-full lg:w-1/3 bg-gray-100 p-3 rounded-lg'>
            <RightPannel/>
          </div>
        </div>
    </div>
  )
}

export default Schedule