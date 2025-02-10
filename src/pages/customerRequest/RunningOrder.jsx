import React from 'react'
import { Link } from 'react-router-dom'

const RunningOrder = ({ usersInfo }) => {
  return (
    <div className="space-y-4 flex flex-col gap-6">
      {usersInfo.map((user) => (
        <div
          className="px-4 py-6 rounded-md bg-gray-100 shadow-sm flex flex-wrap justify-between  gap-5 xl:flex-nowrap"
          key={user.id}
        >
          <div className="flex items-center gap-4 w-full xl:w-auto">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {user.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">Name:</p>
              <h3 className="text-md font-semibold">{user.name}</h3>
              <p className="text-xs text-gray-500">Time: {user.time}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full xl:w-auto">
            <p className="text-sm font-bold">Type:</p>
            <div className="flex items-center gap-2">
              <p className="text-md">Urgency:</p>
              <p className="text-xs bg-black text-white px-3 py-1 rounded-md">
                {user.urgency}
              </p>
            </div>
            <p className="text-xs text-red-500 font-semibold">
              Services Type: {user.serviceType}
            </p>
          </div>
          <div className="flex flex-col gap-1 w-full xl:w-auto">
            <p className="text-sm font-bold">Contact Info:</p>
            <p className="text-xs text-blue-500">---------------------</p>
            <p className="text-xs text-blue-500">---------------------</p>
          </div>
          <div className="flex flex-col gap-1 w-full xl:w-auto">
            <p className="text-md font-bold">Location:</p>
            <p className="text-xs text-gray-700">{user.address}</p>
          </div>
         
        </div>
      ))}
    </div>
  )
}

export default RunningOrder
