import React from 'react'
import './Header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='socials'>
        <a href="linkedin.com" target='_blank'> <BsLinkedin/> </a>
        <a href="Facebook.com" target='_blank'> <FaFacebookSquare/> </a>
        <a href="Twitter.com" target='_blank'> <FaTwitterSquare/></a>

    </div>
  )
}

export default Socials