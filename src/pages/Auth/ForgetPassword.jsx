import React from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import rightSideImage from '../../assets/passwordPicture.png'

const ForgetPassword = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/reset-password')
  }

  return (
    <div className="h-screen flex text-white flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 bg-black">
        <h1
          className="text-[50px] font-bold mb-2 whitespace-nowrap"
          style={{ fontSize: 'clamp(20px, 10vw, 50px)' }}
        >
          Forgot Password?
        </h1>
        <p
          className="text-lg mb-8 whitespace-nowrap"
          style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
        >
          No worries, we’ll send reset instructions
        </p>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-sm"
        >
          <Form.Item
            name="email"
            label={<span className="text-white ">Email</span>}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input
              placeholder="Enter Email"
              className="h-[42px] px-4 bg-black border-gray-300 rounded-md"
              style={{
                backgroundColor: 'black',
                color: 'white',
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#0D9276',
                color: 'white',
                padding: '1.25rem',
              }}
              className="w-full rounded-full h-11 mt-10"
            >
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="w-1/2 hidden lg:block">
        <img
          src={rightSideImage}
          alt="password-reset"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default ForgetPassword
