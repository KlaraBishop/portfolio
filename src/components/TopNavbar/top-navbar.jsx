import React from 'react'
import { faLinkedin } from "./icons/linkedin-brands.svg"

function TopNavbar() {
  return (
    <div id='top-navbar'>
        <img className='nav-icon' src={require('./icons/linkedin-brands.svg')} alt='linkedin'></img>
        <a href="https://www.linkedin.com/in/klara-bishop-a85168220/"></a>
        <a href=""></a>
    </div>
  )
}

export default TopNavbar
