import React, { useState } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { useLocation } from 'react-router-dom'

const { Option } = Select

const UpdateBusinessLocation = () => {
  const location = useLocation()
  const { id } = location.state || {}
  const [form] = Form.useForm()
  const handleSave = (values) => {
    console.log('Form Data:', values)
  }

  return (
    <div className="max-w-4xl mx-auto p-6  rounded-lg ">
      <h2 className="text-xl font-bold underline underline-offset-4 mb-5">
        Location
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        requiredMark={false}
      >
        <p className="text-xs text-gray-500 mb-4 ">
          Type in the first three letters of the area your business is located
          and select the correct area from the list that appears.
        </p>
        <Form.Item label="Area" name="area">
          <Input className="h-[40px]" placeholder="Type here" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Form.Item label="Building" name="building">
            <Input className="h-[40px]" placeholder="Type here" />
          </Form.Item>
          <Form.Item label="Street Address" name="streetAddress">
            <Input className="h-[40px]" placeholder="Type here" />
          </Form.Item>
          <Form.Item label="Postal Code" name="postalCode">
            <Input className="h-[40px]" placeholder="Type here" />
          </Form.Item>
        </div>

        <p className="text-xs text-gray-500 mt-7">
          Set the radius from your city which covers your service area, we’ll
          only send you customer requests within this coverage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Form.Item
            name="radius"
            label={<span>Service Radius</span>}
            rules={[
              {
                required: true,
                message: 'Please specify a service radius!',
              },
            ]}
          >
            <Select
              allowClear
              placeholder="Select service radius"
              options={[
                { label: '10 Km', value: '10 Km' },
                { label: '20 Km', value: '20 Km' },
                { label: '30 Km', value: '30 Km' },
                { label: '40 Km', value: '40 Km' },
                { label: '50 Km', value: '50 Km' },
                { label: '60 Km', value: '60 Km' },
                { label: '70 Km', value: '70 Km' },
                { label: '80 Km', value: '80 Km' },
                { label: '90 Km', value: '90 Km' },
                { label: '100 Km', value: '100 Km' },
              ]}
            />
          </Form.Item>
          <Form.Item label="City" name="city">
            <Input placeholder="Type here" />
          </Form.Item>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button htmlType="reset">Cancel</Button>
        </div>
      </Form>
    </div>
  )
}

export default UpdateBusinessLocation
