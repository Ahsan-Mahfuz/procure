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
import CustomerRequest from '../pages/customerRequest/CustomerRequest'
import BusinessProfiles from '../pages/businessProfiles/BusinessProfiles'
import BuyCredits from '../pages/buyCredits/BuyCredits'
import Payment from '../pages/buyCredits/Payment'
import TransactionHistory from '../pages/transactionhistory/TransactionHistory'
import RootBusinessProfile from '../pages/businessProfiles/addNewBusiness/RootBusinessProfile'

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
    path: '/customer-request',
    element: (
      <Layout>
        <AdminRoute>
          <CustomerRequest />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/business-profiles',
    element: (
      <Layout>
        <AdminRoute>
          <BusinessProfiles />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/business-profiles/add-new-business',
    element: (
      <Layout>
        <AdminRoute>
          <RootBusinessProfile />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/buy-credits',
    element: (
      <Layout>
        <AdminRoute>
          <BuyCredits />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/buy-credits/payment',
    element: (
      <Layout>
        <AdminRoute>
          <Payment />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/transaction-history',
    element: (
      <Layout>
        <AdminRoute>
          <TransactionHistory />
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
