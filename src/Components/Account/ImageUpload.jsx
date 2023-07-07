import React from 'react'

function ImageUpload() {
  return (
    <div>
        <div className='grid gap-6'>
            <div>
                <h3 className='font-semibold '>Image Upload</h3>
            </div>
            <div>
                <img className='h-36 w-36 rounded-lg' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
            <div className='mt-2'>
                <button className='px-5 rounded-lg py-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white transition-colors duration-300 ease-in-out'>Change Image</button>
            </div>
        </div>
    </div>
  )
}

export default ImageUpload