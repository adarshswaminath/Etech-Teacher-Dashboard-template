import React from 'react'
import {AiFillHeart} from "react-icons/ai"

const image = "https://s3.amazonaws.com/one_org_international/international/media/international/2020/01/06203026/Tech-girls-1200X1200.jpeg"

const Design = () => {
  return(
    <div className="h-58 w-full bg-white rounded-lg">
      <div className="flex flex-row gap-2">
        <div><img src={image} className='h-52 w-52' alt="" /></div>
        <div>
            <h3 className='font-semibold'>Learn Python Programming Master Class</h3>
          <div className='mt-2 gap-2 flex'>
            <button className='text-sm bg-gray-200 text-gray-400 rounded-lg p-2'>Data Science</button>
            <button className='text-sm bg-gray-200 text-gray-400 rounded-lg p-2'>Webinar</button>
            <button className='text-sm bg-gray-200 text-gray-400 rounded-lg'>Tommorrow&nbsp;</button>
        </div>
          <p className='mt-2 text-sm text-gray-500'>The passage attribute to an in the 15th century who is thought</p>
          <div className='flex gap-3'>
            <button className='btn text-white bg-[#fb6d3a]'>Join Now</button>
            <button className='btn text-white bg-[#5a46aa]'>Share Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
      <Design/>
      <Design/>
      <Design/>
      <Design/>
      <Design/>
      <Design/>
      <Design/>
      <Design/>
      </div>
    </div>
  )
}

export default Card