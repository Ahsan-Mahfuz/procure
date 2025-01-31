import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import Logout from '../logout/Logout'
import creditImage from '../../assets/credit-icon.svg'
import { Menu, X } from 'lucide-react'
import { FaRegUser } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [userType, setUserType] = useState('login-Vendor') // Normal, login-Normal, login-Vendor
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'underline underline-offset-8 decoration-3'
      : 'no-underline'

  const [hover, setHover] = useState(false)
  return (
    <div className="bg-[#0D9276] p-6 flex justify-between items-center text-white">
      <Link to="/">
        <section className="flex justify-center items-center gap-2">
          <div className="text-red-500">
            <img src={logo} alt="logo" />
          </div>
          <div>Logo Here</div>
        </section>
      </Link>

      <section>
        {/* Normal User Navbar */}
        <div>
          {userType === 'Normal' && (
            <>
              <div className="flex max-md:hidden justify-between items-center gap-10">
                <Link to="/" className={getLinkClass('/')}>
                  Home
                </Link>
                <Link to="/about-us" className={getLinkClass('/about-us')}>
                  About Us
                </Link>
                <Link to="/contact-us" className={getLinkClass('/contact-us')}>
                  Contact Us
                </Link>
                <div
                  className="relative inline-block"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div
                    className={`relative w-32 h-12 bg-white text-black flex justify-center items-center rounded-md shadow-lg transition-all duration-700 ${
                      hover ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Sign In
                  </div>

                  <div
                    className={`absolute top-0 left-0 w-32 h-12 flex items-center overflow-hidden transition-all duration-300 ${
                      hover ? 'opacity-100 scale-100 ' : 'opacity-0 scale-90'
                    }`}
                  >
                    <Link
                      to="/login"
                      className="flex-1  bg-green-700 hover:bg-green-900 text-white text-center py-3  rounded-l-md  duration-300"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="flex-1  bg-black text-white hover:bg-white hover:text-black text-center py-3  rounded-r-md  duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative max-md:block hidden cursor-pointer">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                  <div
                    className="z-10 cursor-pointer absolute top-12 right-0 w-36  bg-[#dbefea] text-black shadow-lg rounded-lg p-4"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/"
                          className={`${getLinkClass(
                            '/'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about-us"
                          className={`${getLinkClass(
                            '/about-us'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contact-us"
                          className={`${getLinkClass(
                            '/contact-us'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          Contact Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/login"
                          className={`${getLinkClass(
                            '/login'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          Sign In
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Login Normal User Navbar */}
        <div>
          {userType === 'login-Normal' && (
            <>
              <div className="flex max-md:hidden justify-between items-center gap-10">
                <Link to="/dashboard" className={getLinkClass('/dashboard')}>
                  Dashboard
                </Link>
                <Link
                  to="/job-request"
                  className={getLinkClass('/job-request')}
                >
                  Send Job Request
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <FaRegUser />
                    <span>Ahsan Mafhuz</span>
                    <IoIosArrowDown />
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
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Logout />
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/notification"
                  className={getLinkClass('/notification')}
                >
                  <IoNotificationsOutline className="text-3xl text-black hover:bg-gray-200 cursor-pointer bg-white p-1 rounded-full" />
                </Link>
              </div>

              <div className="relative max-md:block hidden cursor-pointer">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                  <div
                    className="z-10 cursor-pointer  absolute top-12 right-0 w-56 text-black  bg-[#dbefea] shadow-lg rounded-lg p-4"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/dashboard"
                          className={`${getLinkClass(
                            '/dashboard'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/job-request"
                          className={`${getLinkClass(
                            '/job-request'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Send Job Request
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className={`${getLinkClass(
                            '/profile'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Profile
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/notification"
                          className={`${getLinkClass(
                            '/notification'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Notifications
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/login"
                          className={`${getLinkClass(
                            '/login'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Login Vendor User Navbar */}
        <div>
          {userType === 'login-Vendor' && (
            <>
              <div className="flex max-lg:hidden justify-between items-center gap-10">
                <Link
                  to="/customer-request"
                  className={getLinkClass('/customer-request')}
                  state={{ customerState: 'New Request' }}
                >
                  Customer Request
                </Link>
                <Link
                  to="/business-profiles"
                  className={getLinkClass('/business-profiles')}
                >
                  Business Profiles
                </Link>
                <Link
                  to="/buy-credits"
                  className={getLinkClass('/buy-credits')}
                >
                  Buy Credits
                </Link>

                <div className="flex items-center justify-center -gap-2">
                  <img src={creditImage} alt="credit image" />
                  50
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <FaRegUser />
                    <span>Ahsan Mafhuz</span>
                    <IoIosArrowDown />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-6 -right-2.5 z-10 bg-white rounded shadow-lg p-1 w-48">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Account Settings
                      </Link>

                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>

                      <Link
                        to="/customer-request"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        state={{ customerState: 'Running Order' }}
                      >
                        Running Order
                      </Link>

                      <Link
                        to="/customer-request"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        state={{ customerState: 'History' }}
                      >
                        Order History
                      </Link>

                      <Link
                        to="/transaction-history"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Transaction History
                      </Link>

                      <Link
                        to="/contact-us"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Help & Support
                      </Link>

                      <Link
                        to="/notification"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Notifications
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

                <Link
                  to="/notification"
                  className={getLinkClass('/notification')}
                >
                  <IoNotificationsOutline className="text-3xl text-black hover:bg-gray-200 cursor-pointer bg-white p-1 rounded-full" />
                </Link>
              </div>

              <div className="relative max-lg:block hidden cursor-pointer">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                  <div
                    className="z-10 cursor-pointer  absolute top-12 right-0 w-56 text-black  bg-[#dbefea] shadow-lg rounded-lg p-4"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/dashboard"
                          className={`${getLinkClass(
                            '/dashboard'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/customer-request"
                          className={`${getLinkClass(
                            '/customer-request'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                          state={{ customerState: 'New Request' }}
                        >
                          Customer Request
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/buy-credits"
                          className={`${getLinkClass(
                            '/buy-credits'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Buy Credits
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/business-profiles"
                          className={`${getLinkClass(
                            '/business-profiles'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Business Profiles
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/transaction-history"
                          className={`${getLinkClass(
                            '/transaction-history'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Transaction History
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contact-us"
                          className={`${getLinkClass(
                            '/contact-us'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Help & Support
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/profile"
                          className={`${getLinkClass(
                            '/profile'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Account Settings
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/notification"
                          className={`${getLinkClass(
                            '/notification'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Notifications
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/login"
                          className={`${getLinkClass(
                            '/login'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Navbar
