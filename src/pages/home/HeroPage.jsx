import React, { useState } from 'react'
import heroImage from '../../assets/heroPicture.png'
import { FaBriefcase, FaMapMarkerAlt, FaFilter, FaSearch } from 'react-icons/fa'
import { Input, Select } from 'antd'

const HeroPage = () => {
  const [category, setCategory] = useState('Select Category')
  const usersInfo = [
    { id: 1, number: 6789990, type: 'Registered User ' },
    { id: 2, number: 8058465, type: 'Subscriber User ' },
    { id: 3, number: 3645169, type: 'Available jobs ' },
  ]

  return (
    <div className="flex flex-col [@media(min-width:1150px)]:flex-row justify-between items-center px-6 [@media(min-width:1150px)]:px-12 bg-[#E7F4F1] py-10">
      <section className="w-full [@media(min-width:1150px)]:w-1/2 max-w-[600px] text-center [@media(min-width:1150px)]:text-left">
        <div>
          <h1 className="text-4xl md:text-[60px]  font-bold leading-tight">
            Achieve your job <div>in moments.</div>
          </h1>
          <p className="mt-6 md:mt-10 text-lg">
            Find the perfect opportunity with ease. Explore thousands of jobs
            tailored to your skills and preferences. Create your profile,
            connect with top employers, and start your career journey today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center  bg-white p-3 shadow-md space-y-1 md:space-x-3 md:space-y-0 mt-8 md:mt-10 w-[800px] rounded-lg">
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg w-full ">
            <FaBriefcase className="text-[#0D9276]" size={20} />
            <Input
              placeholder="Job Title"
              className="border-0 bg-transparent focus:ring-0 ml-2 w-full"
            />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg w-full ">
            <FaMapMarkerAlt className="text-[#0D9276]" size={20} />
            <Input
              placeholder="Location"
              className="border-0 bg-transparent focus:ring-0 ml-2 w-full"
            />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg w-full ">
            <FaFilter className="text-[#0D9276]" size={20} />
            <Select
              value={category}
              onChange={setCategory}
              className="border-0 bg-transparent focus:ring-0 ml-2 w-full"
              options={[
                { value: 'IT', label: 'IT' },
                { value: 'Finance', label: 'Finance' },
                { value: 'Healthcare', label: 'Healthcare' },
              ]}
              placeholder="Select Category"
            />
          </div>
          <button className="cursor-pointer justify-center bg-[#0D9276] hover:bg-[#0D9850] px-5 py-2 flex items-center rounded-lg text-white w-full md:w-auto">
            Search
            <FaSearch className="ml-2" size={20} />
          </button>
        </div>

        <div className="my-8 text-lg font-semibold">
          Trading Keywords:{' '}
          <span className="text-gray-600">
            plumbing, tutoring, graphic design
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          {usersInfo.map((user) => (
            <div
              key={user.id}
              className="flex flex-col md:flex-row items-center gap-2"
            >
              <div>
                <p className="font-bold text-2xl md:text-3xl">
                  {user.number.toLocaleString()}{' '}
                </p>
                <p className="mt-1.5 text-gray-700">{user.type}</p>
              </div>
              {user.id !== 3 && (
                <div className="hidden md:block text-4xl">|</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="hero-section-picture"
          className="max-w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </section>
    </div>
  )
}

export default HeroPage
