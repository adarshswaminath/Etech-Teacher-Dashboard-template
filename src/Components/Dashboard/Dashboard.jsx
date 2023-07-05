import React from 'react'
import Hero from './Hero'
import Cards from './Cards'

function Dashboard() {
  return (
    <div className="p-2 md:p-4 lg:p-6 xl:p-8">
        <Hero/>
        <Cards/>
    </div>
  )
}

export default Dashboard