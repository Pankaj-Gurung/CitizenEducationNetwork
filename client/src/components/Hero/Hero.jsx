import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>The only Education Consultancy you need!</h1>
        <Link to='/aboutus'>View More</Link>
        </div>
        </div>
  )
}

export default Hero