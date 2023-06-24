import React from 'react'
import LogoColorHunt from "./LogoColorHunt.png"
import "./NavBar.css"
import ButtonBorder from '../ButtonBorder/ButtonBorder'

const NavBar = () => {
  return (
    <nav>
      <div className='logo'><img src={LogoColorHunt} alt="Logo" />Color Hunt</div>
      <div className='input'>
        <i className="bi bi-search"></i>
        <input type = "text" placeholder='Search paletts'></input>
      </div>
      <div>
          <ButtonBorder><i class="bi bi-browser-chrome"></i>Add to chrome</ButtonBorder>
      </div>
      <div className='dots'>
        <button className='btnDots'><i class="bi bi-three-dots"></i></button>
      </div>
    </nav>
  )
}

export default NavBar