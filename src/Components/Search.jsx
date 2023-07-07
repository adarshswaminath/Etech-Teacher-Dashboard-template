import React from 'react'
import {BsSearch} from "react-icons/bs"

function Search({bgcolor}) {
  return (
    <div>
        <div className={`flex items-center border border-gray-300 rounded bg-${bgcolor}`}>
          <input
            type="search"
            className="py-2 px-2 md:px-6 lg:px-8 flex-grow bg-transparent focus:outline-none"
            placeholder="Search"
          />
          <button
            type="button"
            className="flex items-center justify-center p-3 text-gray-400 hover:text-gray-600"
          >
            <BsSearch className="h-6 w-6" />
          </button>
        </div>
    </div>
  )
}

export default Search