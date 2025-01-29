import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0D9276] text-white py-6 mt-16">
      <div className="container mx-auto px-4">
        <hr className="border-white/50 mb-4" />

        <div className="flex flex-col [@media(min-width:1150px)]:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>

          <ul className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-center sm:text-left">
            <li>
              <Link
                to="/about-us"
                className="hover:underline underline-offset-4"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:underline underline-offset-4"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-condition"
                className="hover:underline underline-offset-4"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="hover:underline underline-offset-4"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
