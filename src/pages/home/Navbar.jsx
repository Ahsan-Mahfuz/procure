import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import Logout from '../logout/Logout'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'underline underline-offset-8 decoration-3'
      : 'no-underline'

  return (
    <div className="bg-[#0D9276] p-6 flex justify-between items-center text-white">
      <section className="flex justify-center items-center gap-2">
        <div className="text-red-500">
          <img src={logo} alt="logo" />
        </div>
        <div>Logo Here</div>
      </section>

      <div
        className="text-2xl show-hamburger cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </div>

      <section className="hidden md:flex justify-between items-center gap-10">
        <Link to="/" className={getLinkClass('/')}>
          Home
        </Link>
        <Link to="/about-us" className={getLinkClass('/about-us')}>
          About Us
        </Link>
        <Link to="/contact-us" className={getLinkClass('/contact-us')}>
          Contact Us
        </Link>
        <Link to="/dashboard" className={getLinkClass('/dashboard')}>
          Dashboard
        </Link>
        <Link to="/job-request" className={getLinkClass('/job-request')}>
          Send Job Request
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span>Ahsan Mafhuz</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-6 -right-2.5 z-10 bg-white rounded shadow-lg p-1 w-48">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to="/documentation"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Documentation
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Logout />
              </Link>
            </div>
          )}
        </div>

        <Link to="/notification" className={getLinkClass('/notification')}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14H17V9a5 5 0 00-10 0v5H5.4a2.032 2.032 0 01-1.995 1.595L3 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </span>
        </Link>
      </section>

      <section className="hidden md:block px-6 py-2 rounded-xl bg-white text-black transition duration-300 hover:bg-green-400">
        <Link to="/login">Sign In</Link>
      </section>
    </div>
  )
}

export default Navbar
