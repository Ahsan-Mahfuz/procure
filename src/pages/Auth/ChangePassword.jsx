import React from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import rightSideImage from '../../assets/passwordPicture.png'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

const ChangePassword = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/login')
  }

  return (
    <div className="h-screen flex text-white flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 bg-black">
        <h1
          className="text-[50px] font-bold mb-2 whitespace-nowrap"
          style={{ fontSize: 'clamp(20px, 10vw, 50px)' }}
        >
          Set new Password
        </h1>
        <p
          className="text-lg mb-8 whitespace-nowrap"
          style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
        >
          Must be at least 8 character
        </p>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-sm"
        >
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
              Reset Password
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

export default ChangePassword
