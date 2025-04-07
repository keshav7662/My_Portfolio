import React from 'react'
import { useAuth } from '../../context/AuthContext'
const Dashboard = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  }
  return (
    <div className='flex justify-center gap-10  w-full h-full mt-32'>
      <div>Dashboard</div>
      <button onClick={handleLogout} className='border border-black p-3'>Log out</button>
    </div>
  )
}

export default Dashboard