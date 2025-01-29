import React from 'react'
import { Pagination } from 'antd' // Import Ant Design Pagination component

const Notification = () => {
  const notificationList = [
    {
      key: '1',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '2',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '3',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '4',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '5',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '6',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '7',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '8',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
    {
      key: '9',
      title: 'A new Product is added',
      Descriptions:
        'Product name, Brand name, Price $1070,000 is added in our collection!',
    },
  ]

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['5', '10', '20', '50', '100'],
    position: ['bottomCenter'],
  }

  return (
    <div className="flex gap-1 flex-col p-4">
      {notificationList.map((notification) => (
        <div className="p-4 border-b border-gray-300" key={notification.key}>
          <h3 className="text-lg font-semibold">{notification.title}</h3>
          <p className="text-sm text-gray-500">{notification.Descriptions}</p>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <Pagination {...paginationProps} total={notificationList.length} />
      </div>
    </div>
  )
}

export default Notification
