import React from 'react'
import userImg from "../assets/imgs/user.PNG"
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">DevChat</span>
        <div className="user">
            <img src={userImg} alt=''/>
            <span>essam</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar