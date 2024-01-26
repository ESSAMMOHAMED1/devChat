import { signOut } from 'firebase/auth'
import React from 'react'
import userImg from "../assets/imgs/user.PNG"
import { auth } from '../firebase'
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">DevChat</span>
        <div className="user">
            <img src={userImg} alt=''/>
            <span>essam</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar