import React from 'react'
import cam from "../assets/imgs/cam.png"
import more from "../assets/imgs/more.png"
import add from "../assets/imgs/add.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>essam</span>
            <div className="chatIcon">
                <img src={cam} alt="" />
                <img src={add} alt="" />
                <img src={more} alt="" />
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat