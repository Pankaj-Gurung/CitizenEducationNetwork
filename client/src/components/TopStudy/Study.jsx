import React from 'react'
import './Study.css'
import France from '../../assets/France.jpg'
import Germany from '../../assets/germany.jpg'
import netherlands from '../../assets/netherlands.jpg'
import sydney from '../../assets/sydney.jpg'
import uk from '../../assets/uk.jpg'
import usa from '../../assets/usa.jpg'
import { Link } from 'react-router-dom'

const Study = () => {
  return (
    <div className='study container'>
        <div className="study-text">
            <h1>TOP STUDY DESTINATIONS AROUND THE WORLD</h1>
            <p>Discover the PERFECT Destination for you</p>
        </div>

    <div className='programs'>
        <div className='program'>
           <Link>
            <img src={France} alt="" />
            <div className="caption">
                <p>Study in France</p>
            </div>
            </Link>
        </div>
        <div className="program">
            <img src={Germany} alt="" />
            <div className="caption">
                <p>Study in Germany</p>
            </div>
        </div>
        <div className="program">
            <img src={netherlands} alt="" />
            <div className="caption">
                <p>Study in Netherlands</p>
            </div>
        </div>
        <div className="program">
        <Link to='/auslanding' >
            <img src={sydney} alt="" />
            <div className="caption">
                <p>Study in Australia</p>
            </div>
            </Link>
        </div>
        <div className="program">
            <img src={uk} alt="" />
            <div className="caption">
                <p>Study in United Kingdom</p>
            </div>
        </div>
        <div className="program">
            <img src={usa} alt="" />
            <div className="caption">
                <p>Study in United States of America</p>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default Study



