import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('Credit Card')
  const location = useLocation()
  const { price } = location.state || {}
  return (
    <div className="max-w-3xl mx-auto p-5 shadow">
      <div className="bg-orange-50 text-right py-3 px-4 rounded-lg shadow-md mt-6">
        <p className="font-semibold">Total Transaction</p>
        <p className="text-xl font-bold">{price}</p>
      </div>

      <h2 className="text-xl font-semibold mt-6">Choose Payment Method</h2>
      <form className="mt-2 space-y-2" onClick={(e) => e.preventDefault()}>
        {['Credit Card', 'Paypal', 'Others'].map((method) => (
          <label
            key={method}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="payment"
              value={method}
              checked={selectedPayment === method}
              onChange={() => setSelectedPayment(method)}
              className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
            />
            <span className="text-gray-700">{method}</span>
          </label>
        ))}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#0D9276] hover:bg-green-600 cursor-pointer text-white px-6 py-2 rounded-full mt-4"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default Payment
