import React from 'react'
import { Link } from 'react-scroll'
import "./topContent.css";

const topContent = () => {
  return (
    <div className="topContent">
    <div className="topContent_container">
      <h1>Mugesh kanna K</h1>
      <p>A professonal Web developer </p>
      <a href='https://drive.google.com/file/d/18I9db_iywf4ETV48BhAZOEQwC-uCio95/view?usp=drive_link'>
      <button className='topContent_downloadButton'>Download CV</button></a>
      <Link to="projects" smooth={true} duration={100}>
      <button  className='topContent_workButton'>My Work</button>
      </Link>
    </div>
   </div>
  )
}

export default topContent
