import React from 'react'
import './Experience.css'
import {FiCheckSquare} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>let's know about</h5>
        <h2>My skills</h2>
        
        <div className="container experience__container">
            <h3>Technologies I have worked with</h3>
            <div className="experience__content">
                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>HTML5</h5>
                </article>

                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>CSS3</h5>
                </article>
                
                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>Javascript</h5>
                </article>

                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>ReactJS</h5>
                </article>

                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>Bootstrap</h5>
                </article>

                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>Github</h5>
                </article>

                <article className="experience__details">
                  <FiCheckSquare className='icon'/>
                  <h5>Netlify</h5>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Experience