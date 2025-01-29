import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({ children }) => {
//   if (!localStorage.getItem('token')) return <Navigate to={`/`}></Navigate>
  return children
}

export default AdminRoute
