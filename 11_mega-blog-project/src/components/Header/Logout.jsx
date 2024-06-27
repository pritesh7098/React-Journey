import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config/auth''
import { Logout } from '../../store/slices/auth'
import Logout from './Logout';



function Logout() {

const dispatch = useDispatch() // Get the Redux dispatch function
const logoutHandler = () => { 
authService.logout().then(() => {dispatch(Logout())})
  return (
<button>Logout</button>  )}
}

export default Logout