import React, { useState } from 'react'
import SEO from '../seo/SEO'

const Contact = () => {
  const [subject, setSubject] = useState('')
  const [opinion, setOpinion] = useState('')

  const adminInfo = [
    {
      id: 1,
      name: 'Ahsan Mahfuz',
      email: 'ahsanmahfuz@gmail.com',
      phone: '(+1) (888) 750-6986',
    },
    {
      id: 2,
      name: 'Ahsan Mahbub',
      email: 'ahsanmahbub@gmail.com',
      phone: '(+1) (333) 750-6986',
    },
  ]

  return (
    <>
      <SEO
        title="Contact Us"
        description="Find trusted professionals for your home services, handyman services, home cleaning, moving, and more. Get quotes, read reviews, and hire the best pros with Procure."
        keywords="Procure, trusted professionals, home services, handyman services, home cleaning, moving, get quotes, read reviews"
      />
      <div className="mt-10  flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-4  max-w-5xl max-sm:p-1 max-sm:shadow-none w-full">
          <header className="flex flex-col md:flex-row justify-between items-center  pb-4 mb-6">
            <h2 className="text-2xl font-semibold">Help & Support</h2>
            <div className="text-sm  text-center md:text-right ">
              {adminInfo.map((admin) => (
                <React.Fragment key={admin.id}>
                  <p>
                    📧 Email: <span>{admin.email}</span>
                  </p>
                  <p className="mt-1">📞 Phone: {admin.phone}</p>
                </React.Fragment>
              ))}
            </div>
          </header>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log({ subject, opinion })
            }}
            className="space-y-4"
          >
            <div>
              <label className="block  ">Subject</label>
              <input
                type="text"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className=" w-full mt-1 p-3 border border-gray-400 rounded-lg   outline-none"
              />
            </div>

            <div>
              <label className="block  ">Opinions</label>
              <textarea
                placeholder="What Can We Help With?"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
                className="w-full mt-1 p-3 h-32 border border-gray-400 rounded-lg  outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-[#0D9276] text-white py-3 rounded-lg text-lg font-medium hover:bg-green-900 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
