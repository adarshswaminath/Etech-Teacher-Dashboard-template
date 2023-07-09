import React from "react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";


const Sales = ({color}) => {
    return (
        <div className="flex justify-between">
            <div>
              <img
                className="h-12 w-12 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-gray-500">Adobe XD Part 01</div>
              <span className="text-gray-400">UIUX Design</span>
            </div>
            <div className={`px-4 py-3 rounded-lg text-center bg-${color}-200 text-${color}-500`}>
              $20
            </div>
          </div>
    )
}

export const Query = ({color,title,caption}) => {
    return(
        <div className="flex justify-between">
            <div>
              <img
                className="h-12 w-12 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt=""
              />
            </div>
            <div>
              <div className="text-gray-500">{title} </div>
              <span className="text-gray-400">{caption}</span>
            </div>
            <div className={`px-4 py-3 rounded-lg text-center bg-${color}-200 text-${color}-500`}>
              View
            </div>
            <div className="px-4 py-3 rounded-lg text-center bg-red-200 text-red-500">
              Decline
            </div>
          </div>
    )
}

function Box() {
  return (
    <div className="mt-5  grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {/* first */}
      <div className="p-3 bg-white h-96 rounded-lg text-center">
        <h3 className="text-left text-2xl font-semibold text-violet-600">
          Sales
        </h3>
        <div
          className="radial-progress text-violet-600"
          style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        >
          <div className="text-gray-600">
            3,500
            <br />
            Total Sale
          </div>
        </div>
        <div className="grid gap-3 mt-8">
          <div className="flex font-semibold justify-between">
            <div>Current Week</div>
            <div>2000</div>
            <div className="text-green-500 flex gap-2 items-center">
              <BsGraphUpArrow />
              +0.3
            </div>
          </div>
          <div className="flex font-semibold justify-between">
            <div>Last Week</div>
            <div className="ml-5">1500</div>
            <div className="text-red-500 flex gap-2 items-center">
              <BsGraphDownArrow />
              -0.3
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="p-3 bg-white h-96 rounded-lg">
        <h3 className="text-2xl font-semibold text-violet-600">Weekly Sales</h3>
        <div className="grid gap-8 mt-12">
          {/* text with images in the second box */}
          {/* first flex group */}
          <Sales color="green" />
          {/* second flex group */}
          <Sales color="green"/>
          {/* third flex group */}
          <Sales color="red"/>
        </div>
      </div>
      {/* third box*/}
      <div className="p-3 bg-white h-96 rounded-lg">
        <h3 className="text-2xl font-semibold text-violet-600 ">
          Student Queries
        </h3>
        {/* content section */}
        <div className="grid gap-3 mt-6">
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
    </div>
  );
}

export default Box;
