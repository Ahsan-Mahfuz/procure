import React, { useState } from 'react'

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
    <div className="mt-10  flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <header className="flex flex-col md:flex-row justify-between items-center  pb-4 mb-6">
          <h2 className="text-4xl font-semibold">Help & Support</h2>
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

        <h3 className="text-center text-2xl font-medium mb-2">Get in Touch</h3>
        <p className="text-center text-gray-500 mb-6">Contact with us</p>

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
            className="cursor-pointer w-full bg-[#0D9276] text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
