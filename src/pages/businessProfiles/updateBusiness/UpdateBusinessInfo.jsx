import React from 'react'
import { Button, Form, Input } from 'antd'
import { useLocation } from 'react-router-dom'

const UpdateBusinessInfo = () => {
  const location = useLocation()
  const { id } = location.state || {}
  const [form] = Form.useForm()
  const handleSave = (values) => {
    console.log(values)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg ">
      <div className="mt-4">
        <div className="text-xl font-bold underline underline-offset-4 mb-5">
          Business Info
        </div>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          requiredMark={false}
        >
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <Form.Item
              label="User Name"
              name="fullName"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input className="h-[40px]" placeholder="Type here" />
            </Form.Item>
            <Form.Item
              label="Business Phone Number"
              name="phone"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input className="h-[40px]" placeholder="Type here" />
            </Form.Item>
            <Form.Item
              label="Year Business Started"
              name="yearStarted"
              rules={[
                { required: true, message: 'Please enter the year started' },
              ]}
            >
              <Input className="h-[40px]" placeholder="Type here" />
            </Form.Item>
            <Form.Item
              label="No Of Employees"
              name="employees"
              rules={[
                { required: true, message: 'Please enter number of employees' },
              ]}
            >
              <Input className="h-[40px]" placeholder="Type here" />
            </Form.Item>
            <Form.Item
              label="VAT Number"
              name="vat"
              rules={[{ required: true, message: 'Please enter VAT number' }]}
            >
              <Input className="h-[40px]" placeholder="Type here" />
            </Form.Item>
            <Form.Item
              label="Registration Or ID Number"
              name="registration"
              rules={[
                {
                  required: true,
                  message: 'Please enter Registration/ID number',
                },
              ]}
            >
              <Input className="h-[40px]" placeholder="Type here" />
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
    </div>
  )
}

export default UpdateBusinessInfo
