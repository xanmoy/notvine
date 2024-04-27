import React from 'react'
import './userInfo.css'
const UserInfo = () => {
  return (
    <div className='userInfo'>
          <div className="user">
        <img src="https://media.licdn.com/dms/image/D5603AQHBm06cu3LW-Q/profile-displayphoto-shrink_200_200/0/1710664552269?e=1719446400&v=beta&t=AJD4gSKnQFkLdiYVntCjb92l0YFENJRF_q0xh0WMbAQ" alt="" />
              <h2>Tanmoy Ganguly</h2>
          </div>
          <div className="icons">
              <img src="./more.png" alt="" />
              <img src="./video.png" alt="" />
              <img src="./edit.png" alt="" />

          </div>
    </div>
  )
}

export default UserInfo
