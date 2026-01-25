import React, { useEffect, useState } from "react"
import Login from "./components/auth/login"
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard"
import { setLocalStorage } from "./utils/LocalStorage"

const App = () => {

 // useEffect(() => {
 //   setLocalStorage()
 // }, [])

 const [user, setUser] = useState(null)

  return (
    <>
      {!user ? <Login />: ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
