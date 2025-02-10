import React from 'react'
import { Link } from 'react-router-dom'

const BuyCredits = () => {
  const creditPackages = [
    {
      credits: 10,
      pricePerCredit: 25,
      totalPrice: 250,
      discount: 0,
      percentagesLess: '0%',
    },
    {
      credits: 25,
      pricePerCredit: 22,
      totalPrice: 550,
      discount: 250,
      percentagesLess: '12%',
    },
    {
      credits: 20,
      pricePerCredit: 20,
      totalPrice: 1050,
      discount: 250,
      percentagesLess: '20%',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-5 shadow mt-10">
      <div className="bg-orange-100 text-center py-3 rounded-lg shadow-md">
        <p className="font-semibold">Buy Credits</p>
        <p className="text-gray-700">
          Your current balance is{' '}
          <span className="text-[#0D9276]">0 credits</span>
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6">Select Credit Package</h2>
      <p className="text-gray-500 mb-4">
        Top up your credits by selecting a credit pack below.
      </p>

      <div className="space-y-4">
        {creditPackages.map((pkg, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="flex max-sm:flex-col items-center justify-center gap-2">
              <p className="text-lg font-semibold">{pkg.credits} Credits</p>
              {pkg.percentagesLess !== '0%' && (
                <p className="text-gray-500 text-xs">
                  ({pkg.percentagesLess} less)
                </p>
              )}
              <p className="text-[#0D9276]">R{pkg.pricePerCredit}/credit</p>
            </div>
            <div className="text-right max-sm:flex-col flex items-center gap-2 justify-center">
              <p className="text-lg font-semibold">R {pkg.totalPrice}</p>
              {pkg.discount > 0 && (
                <p className="text-red-500 text-sm">Save R {pkg.discount}</p>
              )}
              <Link
                to="/buy-credits/payment"
                state={{ price: pkg.totalPrice }}
                className="bg-[#0D9276] text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredits
