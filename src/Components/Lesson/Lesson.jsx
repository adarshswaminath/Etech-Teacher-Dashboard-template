import React from 'react'
import RightPannelOfLesson from './RightPannelOfLesson'

function Lesson() {
  return (
    <div className='p-2 md:p-4 lg:p-6 xl:p-8'>
      <div className="grid lg:flex gap-4">
        {/* first block */}
        <div className="bg-white w-full lg:w-2/3">1</div>
        {/* second block */}
        <div className="w-full lg:w-1/3 bg-gray-100">
          <RightPannelOfLesson/>
        </div>
      </div>
    </div>
  )
}

export default Lesson