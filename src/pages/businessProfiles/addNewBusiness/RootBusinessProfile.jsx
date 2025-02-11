import React, { useState } from 'react'
import profileImage from '../../../assets/profile.png'
import BusinessServices from './BusinessServices'
import BusinessInfo from './BusinessInfo'
import BusinessReview from './BusinessReview'
import BusinessLocation from './BusinessLocation'
import BusinessMedia from './BusinessMedia'

const RootBusinessProfile = () => {
  const [activeTab, setActiveTab] = useState('Info')

  return (
    <div className=" flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <div className="mb-3 text-2xl font-bold">Business Profile</div>
          <img
            src={profileImage}
            loading="lazy"
            decoding="async"
            alt="Profile"
            className="w-24 h-24 rounded-full border object-cover"
          />

          <h2 className="mt-3">Jerome Smith</h2>
        </div>

        <div className="flex justify-center mt-6  max-sm:flex-col">
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Info'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Info')}
          >
            Info
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Services'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Services')}
          >
            Services
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Media'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Media')}
          >
            Media
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Location'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Location')}
          >
            Location
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Review'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Review')}
          >
            Review
          </button>
        </div>

        {activeTab === 'Info' && <BusinessInfo />}
        {activeTab === 'Services' && <BusinessServices />}
        {activeTab === 'Media' && <BusinessMedia />}
        {activeTab === 'Location' && <BusinessLocation />}
        {activeTab === 'Review' && <BusinessReview />}
      </div>
    </div>
  )
}

export default RootBusinessProfile
