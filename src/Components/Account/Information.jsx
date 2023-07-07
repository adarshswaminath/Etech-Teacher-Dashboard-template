import React from 'react'

function Information() {
  return (
    <div className='mt-4'>
        <h3 className='text-2xl font-semibold text-violet-600'>Other Information</h3>
        <hr/>
        <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-3">
        <input
            type="text"
            placeholder="Phone No"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Email"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="PIN Code"
            className="mt-2 appearance-none bg-white border border-gray-300 rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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
        <textarea name="" id="" cols="30" rows="10" placeholder='Add Comment' className='rounded p-2 mt-2 w-full border border-gray-300'></textarea>
    </div>
  )
}

export default Information