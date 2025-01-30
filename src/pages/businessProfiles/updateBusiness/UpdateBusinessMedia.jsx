import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Image, Upload, Button } from 'antd'
import { useLocation } from 'react-router-dom'

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

const UpdateBusinessMedia = () => {
  const location = useLocation()
  const { id } = location.state || {}
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [logoFileList, setLogoFileList] = useState([])
  const [imageFileList, setImageFileList] = useState([])

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
  }

  const handleLogoChange = ({ fileList }) => setLogoFileList(fileList)
  const handleImageChange = ({ fileList }) => setImageFileList(fileList)

  const handleSave = () => {
    console.log('Saved Logo:', logoFileList)
    console.log('Saved Images:', imageFileList)
  }

  const handleCancel = () => {
    setLogoFileList([])
    setImageFileList([])
  }

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  return (
    <>
      <section>
        <div className="text-xl mt-10 mb-2 font-bold">Upload Logo</div>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={logoFileList}
          onPreview={handlePreview}
          onChange={handleLogoChange}
        >
          {logoFileList.length >= 1 ? null : uploadButton}
        </Upload>
      </section>

      <section>
        <div className="text-xl mt-10 mb-2 font-bold">Upload Photos</div>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={imageFileList}
          onPreview={handlePreview}
          onChange={handleImageChange}
        >
          {imageFileList.length >= 8 ? null : uploadButton}
        </Upload>
      </section>

      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}

      <div className="flex justify-center mt-6 gap-4">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button htmlType="reset">Cancel</Button>
      </div>
    </>
  )
}

export default UpdateBusinessMedia
