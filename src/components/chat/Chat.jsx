import React from 'react'
import './chat.css'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/572089_v9_bd.jpg" alt="" />
          <div className="texts">
            <span>Karen Gillan</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Send a message...' />
        <div className="emoji">
          <img src="./emoji.png" alt="" />
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
