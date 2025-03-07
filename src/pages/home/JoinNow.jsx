import React from 'react'
import { Link } from 'react-router-dom'

const JoinNow = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl ">
        Do you have a business and want new customers?
      </h1>
      <p className="text-center text-xl text-gray-600 mt-5  ">
        Add your business and to our network and join as a pro
      </p>
      <div className="flex items-center justify-center mt-5">
        <Link to="/signup" className="px-4 py-2 bg-[#0D9276] text-white ">
          Join Now
        </Link>
      </div>
    </div>
  )
}

export default JoinNow
