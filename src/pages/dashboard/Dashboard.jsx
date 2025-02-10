import React, { useState } from 'react'
import OpenDashboard from './OpenDashboard'
import ConnectedDashboard from './ConnectedDashboard'
import ClosedDashboard from './ClosedDashboard'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('open')

  const usersInfo = [
    {
      id: 1,
      name: 'Jerome Smith',
      time: '15 May 2020 8:00 AM',
      serviceType: 'Plumber',
      urgency: 'Flexible',
      address: 'Schulhaus Hohenbühl, Hohenbühlstrasse 15, 8032, Zürich, CHE',
      phone: '+27 15787 48545 748',
      email: 'typehere@gmail.com',
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: 'https://picsum.photos/id/1015/200/300',
    },
    {
      id: 2,
      name: 'Jessica Brown',
      time: '16 May 2020 10:00 PM',
      serviceType: 'Electrician',
      urgency: 'Flexible',
      address: 'Schulhaus Hohenbühl, Hohenbühlstrasse 15, 8032, Zürich, CHE',
      phone: '+27 15787 48545 748',
      email: 'typehere@gmail.com',
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: 'https://picsum.photos/id/1015/200/300',
    },
  ]

  return (
    <div className="  px-2">
      <div className="bg-white shadow-sm rounded-lg p-8 max-sm:px-1 w-full max-w-7xl    mx-auto">
        <div className="text-4xl font-semibold mb-6">Dashboard</div>
        <div className="flex items-center justify-center   mb-6 responsive-dashboard">
          <button
            onClick={() => setActiveTab('open')}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'open'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276] font-bold'
                : 'black'
            }`}
          >
            Open
          </button>
          <button
            onClick={() => setActiveTab('connected')}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'connected'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276] font-bold'
                : 'black'
            }`}
          >
            Connected Order
          </button>
          <button
            onClick={() => setActiveTab('closed')}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'closed'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276] font-bold '
                : 'black'
            }`}
          >
            Closed
          </button>
        </div>

        {activeTab === 'open' && <OpenDashboard usersInfo={usersInfo} />}

        {activeTab === 'connected' && (
          <ConnectedDashboard usersInfo={usersInfo} />
        )}

        {activeTab === 'closed' && <ClosedDashboard usersInfo={usersInfo} />}
      </div>
    </div>
  )
}

export default Dashboard
