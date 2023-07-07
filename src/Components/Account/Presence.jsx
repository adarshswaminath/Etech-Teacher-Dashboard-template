import React from 'react'

function Presence() {
  return (
    <div className='mt-4'>
        <h3 className='text-2xl text-violet-600 font-semibold'>Online Presense</h3>
        <hr />
        <div className="gap-3 lg:flex justify-between">
            <input
                type="text"
                placeholder="Personal Website"
                className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
                type="text"
                placeholder="Personal Website"
                className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        {/* second section */}
        <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <input
            type="text"
            placeholder="Address"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="City"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Country"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex justify-end mt-3'>
            <button className='bg-violet-500 text-white px-8 py-3 rounded hover:text-violet-500 hover:bg-white hover:border-violet-500  border'>Save Changes</button>
        </div>
    </div>
  )
}

export default Presence