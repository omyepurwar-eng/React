import React from 'react'

const Header = ({changeUser,data}) => {

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser','')
    changeUser(null)
    setloggedInuserData(null)

  }
  return (
    <div className='flex text-white items-end justify-between '>
      <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl font-bold'>{data?.firstName || 'User'}👋!</span> </h1>
      <button onClick={handleLogout} className='text-2xl-white text-lg  px-5 py-2 rounded-sm bg-red-900  font-semibold'>Log Out</button>
    </div>
  )
}

export default Header
