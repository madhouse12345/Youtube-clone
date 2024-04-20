import React from 'react'
import "./navbar.css"
import menu_icon from '../../assets/menu.png' 
import search_icon from '../../assets/search.png'
import icon from '../../assets/logo.png'
import upload from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import profile  from '../../assets/user_profile.jpg'
import { Link } from 'react-router-dom'
export const Navbar = ({setSidebar}) => {
  return (
   <nav className= 'flex-div'> 
   <div className='nav-left  flex-div'>
    <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt='menu-bar' />
    <Link to ='/'><img  className='logo' src={icon} alt='youtube_icon'/></Link>
    
   </div>
   <div className='nav-center flex-div'>
      <div className='search-box flex-div' >
          <input type='text' placeholder='Search'/>
          <img src={search_icon} alt='search-bar'/>
      </div>
   </div>
   <div className='nav-right flex-div'>
    <img src={upload} alt=''/>
    <img src={notification} alt=''/>
    <img className='profile-icon' src={profile} alt=''/>
   </div>
   </nav>
  )
}
export default Navbar;