import React from 'react'
import './Header.css'
import CTA from './CTA'
import Socials from './Socials'

const Header = () => {
  return (
    <header id='home'>
       <div className="container header_container">

         <h4>Hello, I am </h4>
         <h1>Abhay Bhardwaj</h1>
         <h4 className="text-light">FrontEnd Developer</h4>
         <CTA/>
         <Socials/>  
        
       </div>
    </header>
  )
}

export default Header