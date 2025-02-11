import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </HelmetProvider>
  </React.StrictMode>
)
