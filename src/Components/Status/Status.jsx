import React from 'react'
import Graph from '../Dashboard/Graph'
import Search from '../Search'
import { BsGraphUpArrow, BsPieChartFill } from 'react-icons/bs'
import RightPannel from './RightPannel'

function Status() {
  return (
    <div className="p-2 md:p-4 lg:p-6 xl:p-8">
      {/* top heade */}
      <div className="grid lg:flex items-center justify-between mb-3">
        <div className="grid">
          <h3 className="text-2xl font-semibold text-violet-500">My Status👋</h3>
          <h4 className="text-sm text-gray-600">Education Teacher Dashboard</h4>
        </div>
        <Search bgcolor="white"/>
      </div>

      <div className="grid lg:flex gap-4">
            {/* first box */}
      <div className="w-full lg:w-3/4  p-4 bg-white rounded-lg">
        
      </div>
      {/* second box */}
      <div className="w-full lg:w-1/3  p-8 bg-gray-100 rounded-lg mt-4 lg:mt-0">
        <RightPannel/>
      </div>
    
      </div>
    </div>
  )
}

export default Status