import React from 'react'
import './AboutMe.css'
import '../App.css'
import logo from './headshot.jfif'

export default function AboutMe() {
    return (
        <div className='AboutMe-container'>

        <div className='AboutMe-inner'>
        <h1 className='a1'>About Me</h1>
        <div className='tempHolder'>
          <div className='text'>
      <p className='a1'>Hey there! My name is Alex and I am currently a 2nd-year attending the University of Virginia majoring in Computer Science and Pre-commerce. I started coding back in high school creating
     some pretty neat applications and recently been really interested in blockchain and its intersections with business.</p>
        <br></br>
        <p className='a1'>Speaking of business, I love to tap into my entrepreneurial side as much as my coding. I am presently running my own franchise of Storage Scholars, a student-led moving storage for college students, and a  
        <a href='https://tradenet.ai' target="_blank" rel="noreferrer"><span className='emphText'> trade analytics startup.</span> </a>
        
        </p>
        <br></br>
        <p className='a1'>If you catch me in my free time you'll likely see me stacking chips at the poker table or pushing iron in the gym!</p>
        </div>
      <div className='imageContainer'>
        <img className = 'headshot' src={logo} alt="Logo" />
        </div>
        </div>
        </div>
      </div>
    )
}
