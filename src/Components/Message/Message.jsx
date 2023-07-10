import React from 'react'
import Chat from './Chat'
import RightPannel from './RightPannel'

function Message() {
  return (
    <div className='p-2 md:p-4 lg:p-6 xl:p-8'>
      <div className="grid lg:flex gap-4">
        <div className="w-full lg:w-2/3">
          <Chat/>
        </div>
        <div className="w-full lg:w-1/3 bg-gray-100">
          <RightPannel/>
        </div>
      </div>
    </div>
  )
}

export default Message