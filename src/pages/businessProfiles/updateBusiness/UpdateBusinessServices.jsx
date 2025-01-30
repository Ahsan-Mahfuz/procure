import React, { useState } from 'react'
import { Form, Input, Select, Button, Tag } from 'antd'
import { useLocation } from 'react-router-dom'

const { Option } = Select

const UpdateBusinessServices = () => {
  const location = useLocation()
  const { id } = location.state || {}
  const [form] = Form.useForm()

  const [services, setServices] = useState([])

  const handleSave = (values) => {
    console.log('Form Data:', values)
  }

  const handleServiceInput = (value) => {
    if (value && !services.includes(value)) {
      setServices([...services, value])
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-xl font-bold underline underline-offset-4 mb-5">
        Service Info
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        requiredMark={false}
      >
        <Form.Item
          label="Business Name"
          name="businessName"
          rules={[{ required: true, message: 'Please enter business name' }]}
        >
          <Input placeholder="Type here" className="h-[40px]" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item label="Select Services" name="services">
            <Select
              mode="tags"
              placeholder="Press enter to add services"
              value={services}
              onChange={setServices}
              onInputKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleServiceInput(e.target.value)
                  e.preventDefault()
                }
              }}
              className=" h-[42px]"
            />
          </Form.Item>

          <Form.Item
            name="serviceCategories"
            label={<span>Service Categories</span>}
            rules={[
              {
                required: true,
                message: 'Please select at least one service category!',
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              placeholder="Select service categories"
              className=" h-[42px] px-4"
              options={[
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
          </Form.Item>
        </div>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} placeholder="Type here" />
        </Form.Item>

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

export default UpdateBusinessServices
