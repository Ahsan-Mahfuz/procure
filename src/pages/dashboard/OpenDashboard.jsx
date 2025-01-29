import React from 'react'

const OpenDashboard = ({ usersInfo }) => {
  return (
    <div className="space-y-4 flex flex-col gap-10">
      {usersInfo.map((userInfo) => (
        <div className="p-6  rounded-md bg-gray-200" key={userInfo.id}>
          <section className="flex justify-between items-center max-lg:flex-col">
            <div className="flex gap-2 items-center max-lg:flex-col">
              <div>
                <img
                  src={userInfo.image}
                  alt="image"
                  className="w-20 h-20  rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{userInfo.name}</h3>
                <p className="text-sm text-[#0D9276] mt-2">
                  Time: {userInfo.time}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm  flex  items-center justify-center ">
                Urgency:{'  '}
                <div className="ml-2 bg-black rounded-4xl text-white flex px-5 py-2  items-center justify-center">
                  {userInfo.urgency}
                </div>
              </p>
              <p className="text-sm text-red-500 text-xl">
                Services Type: {userInfo.serviceType}
              </p>
            </div>
          </section>
          <div className="flex items-center mt-5 text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z"
              ></path>
              <circle cx="12" cy="8" r="3" fill="currentColor"></circle>
            </svg>
            <span>{userInfo.address}</span>
          </div>

          <p className="text-gray-700 font-bold mt-5 ">Contact Info:</p>
          <div className="flex justify-between max-lg:flex-col">
            <p>
              Phone Number:{' '}
              <div className="border border-gray-400 rounded-4xl p-3 max-lg:text-xs">
                {userInfo.phone}
              </div>
            </p>
            <p>
              Email:{' '}
              <div className="border border-gray-400 rounded-4xl p-3 max-lg:text-xs">
                {userInfo.email}
              </div>
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-bold mt-5 ">Description:</p>
            <p className="mt-1">{userInfo.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OpenDashboard
