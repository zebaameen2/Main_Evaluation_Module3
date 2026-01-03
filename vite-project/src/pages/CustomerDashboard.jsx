import React from 'react'
import { useAuth } from '../context/AuthContext'

const CustomerDashboard = () => {

  const { logout } = useAuth();

  return (
    <div>
      <h1>CustomerDashboard</h1>
      <button onClick={logout}>
        Logout
      </button>

    </div>
  )
}

export default CustomerDashboard