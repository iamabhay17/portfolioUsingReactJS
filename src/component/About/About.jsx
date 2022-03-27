import React from 'react'
import './About.css'
import Aboutme from '../../assets/about.png'
import {FaReact} from 'react-icons/fa'
import {RiComputerLine,RiCodeSSlashLine} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
         <h5>Get to know</h5>
         <h2>About me</h2>

         <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                  <img src={Aboutme} alt="." />
              </div>
            </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>

                  <FaReact className='about__icon'/>
                  <h5>Build Web-App</h5>
                  <small>using ReactJS</small>

                </article>

                <article className='about__card'>

                  <RiComputerLine className='about__icon'/>
                  <h5>Engineer</h5>
                  <small>Computer Science</small>

                </article>

                <article className='about__card'>

                  <RiCodeSSlashLine className='about__icon'/>
                  <h5>Coder</h5>
                  <small>Works with C++</small>

                </article>
              </div>

              <p>
                I am an Engineering Student from Uttrakhand. Persuing "Computer Science and Engineering" from "Institute of Technology,Gopeshwar". I develop websites using ReactJS.
              </p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>

         </div>
    </section>
  )
}

export default About