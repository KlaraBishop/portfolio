import React from 'react';
import './top-nav.css'
import { ReactComponent as FaLinkedin } from "./icons/linkedin-brands.svg";
import { ReactComponent as FaGithub } from "./icons/github-square-brands.svg";
import { ReactComponent as FaDiscord } from "./icons/discord-brands.svg";
 
function TopNavbar() {
  return (
    <div id='top-navbar'>
        <a href="https://www.linkedin.com/in/klara-bishop-a85168220/"><FaLinkedin className='nav-icon'/></a>
        <a href="https://github.com/KlaraBishop"><FaGithub className='nav-icon' /></a>
        <a href=""><FaDiscord className='nav-icon' /></a>
    </div>
  )
}

export default TopNavbar