import React, { useState } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import rightSideImage from '../../assets/loginpagePicture.png'

const SignUp = () => {
  const navigate = useNavigate()

  const [accountType, setAccountType] = useState('regular')

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/login')
  }

  return (
    <div className="fixed inset-0 h-screen flex text-white flex-col lg:flex-row">
      <div className="w-1/2 hidden lg:block">
        <img
          src={rightSideImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 bg-black">
        <h1
          className="font-bold mb-2 whitespace-nowrap"
          style={{ fontSize: 'clamp(20px, 10vw, 50px)' }}
        >
          Create an account
        </h1>
        <p
          className="text-lg mb-8 whitespace-nowrap"
          style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
        >
          Please Enter your account details.
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-center mb-4">
          <div className="flex items-center justify-center mb-4 lg:mb-0">
            <input
              type="radio"
              value="professional"
              name="accountType"
              className="mr-2"
              checked={accountType === 'professional'}
              onChange={handleAccountTypeChange}
            />

            <span
              className="text-white mr-4 whitespace-nowrap"
              style={{ fontSize: 'clamp(12px, 5vw, 16px)' }}
            >
              Sign up as a professional user
            </span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="regular"
              name="accountType"
              className="mr-2"
              checked={accountType === 'regular'}
              onChange={handleAccountTypeChange}
            />

            <span
              className="text-white whitespace-nowrap"
              style={{ fontSize: 'clamp(12px, 5vw, 16px)' }}
            >
              Sign up as a Regular user
            </span>
          </div>
        </div>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-sm overflow-y-scroll  scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <Form.Item
            name="username"
            label={<span className="text-white ">User Name</span>}
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
            placeholder="Enter username"
          >
            <Input
              placeholder="Enter username"
              className="h-[42px] px-4 bg-black border-gray-300 rounded-md"
              style={{
                backgroundColor: 'black',
                color: 'white',
              }}
            />
          </Form.Item>

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

          <Form.Item
            name="password"
            label={<span className="text-white">Password</span>}
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              placeholder="Enter password"
              className="custom-password-input h-[42px] px-4 border-gray-300 rounded-md"
              style={{
                backgroundColor: 'black',
                color: 'white',
                caretColor: 'white',
              }}
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined style={{ color: 'white' }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: 'white' }} />
                )
              }
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label={<span className="text-white">Confirm Password</span>}
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please enter your confirm password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  )
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Enter confirm password"
              className="custom-password-input h-[42px] px-4 border-gray-300 rounded-md"
              style={{
                backgroundColor: 'black',
                color: 'white',
                caretColor: 'white',
              }}
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined style={{ color: 'white' }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: 'white' }} />
                )
              }
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={<span className="text-white">Phone Number</span>}
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              {
                pattern: /^[0-9]+$/,
                message: 'Please enter a valid phone number!',
              },
            ]}
          >
            <Input
              placeholder="Enter Phone Number"
              className="h-[42px] px-4 bg-black border-gray-300 rounded-md"
              style={{
                backgroundColor: 'black',
                color: 'white',
              }}
            />
          </Form.Item>

          {accountType === 'professional' && (
            <>
              <Form.Item
                name="serviceCategories"
                label={
                  <span className="text-white bg-black">
                    Service Categories
                  </span>
                }
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
                  className="custom-select h-[42px] px-4"
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

              <Form.Item
                name="experience"
                label={
                  <span className="text-white">Experience/Qualifications</span>
                }
                rules={[
                  {
                    required: true,
                    message:
                      'Please provide your experience or qualifications!',
                  },
                ]}
              >
                <Input
                  placeholder="Enter your experience/qualifications"
                  className="h-[42px] px-4 bg-black border-gray-300 rounded-md"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                />
              </Form.Item>
            </>
          )}

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
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-gray-200 mt-11 text-xs">
          Have an account?{' '}
          <Link
            to={`/login`}
            className="text-gray-200 underline"
            style={{ textDecoration: 'underline' }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
