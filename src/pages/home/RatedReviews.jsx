import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialData = [
  {
    id: 1,
    name: 'Dilshad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/101/101',
    rating: 4,
  },
  {
    id: 2,
    name: 'Sabir ali',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/102/102',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dipankar kumar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/104/104',
    rating: 2,
  },
  {
    id: 5,
    name: 'Satya Narayan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/103/103',
    rating: 4,
  },
]

const RatedReviews = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="max-w-[1280px] mx-auto mt-10">
      <div className="text-5xl font-bold">Rated & Reviewed</div>
      <div className="mt-5">
        Amazing service and professional support! The team delivered beyond
        expectations, and we’re thrilled with the results. Highly recommended!
      </div>
      <div className="py-10 mb-10">
        <div className="container">
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative">
                    <div className="mb-4 flex items-center justify-center">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-30 h-30"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-xl font-bold text-black/80  font-cursive text-center">
                          {data.name}
                        </h1>
                        <p className="text-xs ">{data.description}</p>
                        <div className="flex justify-center text-2xl">
                          {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className="text-yellow-500">
                              {index < data.rating ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-red-500/10 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatedReviews
