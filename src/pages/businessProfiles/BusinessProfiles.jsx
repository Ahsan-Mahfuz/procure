import React from 'react'
import addNewBusiness from '../../assets/addNewBusiness.svg'
import { MdOutlineVerified } from 'react-icons/md'
import { Link } from 'react-router-dom'
const businesses = [
  {
    id: 1,
    name: 'Boi Enterprises',
    location: 'Johannesburg',
    image: 'https://picsum.photos/300',
    rating: '0.0',
    reviews: '0 reviews',
    verified: true,
  },
  {
    id: 2,
    name: 'Boi Enterprises',
    location: 'Johannesburg',
    image: 'https://picsum.photos/400',
    rating: '0.0',
    reviews: '0 reviews',
    verified: false,
  },
  {
    id: 3,
    name: 'Boi Enterprises',
    location: 'Johannesburg',
    image: 'https://picsum.photos/200',
    rating: '0.0',
    reviews: '0 reviews',
    verified: true,
  },
]

const BusinessProfiles = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Business Profile</h2>

      {businesses.map((business) => (
        <div
          key={business.id}
          className="flex max-lg:flex-col items-center rounded-lg   p-4 my-8 "
        >
          <div>
            <img
              src={business.image}
              alt={business.name}
              className="w-30 h-30 rounded-md object-cover"
            />
          </div>
          <div className="ml-4 flex-grow ">
            <h3 className="text-lg font-bold">{business.name}</h3>
            <p className="text-gray-600">{business.location}</p>
            <p className="text-red-500 cursor-pointer">Get Customer Reviews</p>
            <p className="text-red-500 cursor-pointer">
              View your profile as it appears to customers
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-end max-lg:justify-center max-lg:mt-2">
              <span className="text-xl bg-[#0D9276] px-3 py-2 rounded-md">
                {business.rating}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1 flex justify-end max-lg:justify-center max-lg:mt-2">
              {business.reviews}
            </p>
            <div className="flex gap-2 items-center justify-center mt-3">
              {business.verified && (
                <div className="flex  gap-2">
                  <p className="text-green-600 text-2xl">
                    <MdOutlineVerified />
                  </p>
                  <p className="text-green-600">Pro Verified</p>
                </div>
              )}
              <Link
                to="/business-profiles/edit-business-profile"
                className="hover:bg-green-200 bg-green-100 px-4 py-2 rounded-md text-[#0D9276] cursor-pointer"
                state={{ id: business.id }}
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-gray-900 text-white p-6 rounded-lg mt-6 text-center">
        <div className="flex items-center justify-center">
          <img src={addNewBusiness} alt="business-profile" />
        </div>
        <p className="m-2">I want to add another business to my profile</p>
        <Link
          to="/business-profiles/add-new-business"
          className="bg-[#0D9276] px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer"
        >
          Add a new business
        </Link>
      </div>
    </div>
  )
}

export default BusinessProfiles
