import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIconOutlineIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsIconOutlineIcon from '@mui/icons-material/NotificationsOutlined';
import FullscreenExitIconOutlineIcon from '@mui/icons-material/FullscreenExitOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrap">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeIconOutlineIcon/>
          </div>
          <div className="item">
            <NotificationsIconOutlineIcon/>
            <div className="counter"> 1 </div>
          </div>
          <div className="item">
            <FullscreenExitIconOutlineIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar