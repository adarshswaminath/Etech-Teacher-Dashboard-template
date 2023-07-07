import React from 'react'
import {BsGraphUpArrow} from "react-icons/bs"

const img1 = "https://www.clairewoodphotography.co.uk/wp-content/uploads/2019/10/commercial-corporate-group-manchester-leeds-photographer-photographer-Turner-Townsend-1.jpg"
const img2 = "https://s-i.huffpost.com/gen/1260370/images/o-GIRLS-IN-TECH-facebook.jpg"

const Template = ({image,title,caption}) => {
    return(
        <div className='mt-3 p-1'>
            <div className="flex justify-between">
                <div>
                    <img className='h-20 w-20 rounded-lg' src={image} alt="" />
                </div>
                <div>
                    <h3 className='text-gray-600 font-semibold'>{title}</h3>
                    <h3 className='text-gray-500'>{caption}</h3>
                </div>
                <div className='text-3xl text-violet-600'>
                    <BsGraphUpArrow/>
                </div>
            </div>
        </div>
    )
}


function Performance() {
  return (
    <div className='p-4'>
        <div className="bg-white p-2 rounded-lg">
            <div className='font-semibold text-xl text-gray-600'>Project Performance</div>
            <Template image={img1} title="Learn Adobe XD Part 01" caption="UI/UX Design"/>
            <Template image={img1} title="Learn Adobe XD Part 02" caption="UI/UX Design"/>
            <Template image={img2} title="Learn Enterpreneurship" caption="Enterpreneurship"/>
            <Template image={img2} title="Financial Analyst Course" caption="Bussiness"/>
           
        </div>
    </div>
  )
}

export default Performance