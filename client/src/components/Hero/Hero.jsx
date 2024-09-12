import React from 'react'
import './Hero.css'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>The only Education Consultancy you need!</h1>
        <Link to='contact' smooth={true} offset={0} duration={500} className='butn'>Contact us</Link>
        </div>
        </div>
  )
}

export default Hero