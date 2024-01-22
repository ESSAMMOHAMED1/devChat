import React from 'react'
import userImg from "../assets/imgs/user.PNG"
const Chats = () => {
  return (
    <div className='chats'>
         <div className="userChat">
            <img src={userImg} alt="" />
            <div className="userChatInfo">
                <span>essam</span>
                <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default Chats