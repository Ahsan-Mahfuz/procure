import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/Auth/LoginPage'
import ForgetPassword from '../pages/Auth/ForgetPassword'
import ResetPassword from '../pages/Auth/ResetPassword'
import Home from '../pages/home/Home'
import SignUp from '../pages/Auth/SignUp'
import ChangePassword from '../pages/Auth/ChangePassword'
import AdminRoute from '../pages/ProtectedRoute/AdminRoute'
import Dashboard from '../pages/dashboard/Dashboard'
import JobRequest from '../pages/jobRequest/JobRequest'
import Profile from '../pages/profile/Profile'
import Notification from '../pages/notification/Notification'
import Layout from '../pages/components/Layout'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import PrivacyAndPolicy from '../pages/privacyAndPolicy/PrivacyAndPolicy'
import TermsAndCondition from '../pages/termsAndCondition/TermsAndCondition'
import Feedback from '../pages/feedback/Feedback'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Layout>
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/job-request',
    element: (
      <Layout>
        <AdminRoute>
          <JobRequest />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/profile',
    element: (
      <Layout>
        <AdminRoute>
          <Profile />
        </AdminRoute>
      </Layout>
    ),
  },

  {
    path: '/notification',
    element: (
      <Layout>
        <AdminRoute>
          <Notification />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/about-us',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <Layout>
        <PrivacyAndPolicy />
      </Layout>
    ),
  },
  {
    path: '/terms-and-condition',
    element: (
      <Layout>
        <TermsAndCondition />
      </Layout>
    ),
  },
  {
    path: '/feedback',
    element: (
      <Layout>
        <AdminRoute>
          <Feedback />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/set-new-password',
    element: <ChangePassword />,
  },
])

export default router
