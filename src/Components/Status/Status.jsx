import React from 'react'
import Graph from '../Dashboard/Graph'
import Search from '../Search'
import { BsGraphUpArrow, BsPieChartFill } from 'react-icons/bs'
import RightPannel from './RightPannel'
import Table from '../Dashboard/Table'

const WeeklyIncome = () => {
  return (
    <div>
      <div className='p-8 bg-white rounded-lg flex justify-between item-center'>
          <div className="grid">
            <h2 className='text-xl font-semibold text-violet-900'>Weekly Income</h2>
            <h2 className='text-2xl font-semibold text-violet-900'>$850</h2>
          </div>
          <div className="radial-progress text-red-500" style={{"--value":70}}></div>
        </div>
    </div>
  )
}


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
      {/*  some boxex */}
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 mb-4">
        <WeeklyIncome/>
        <WeeklyIncome/>
        <WeeklyIncome/>
      </div>
      {/* weekly income close */}
      <div className="grid lg:flex gap-4">
            {/* first box */}
      <div className="w-full lg:w-3/4  p-4 bg-white rounded-lg">
      <div className="title flex justify-between items-center">
          <h3 className="text-violet-600 text-xl font-semibold">Revenue</h3>
          <div className="flex items-center bg-gray-200 rounded-full h-6 w-20 p-2 font-semibold">
            <BsGraphUpArrow className="text-green-500 mr-1" />
            <span className="text-green-500">0.3%</span>
          </div>
        </div>
        <Graph/>
        <Table/>
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