import React from 'react'
import user from '../assets/imgs/user.PNG'
const Message = () => {
  return (
    <div className='message'>
        <div className="messageInfo">
            <img src={user} alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src={user} alt="" />
        </div>
    </div>
  )
}

export default Message