import React from 'react'
import './Blog.css'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
const Blog = () => {
  return (
    <section id='blog'>
      <h5>Let's read some of</h5>
      <h2>My Blogs</h2>
      <div className="container blog__container">
         <article>I like to document my journey of learning. Read my Blogs here :</article>
         <a href="https://iamabhay17.hashnode.dev/" className='arrow'><BsFillArrowRightSquareFill/></a>
      </div>
    </section>
  )
}

export default Blog