import { useState } from 'react';
import React from 'react'

function Pagination({pageProp, goBack, goAhead}) {

  return <>
    <div className="w-full flex justify-center m-4">
        <button className="p-2 border-4 border-purple-800 text-purple-800 border-r-0 rounded-l-xl text-lg hover:bg-gray-200 ease-out duration-500" 
        onClick={goBack}
        >
            Previous
        </button>

        <button className="p-2 border-4 border-purple-800 text-purple-800 bg-purple-100 text-lg font-bold">
            {pageProp}
        </button>

        <button className="p-2 border-4 border-purple-800 text-purple-800 border-l-0 rounded-r-xl text-lg hover:bg-gray-200 ease-out duration-500" 
        onClick={goAhead}
        >
            Next
        </button>

    </div>
  </>
}

export default Pagination