import React, { useState } from 'react'
import Password from './Password'
import { Button, Form, Input, message, Upload } from 'antd'
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons'
import profileImage from '../../assets/profile.png'
const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [form] = Form.useForm()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'Thuto Makohaone',
    email: 'thutomakohaone@gmail.com',
    phone: '+27 55745 2567 125',
    area: '',
    building: '',
    postalCode: '2191',
    streetAddress: 'Alice Street',
    pdf: null,
    image: null,
  })

  const handleUpdate = () => {
    if (isEditing) {
      form
        .validateFields()
        .then((values) => {
          setFormData({ ...formData, ...values })
          message.success('Profile updated successfully!')
          setIsEditing(false)
        })
        .catch(() => {
          message.error('Please complete the form properly.')
        })
    } else {
      setIsEditing(true)
    }
  }

  const handleFileUpload = async (info) => {
    setLoading(true)

    const uploadedFile = info.file.originFileObj || info.file

    if (!(uploadedFile instanceof File)) {
      message.error('Invalid file type. Please upload a valid PDF.')
      setLoading(false)
      return
    }

    setTimeout(() => {
      setLoading(false)

      try {
        const fileURL = URL.createObjectURL(uploadedFile)

        setFormData({
          ...formData,
          pdf: { name: uploadedFile.name, file: uploadedFile, url: fileURL },
        })

        message.success(`${uploadedFile.name} uploaded successfully`)
      } catch (error) {
        console.error('Error creating object URL:', error)
        message.error('Error displaying uploaded file.')
      }
    }, 2000)
  }
  const handleImageUpload = async (info) => {
    setImageLoading(true)

    const uploadedImage = info.file.originFileObj || info.file

    if (!(uploadedImage instanceof File)) {
      message.error('Invalid file type. Please upload a valid image.')
      setImageLoading(false)
      return
    }

    setTimeout(() => {
      setImageLoading(false)

      try {
        const imageURL = URL.createObjectURL(uploadedImage)

        setFormData({
          ...formData,
          image: imageURL,
        })

        message.success('Profile image updated successfully!')
      } catch (error) {
        console.error('Error creating image URL:', error)
        message.error('Error displaying image.')
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <img
            src={formData.image ? formData.image : profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border object-cover"
          />

          {isEditing && (
            <Upload
              accept="image/*"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageUpload}
              className="mt-2"
            >
              <Button
                icon={
                  imageLoading ? <LoadingOutlined spin /> : <UploadOutlined />
                }
              >
                {imageLoading ? 'Uploading...' : 'Update Image'}
              </Button>
            </Upload>
          )}

          <h2 className="mt-3 text-xl font-semibold">Jerome Smith</h2>
        </div>

        <div className="flex justify-center mt-6  ">
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'password'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('password')}
          >
            Password
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="flex flex-col items-center ">
            <div className="rounded-lg  w-full max-w-3xl">
              <Form form={form} layout="vertical" initialValues={formData}>
                <div className="flex flex-col gap-1">
                  <Form.Item label="Full Name" name="fullName">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Phone Number" name="phone">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Email" name="email">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Area" name="area">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Building" name="building">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Postal Code" name="postalCode">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item
                    label="Street Address"
                    name="streetAddress"
                    className="col-span-2"
                  >
                    <Input disabled={!isEditing} />
                  </Form.Item>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Documents</h3>
                  <div className="flex flex-col rounded-md">
                    <span className="mb-2 font-medium">Identity Document</span>

                    {formData.pdf ? (
                      <div className="flex flex-col">
                        <span className="mb-2 font-medium">
                          📄 {formData.pdf.name}
                        </span>
                        <a
                          href={formData.pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View Document
                        </a>
                        <Button
                          type="default"
                          danger
                          className="mt-2"
                          onClick={() =>
                            setFormData({ ...formData, pdf: null })
                          }
                        >
                          Remove Document
                        </Button>
                      </div>
                    ) : (
                      <Upload
                        accept=".pdf"
                        showUploadList={false}
                        beforeUpload={() => false}
                        onChange={handleFileUpload}
                        disabled={!isEditing || loading}
                        className={
                          !isEditing ? 'opacity-40 ' : 'cursor-pointer'
                        }
                      >
                        <Button
                          icon={
                            loading ? (
                              <LoadingOutlined spin />
                            ) : (
                              <UploadOutlined />
                            )
                          }
                        >
                          {loading ? 'Uploading...' : 'Upload PDF'}
                        </Button>
                      </Upload>
                    )}
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    type="primary"
                    onClick={handleUpdate}
                    disabled={loading}
                  >
                    {isEditing ? 'Save' : 'Update Now'}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}

        {activeTab === 'password' && <Password />}
      </div>
    </div>
  )
}

export default Profile
