import React from 'react'
import { BsBell } from 'react-icons/bs'
import { Template } from '../Account/Performance'
import { Query } from '../Dashboard/Box'


function RightPannel() {
    const img1 = "https://www.clairewoodphotography.co.uk/wp-content/uploads/2019/10/commercial-corporate-group-manchester-leeds-photographer-photographer-Turner-Townsend-1.jpg"
    const img2 = "https://s-i.huffpost.com/gen/1260370/images/o-GIRLS-IN-TECH-facebook.jpg"

  return (
    <div>
        <div className="flex justify-between items-center mb-3">
            <div>
              <button className="flex text-xl py-2 px-6 lg:px-6 rounded text-white bg-[#fb6d3a] hover:bg-[#ec7e3c]">
                New Upload
              </button>
            </div>
            <div className="text-2xl hover:animate-bounce">
              <BsBell />
            </div>
            <div className="flex gap-3 items-center">
              <div className="grid">
                <span className="font-semibold text-gray-600">Satoshi</span>
                <span className="text-gray-500 text-sm">Designer</span>
              </div>
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt=""
                className="w-14 h-14 shadow-lg rounded"
              />
            </div>
          </div>
          <div className="p-3 bg-white h-96 rounded-lg">
        <h3 className="text-2xl font-semibold text-violet-600 ">
          Group Discussion
        </h3>
        {/* content section */}
        <div className="grid gap-6 mt-6">
            {/* first row */}
            <Query title="Machine Learning" color="blue" caption="Bootcamp"/>
            {/* second row */}
            <Query title="R in DataScience" color="green" caption="Data Science"/>
            {/* third row */}
            <Query title="SuperDataScience" color="green" caption="Data Science" />
            {/* Fourth row */}
            <Query title="Analyst Bootcamp" color="green" caption="Data Science"/>

        </div>
      </div>
          {/*  */}
          <div className='p-4'>
        <div className="bg-white p-2 rounded-lg">
            <div className='font-semibold text-xl text-gray-600'>Project Performance</div>
            <Template image={img1} title="Learn Adobe XD Part 01" caption="UI/UX Design"/>
            <Template image={img1} title="Learn Adobe XD Part 02" caption="UI/UX Design"/>
            <Template image={img2} title="Learn Enterpreneurship" caption="Enterpreneurship"/>
            <Template image={img2} title="Financial Analyst Lesson" caption="Bussiness"/>
           
        </div>
    </div>
    </div>
  )
}

export default RightPannel