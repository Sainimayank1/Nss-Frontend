import React from 'react'
import './Navbar.css'

function MainNavbar() {
  return (
    <div className='Main_navbar'>
      <div className='Left_main_navbar'>
            <img src='./picture/logo.png' alt='logo'></img>
      </div> 
       <div className='Right_main_navbar'>
          <img src='./picture/75years.png' alt='logo'></img>
          <img src='./picture/specs.png' alt='logo'></img>
      </div>
    </div>
  )
};

export default MainNavbar