import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import rightSideImage from '../../assets/loginpagePicture.png'

const LoginPage = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/')
  }

  return (
    <div className="h-screen flex text-white flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 bg-black">
        <h1
          className="text-[50px] font-bold mb-2 whitespace-nowrap"
          style={{ fontSize: 'clamp(20px, 10vw, 50px)' }}
        >
          Welcome back!
        </h1>
        <p
          className="text-lg mb-8 whitespace-nowrap"
          style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
        >
          Please enter your account details.
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

          <div className="text-end -mt-4">
            <Link
              to={`/forget-password`}
              className="underline text-sm"
              style={{
                color: 'white',
                textDecoration: 'underline',
              }}
            >
              Forget password
            </Link>
          </div>
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
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="text-gray-200 mt-11 text-xs">
          Don't have an account?{' '}
          <Link
            to={`/signup`}
            className="text-gray-200 underline"
            style={{ textDecoration: 'underline' }}
          >
            Sign up
          </Link>
        </div>
      </div>

      <div className="w-1/2 hidden lg:block">
        <img
          src={rightSideImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default LoginPage
