import React from 'react'
import logo from './headshot.jfif'
import pdf from './ConcussionCapstone.png'
import './Work.css'

export default function Work() {
    return (
        <div className='Work-container'>
      <h1 className='a12'>Work I've Done</h1>
        <div className='inner-work'>
          <div className='text'>
      <p className='a12'>Hey there! My name is Alex and I am currently a 2nd-year attending the University of Virginia majoring in Computer Science and Pre-commerce. I started coding back in high school creating
     some pretty neat applications and recently been really interested in blockchain and its intersections with business.</p>
        <br></br>
        <p className='a12'>Speaking of business, I love to tap into my entrepreneurial side as much as my coding. I am presently running my own franchise of Storage Scholars, a student-led moving storage for college students, and a  
trade analytics startup.
        </p>
        <br></br>
        <p className='a12'>If you catch me in my free time you'll likely see me stacking chips at the poker table or pushing iron in the gym!</p>
        </div>
      <div className='imageContainer'>
        <img className = 'concuss' src={pdf} alt="Logo" />
        </div>
        </div>
        <div className='inner-work'>
        <div className='imageContainer-bot'>
        <img className = 'concuss' src={pdf} alt="Logo" />
        </div>
          <div className='text'>
      <p className='a12'>Hey there! My name is Alex and I am currently a 2nd-year attending the University of Virginia majoring in Computer Science and Pre-commerce. I started coding back in high school creating
     some pretty neat applications and recently been really interested in blockchain and its intersections with business.</p>
        <br></br>
        <p className='a12'>Speaking of business, I love to tap into my entrepreneurial side as much as my coding. I am presently running my own franchise of Storage Scholars, a student-led moving storage for college students, and a  
trade analytics startup.
        </p>
        <br></br>
        <p className='a12'>If you catch me in my free time you'll likely see me stacking chips at the poker table or pushing iron in the gym!</p>
        </div>
      
        </div>
      </div>
    )
}
