import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () =>{
    authService.logout()
    .then(()=>dispatch(logout()))
    .catch((error)=> console.log("error :: logout ::",error.message))
  }
  return (
    <div onClick={handleLogout}>

    <Button className="text-white" >Logout </Button>
    </div>
  )
}

export default LogoutBtn
