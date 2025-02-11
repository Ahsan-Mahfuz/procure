import React, { useState } from 'react'
import { Form, Input, Button, Select, message } from 'antd'
import SEO from '../seo/SEO'

const { Option } = Select

const JobRequest = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (values) => {
    setIsSubmitting(true)
    console.log('Form Values:', values)

    setTimeout(() => {
      setIsSubmitting(false)
      message.success('Request sent successfully!')
      form.resetFields()
    }, 2000)
  }

  const handleCancel = () => {
    form.resetFields()
  }
  const whatServicesNeeded = (
    <Select defaultValue="Plumber">
      <Option value="Plumber">Plumber</Option>
      <Option value="Electrician">Electrician</Option>
      <Option value="Carpenter">Carpenter</Option>
      <Option value="Painter">Painter</Option>
      <Option value="Locksmith">Locksmith</Option>
      <Option value="Glazier">Glazier</Option>
      <Option value="Roofer">Roofer</Option>
      <Option value="HVAC">HVAC</Option>
      <Option value="Pest Control">Pest Control</Option>
      <Option value="Landscaper">Landscaper</Option>
    </Select>
  )
  const whenNeeded = (
    <Select defaultValue="Urgent">
      <Option value="Urgent">Urgent</Option>
      <Option value="Routine">Routine</Option>
      <Option value="Immediate">Immediate</Option>
    </Select>
  )

  return (
    <>
      <SEO
        title="Send Job Request"
        description="Submit your job requests and find reliable service providers with Procure."
        keywords="Procure, job request, service providers, reliable"
      />
      <div className=" flex items-center justify-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Send Job Request
          </h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              whatServicesNeeded: 'What Services Needed',
              whenNeeded: 'Urgent',
              description: '',
              city: '',
              township: '',
              phone: '',
              email: '',
            }}
          >
            <Form.Item label="What Services You Need" name="whatServicesNeeded">
              {whatServicesNeeded}
            </Form.Item>

            <Form.Item label="When Do You Need This Services" name="whenNeeded">
              {whenNeeded}
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input.TextArea placeholder="Type here..." />
            </Form.Item>

            <Form.Item label="Location">
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="city"
                  className="col-span-1"
                  rules={[
                    { required: true, message: 'Please enter your city' },
                  ]}
                >
                  <Input placeholder="Enter City" className="h-[42px]" />
                </Form.Item>
                <Form.Item
                  name="township"
                  className="col-span-1"
                  rules={[
                    { required: true, message: 'Please enter your township' },
                  ]}
                >
                  <Input placeholder="Township" className="h-[42px]" />
                </Form.Item>
              </div>
            </Form.Item>

            <Form.Item label="Contact Info">
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="phone"
                  className="col-span-1"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your phone number',
                    },
                  ]}
                >
                  <Input placeholder="Phone Number" className="h-[42px]" />
                </Form.Item>
                <Form.Item
                  name="email"
                  className="col-span-1"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                  ]}
                >
                  <Input placeholder="Email" className="h-[42px]" />
                </Form.Item>
              </div>
            </Form.Item>

            <div className="flex justify-center gap-5 mt-6">
              <Button onClick={handleCancel} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={isSubmitting}>
                Send Request
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default JobRequest
