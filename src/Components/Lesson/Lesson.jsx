import React from 'react'
import RightPannelOfLesson from './RightPannelOfLesson'
import Search from '../Search'
import LeftPannelOfLesson from './LeftPannelOfLesson'

function Lesson() {
  return (
    <div className='p-2 md:p-4 lg:p-6 xl:p-8'>
      <div className="grid lg:flex items-center justify-between mb-3">
        <div className="grid">
          <h3 className="text-2xl font-semibold text-violet-900">Upload New Course</h3>
          <h4 className="text-sm text-gray-500">Education Teacher Dashboard</h4>
        </div>
        <Search bgcolor="white"/>
      </div>
      <div className="grid lg:flex gap-4">
        {/* first block */}
        <div className="bg-white w-full lg:w-2/3">
          <LeftPannelOfLesson/>
        </div>
        {/* second block */}
        <div className="w-full lg:w-1/3 bg-gray-100">
          <RightPannelOfLesson/>
        </div>
      </div>
    </div>
  )
}

export default Lesson