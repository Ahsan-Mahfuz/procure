import React, { useState } from 'react'
import { Button, Form, Input, message, Upload } from 'antd'
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons'
import profileImage from '../../../assets/profile.png'
import BusinessServices from './BusinessServices'
import BusinessInfo from './BusinessInfo'
import BusinessReview from './BusinessReview'
import BusinessLocation from './BusinessLocation'
import BusinessMedia from './BusinessMedia'

const RootBusinessProfile = () => {
  const [activeTab, setActiveTab] = useState('Info')
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
          <div className="mb-3 text-2xl font-bold">Business Profile</div>
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border object-cover"
          />

          <h2 className="mt-3">Jerome Smith</h2>
        </div>

        <div className="flex justify-center mt-6  max-sm:flex-col">
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Info'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Info')}
          >
            Info
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Services'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Services')}
          >
            Services
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Media'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Media')}
          >
            Media
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Location'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Location')}
          >
            Location
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'Review'
                ? 'border-b-2 border-[#0D9276] text-[#0D9276]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Review')}
          >
            Review
          </button>
        </div>

        {activeTab === 'Info' && <BusinessInfo />}
        {activeTab === 'Services' && <BusinessServices />}
        {activeTab === 'Media' && <BusinessMedia />}
        {activeTab === 'Location' && <BusinessLocation />}
        {activeTab === 'Review' && <BusinessReview />}
      </div>
    </div>
  )
}

export default RootBusinessProfile
