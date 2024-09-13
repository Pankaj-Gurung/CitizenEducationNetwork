import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about container'>
        <div className='about-text'>
       <h1>WE ARE WITH YOU AT EVERY STEP!</h1> 
       <p>Client Education Network is the next leading education consultancy in Nepal. We have been approved by 1233+ representatives from France, USA, UK, Canada, Germany, Australia and Netherlands</p>
       <div>
       <Link to='/aboutus' className='butn'>View More</Link>
       </div>
        </div>
    </div>
  )
}

export default About