import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Abhay Bhardwaj_</a>

      <ul className="permalinks">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      
    <div className="footer__socials">
        <a href="linkedin.com" target='_blank'> <BsLinkedin/> </a>
        <a href="Facebook.com" target='_blank'> <FaFacebookSquare/> </a>
        <a href="Twitter.com" target='_blank'> <FaTwitterSquare/></a>
    </div>
    </footer>

  )
}

export default Footer