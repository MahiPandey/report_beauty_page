import React from 'react'

export default function Card({heading,text}) {
    return (

        <div className="block max-w-sm p-6 bg-[#f6e7d6] border border-gray-200 rounded-lg shadow-sm hover:bg-[#f5d8be]   ">

            <h5 className="mb-2 text-7xl  tracking-tight text-gray-900 text-center ">{heading}</h5>
            <p className="font-normal text-lg text-gray-700 text-center">{text}</p>
        </div>

    )
}
