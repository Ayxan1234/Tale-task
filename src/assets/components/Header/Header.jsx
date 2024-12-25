import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='headersec-box'>
      <div className="container">
        <img src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/logo.png" alt="" />
        <nav className='header-nav'>
          <div className='bars-btn'>
          </div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>



    </div>
  )
}

export default Header