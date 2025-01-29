import React from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import rightSideImage from '../../assets/passwordPicture.png'

const ResetPassword = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/set-new-password')
  }

  return (
    <div className="h-screen flex text-white flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 bg-black">
        <h1
          className="text-[50px] font-bold mb-2 whitespace-nowrap"
          style={{ fontSize: 'clamp(20px, 10vw, 50px)' }}
        >
          Reset Password
        </h1>
        <p
          className="text-lg mb-8 whitespace-nowrap"
          style={{ fontSize: 'clamp(8px, 3vw, 20px)' }}
        >
          We sent a code to dummymail@gmail.com
        </p>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-sm"
        >
          <Form.Item
            name="otp"
            rules={[{ required: true, message: 'Please enter the OTP!' }]}
          >
            <div className="">
              <Input.OTP
                length={6}
                className="text-center border-gray-300 rounded-md"
                style={{ maxWidth: '400px', height: '50px', width: '100%' }}
              />
            </div>
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
              Continue
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

export default ResetPassword
