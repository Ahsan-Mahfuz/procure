import React from 'react'
import { Form, Input, Button } from 'antd'

const BusinessReview = () => {
  const [form] = Form.useForm()

  const handleSend = (values) => {
    console.log('Review Request Data:', values)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-bold underline underline-offset-4 mb-5">
        Request Reviews
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSend}
        requiredMark={false}
      >
        <Form.Item
          label="Enter Email Address Manually"
          name="emails"
          rules={[{ required: true, message: 'Please enter email addresses' }]}
        >
          <Input.TextArea
            placeholder="Separate each email address with a comma"
            rows={2}
          />
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input placeholder="Enter subject" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea rows={6} placeholder="Type here..." />
        </Form.Item>

        <p className="text-sm text-gray-500">
          Noted: Each person will receive a separate email. This is not a group
          email.
        </p>

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

export default BusinessReview
