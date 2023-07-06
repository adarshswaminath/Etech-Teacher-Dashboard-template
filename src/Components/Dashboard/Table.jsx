import React from 'react'

function Table() {
  return (
    <div>
        <div className=" bg-white h-96 mt-3 rounded-lg">
            <div>
                <h3 className='p-2 text-2xl font-semibold text-violet-600'>Course Status</h3>
            </div>
            <div className="flex justify-between bg-gray-100 p-3">
                <div>Name</div>
                <div>Category</div>
                <div>Sale</div>
                <div>Ratting</div>
                <div>Earning</div>
                <div>Visitor</div>
            </div>
            {/* first row */}
            
        </div>
    </div>
  )
}

export default Table