import React from 'react'
import img from "../assets/imgs/img.png"
import attach from "../assets/imgs/attach.png"
const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='typey somethign ...'/>
        <div className="send">
            <img src={attach} alt="" />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
                <img src={img} alt="" />
            </label>
            <button>Send</button>
        </div>

    </div>
  )
}

export default Input