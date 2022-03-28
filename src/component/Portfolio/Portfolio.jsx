import React from 'react'
import './Portfolio.css'
import {FaFolder} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'
import {GrCode} from 'react-icons/gr'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Let's look at </h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
           <FaFolder className='icon'/>
           <h3>Game of Quiz</h3>
           <h5>Are you a Game of thrones fan? Let's check you knowlege with this app</h5>
           <a href="https://replit.com/@abhaybhardwaj/Gameofquiz#index.js" className='btn'><AiFillEye/></a>
           <a href="https://github.com/iamabhay17/got/blob/main/index.js" className='btn btn-primary'><GrCode/></a>
        </article>

        <article className='portfolio__item'>
           <FaFolder className='icon'/>
           <h3>Dothraki Translate</h3>
           <h5>Are you a Game of thrones fan ? use this API based project to translate your conversation to dothraki.</h5>
           <a href="https://translatedothraki.netlify.app/" className='btn'><AiFillEye/></a>
           <a href="https://github.com/iamabhay17/translate-app" className='btn btn-primary'><GrCode/></a>
        </article>

        <article className='portfolio__item'>
           <FaFolder className='icon'/>
           <h3>Inside Out</h3>
           <h5>Everyone like to talk in emoji with their friend ,use this simple react app to identify emoji.</h5>
           <a href="https://codesandbox.io/s/emojitranslator-vdfk5" className='btn'><AiFillEye/></a>
           <a href="https://github.com/iamabhay17/emojiDetectorApp/tree/main/src" className='btn btn-primary'><GrCode/></a>
        </article>

        <article className='portfolio__item'>
           <FaFolder className='icon'/>
           <h3>Calculator using JS</h3>
           <h5>this web-app is made using HTML,CSS,and JavaScript. Want to see this app in action? click on the link below.</h5>
           <a href="https://calculatingabacus.netlify.app/" className='btn'><AiFillEye/></a>
           <a href="https://github.com/iamabhay17/calculatorAPP" className='btn btn-primary'><GrCode/></a>
        </article>

        <article className='portfolio__item'>
           <FaFolder className='icon'/>
           <h3>Covid Tracker</h3>
           <h5>this is a covid tracker app made using ReactJS and Bootstrap and an open API.</h5>
           <a href="https://iamabhay17.github.io/covidtracker/" className='btn'><AiFillEye/></a>
           <a href="https://github.com/iamabhay17/covidtracker" className='btn btn-primary'><GrCode/></a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio