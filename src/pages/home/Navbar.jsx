import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

      <section
        className={`flex justify-between items-center gap-10 menubar-responsive `}
      >
        <>
          <Link to="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link to="/about-us" className={getLinkClass('/about-us')}>
            About Us
          </Link>
          <Link to="/contact-us" className={getLinkClass('/contact-us')}>
            Contact Us
          </Link>

          {/* If logged in */}
          <Link to="/dashboard" className={getLinkClass('/dashboard')}>
            Dashboard
          </Link>
          <Link to="/job-request" className={getLinkClass('/job-request')}>
            Send Job Request
          </Link>
          <Link to="/profile" className={getLinkClass('/profile')}>
            Thuto Makhoane
          </Link>
        </>
      </section>

      <section className="menubar-responsive px-6 py-2 rounded-xl bg-white text-black transition duration-300 hover:bg-green-400">
        <Link to="/login">Sign In</Link>
      </section>
    </div>
  )
}

export default Navbar
