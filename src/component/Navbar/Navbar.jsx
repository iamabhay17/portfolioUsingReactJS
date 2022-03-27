import React,{useState} from 'react'
import './Navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsFillPenFill,BsCode} from 'react-icons/bs'



const Navbar = () => {


  const [isActive,setIsActive] = useState('#home')

  return (
      <nav>
         <a href="#home"
         onClick={()=> setIsActive('#home')} 
         className={isActive === '#home' ? 'active' : ''}>
           <AiFillHome/></a>


         <a href="#about"
         onClick={()=> setIsActive('#about')} 
         className={isActive === '#about' ? 'active' : ''}> 
           <FaUserCircle/></a>


         <a href="#portfolio"
         onClick={()=> setIsActive('#portfolio')} 
         className={isActive === '#portfolio' ? 'active' : ''}>
           <BsCode/></a>


           <a href="#blog"
         onClick={()=> setIsActive('#blog')} 
         className={isActive === '#blog' ? 'active' : ''}>
           <BsFillPenFill/></a>


         <a href="#contact"
         onClick={()=> setIsActive('#contact')} 
         className={isActive === '#contact' ? 'active' : ''}>
           <MdEmail/></a>

      </nav>
  )
}

export default Navbar