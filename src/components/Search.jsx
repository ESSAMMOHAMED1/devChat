import React from 'react'
import userImg from "../assets/imgs/user.PNG"
const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find user'/>        
        </div>
        <div className="userChat">
            <img src={userImg} alt="" />
            <div className="userChatInfo">
                <span>essam</span>
            </div>
        </div>
    </div>
  )
}

export default Search