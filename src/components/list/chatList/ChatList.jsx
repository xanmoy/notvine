import {useState} from 'react'
import './chatList.css'
const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search user' />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add'
        onClick={() => setAddMode((prev)=> !prev)}/>
      </div>
      <div className="item">
        <img src="https://media.licdn.com/dms/image/D5603AQHBm06cu3LW-Q/profile-displayphoto-shrink_200_200/0/1710664552269?e=1719446400&v=beta&t=AJD4gSKnQFkLdiYVntCjb92l0YFENJRF_q0xh0WMbAQ" alt="" className='profile' />
        <div className="texts">
          <span>Tanmoy Ganguly</span>
          <p>Namaste! I am using Notvine.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1" alt="" className='profile' />
        <div className="texts">
          <span>Elon Musk</span>
          <p>Namaste! I am using Notvine.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLm9jiDYgGHwa_f9hoh3FTyZcTot57Vk_akiGcLGyP5g&s" alt="" className='profile' />
        <div className="texts">
          <span>Cha Meeyoung</span>
          <p>Namaste! I am using Notvine.</p>
        </div>
      </div>
      <div className="item usr">
        <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/572089_v9_bd.jpg" alt="" className='profile' />
        <div className="texts">
          <span>Karen Gillan</span>
          <p>Namaste! I am using Notvine.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/640px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg" alt="" className='profile' />
        <div className="texts">
          <span>Linus Torvalds</span>
          <p>Namaste! I am using Notvine.</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
