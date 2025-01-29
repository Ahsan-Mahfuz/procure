import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categoryList = [
    {
      id: 1,
      categoryname: 'Plumbing',
      noOfprovider: '20',
      Image: 'https://picsum.photos/id/1015/200/300',
    },
    {
      id: 2,
      categoryname: 'Cleaning',
      noOfprovider: '15',
      Image: 'https://picsum.photos/id/1016/200/300',
    },
    {
      id: 3,
      categoryname: 'Electrician',
      noOfprovider: '10',
      Image: 'https://picsum.photos/id/1020/300/400',
    },
    {
      id: 4,
      categoryname: 'Painting',
      noOfprovider: '12',
      Image: 'https://picsum.photos/id/1019/400/300',
    },
    {
      id: 5,
      categoryname: 'Carpenter',
      noOfprovider: '20',
      Image: 'https://picsum.photos/id/1015/200/300',
    },
    {
      id: 6,
      categoryname: 'Housekeeper',
      noOfprovider: '15',
      Image: 'https://picsum.photos/id/1016/200/300',
    },
    {
      id: 7,
      categoryname: 'Movers',
      noOfprovider: '10',
      Image: 'https://picsum.photos/id/1020/300/400',
    },
  ]
  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      <div className="flex justify-between items-center m-1.5">
        <div className="font-bold text-[35px] md:text-[50px]">Categories</div>
        <Link to="/category" className=" hover:underline">
          View All
        </Link>
      </div>
      <div className="flex justify-center gap-9 items-center flex-wrap">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="flex bg-gray-100 gap-3 items-center justify-between p-2 rounded-3xl"
          >
            <div>
              <img
                src={category.Image}
                alt={category.categoryname}
                className="rounded-full w-26 h-26"
              />
            </div>
            <div>
              <p className="text-2xl font-bold mb-0.5">
                {category.categoryname}
              </p>
              <p>{category.noOfprovider} open provider</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
