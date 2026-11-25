
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData,setUserData] = useContext(AuthContext)

  // Restore logged-in user after refresh
  useEffect(() => {

    if (!userData?.employees || !userData?.admin) return

    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || 'null'
    )

    if (!loggedInUser) return

    if (loggedInUser.role === 'admin') {
      setUser('admin')
    }

    else if (loggedInUser.role === 'employee') {

      const employee = userData.employees.find(
        (e) => e.email === loggedInUser.email
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
      } else {
        localStorage.removeItem('loggedInUser')
      }
    }

  }, [userData])

  // Login function
  const handleLogin = (email, password) => {

    if (!userData?.employees || !userData?.admin) {
      alert('Data is still loading. Please try again.')
      return
    }

    // Admin login
    const admin = userData.admin.find(
      (a) => a.email === email && a.password === password
    )

    if (admin) {

      setUser('admin')
      setLoggedInUserData(null)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )

      return
    }

    // Employee login
    const employee = userData.employees.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {

      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          email: employee.email
        })
      )

    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {/* {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard changeUser={setUser} />}

      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )} */}

      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> :null )}
    </>
  )
}

export default App
  