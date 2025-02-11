import React, { useState } from 'react'
import SEO from '../seo/SEO'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState('')

  return (
    <>
      <SEO
        title="Feedback"
        description="Your feedback is important to us. It helps us to improve our services and provide a better experience for you."
        keywords="Procure, feedback, improvement, experience"
      />
      <div className="flex flex-col items-center justify-center  mt-10 p-4">
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User Profile"
            className="w-30 h-30 rounded-full mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">Ahsan Mahfuz</h3>
          <p className="text-sm text-[#0D9276]">ahsanmahfuz@gmail.com</p>
        </div>

        <div className="flex mt-4 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-5xl ${
                (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            >
              ★
            </button>
          ))}
        </div>

        <form
          className="mt-6 w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <label className="block text-left font-semibold">Feedback</label>
          <textarea
            placeholder="Type here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full h-32 mt-2 p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-[#0D9276] outline-none"
          ></textarea>

          <div className="flex mt-4 space-x-4">
            <button
              type="submit"
              className="bg-[#0D9276] text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Send
            </button>
            <button
              type="button"
              className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setFeedback('')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FeedbackForm
