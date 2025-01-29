import React from 'react'
import { Link } from 'react-router-dom'
import firstSvg from '../../assets/1.svg'
import secondSvg from '../../assets/2.svg'
import thirdSvg from '../../assets/3.svg'

const HowItWorks = () => {
  const flow = [
    {
      id: 1,
      image: firstSvg,
      title: 'Talk Us what you need',
      description:
        'Answer a few questions so we can connect you with skilled professionals.',
    },
    {
      id: 2,
      image: secondSvg,
      title: 'Receive Quotes',
      description: 'Receive quotes from multiple pros who meet your needs.',
    },
    {
      id: 1,
      image: thirdSvg,
      title: 'Hire the right professional',
      description: 'Compare quotes, message pros, and hire when you’re ready.',
    },
  ]
  return (
    <div className="bg-black text-white text-center p-10 mt-20">
      <div className="text-center">{'\u003C\u003C'} How IT Works</div>
      <div className="text-5xl font-bold mt-1.5">Convenient Service Access</div>
      <div className="text-center mt-3 max-w-[700px] w-full mx-auto">
        From renovating your home to organizing your dream wedding, we help you
        find top-rated local professionals for every need.
      </div>
      <Link className="bg-[#0D9276] p-3 mt-5 inline-block">Post a request</Link>

      <div className="flex justify-center items-center gap-10 my-10 md:flex-row flex-col">
        {flow.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-5 w-full max-w-[300px]"
          >
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="font-bold text-xl">{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
