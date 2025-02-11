import React, { useState } from 'react'
import History from './History'
import RunningOrder from './RunningOrder'
import NewRequest from './NewRequest'
import { Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useLocation } from 'react-router-dom'
import SEO from '../seo/SEO'

const CustomerRequest = () => {
  const location = useLocation()

  const { customerState } = location.state || 'New Request'
  const [activeTab, setActiveTab] = useState(customerState) // 'New Request', 'History', 'Running Order'

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
      reviews: '4.0',
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
      reviews: '5.0',
    },
  ]

  return (
    <>
      <SEO
        title="Customer Request"
        description="View all your customer requests on Procure."
        keywords="Procure, customer request, procurement, suppliers"
      />
      <div className="  px-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-center   mb-6 responsive-dashboard">
            <button
              onClick={() => setActiveTab('New Request')}
              className={`px-4 py-2 cursor-pointer ${
                activeTab === 'New Request'
                  ? 'border-b-2 border-[#0D9276] text-[#0D9276] font-bold'
                  : 'black'
              }`}
            >
              New Request
            </button>
            <button
              onClick={() => setActiveTab('Running Order')}
              className={`px-4 py-2 cursor-pointer ${
                activeTab === 'Running Order'
                  ? 'border-b-2 border-[#0D9276] text-[#0D9276] font-bold'
                  : 'black'
              }`}
            >
              Running Order
            </button>
            <button
              onClick={() => setActiveTab('History')}
              className={`px-4 py-2 cursor-pointer ${
                activeTab === 'History'
                  ? 'border-b-2 border-[#0D9276] text-[#0D9276] font-bold '
                  : 'black'
              }`}
            >
              History
            </button>
          </div>
          <FormItem
            name="serviceCategories"
            rules={[
              {
                required: true,
                message: 'Please select at least one service category!',
              },
            ]}
          >
            <Select
              mode="single"
              allowClear
              placeholder="Select service categories"
              className=" h-[32px] px-4 "
              defaultValue="all"
              options={[
                { label: 'All', value: 'all' },
                { label: 'Plumbing', value: 'plumbing' },
                { label: 'Electrical', value: 'electrical' },
                { label: 'HVAC', value: 'hvac' },
                { label: 'Carpentry', value: 'carpentry' },
                { label: 'Painting', value: 'painting' },
                { label: 'Flooring', value: 'flooring' },
                { label: 'Roofing', value: 'roofing' },
                { label: 'Landscaping', value: 'landscaping' },
                { label: 'Cleaning', value: 'cleaning' },
                { label: 'Other', value: 'other' },
              ]}
            />
          </FormItem>

          {activeTab === 'New Request' && <NewRequest usersInfo={usersInfo} />}

          {activeTab === 'Running Order' && (
            <RunningOrder usersInfo={usersInfo} />
          )}

          {activeTab === 'History' && <History usersInfo={usersInfo} />}
        </div>
      </div>
    </>
  )
}

export default CustomerRequest
