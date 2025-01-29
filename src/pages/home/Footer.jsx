import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0D9276] text-white py-6 mt-16">
      <div className="container mx-auto px-4 text-center md:text-left">
        <hr className="border-white/50 mb-4" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            {' '}
            Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm mt-2 md:mt-0">
            <li>
              <a href="#" className="hover:underline underline-offset-4">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline underline-offset-4">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
