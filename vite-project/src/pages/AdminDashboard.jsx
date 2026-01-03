import React from 'react'
import { useAuth } from '../context/AuthContext'

const AdminDashboard = () => {

  const { logout } = useAuth();
  return (
    <div>
      <h1>  AdminDashboard</h1>
      <button onClick={login}> Login</button>


    </div>

  )
}

export default AdminDashboard