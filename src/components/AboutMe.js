import React from 'react'
import './AboutMe.css'
import '../App.css'
import logo from './Alex_Grad_Headshot.jpg'

export default function AboutMe() {
    return (
        <div className='AboutMe-container'>

        <div className='AboutMe-inner'>
        <h1 className='a1'>About Me</h1>
        <div className='tempHolder'>
          <div className='text-AboutMe'>
      <p className='a1'>Hey there! My name is Alex and I am a recent graduate of the University of Virginia. I double majored in Commerce and Computer Science. I started coding back in high school creating
     some pretty neat applications and recently been tinkering with some ML and AI.</p>
        <br></br>
        <p className='a1'>If you catch me in my free time you'll likely see me playing golf or pushing iron in the gym!</p>
        </div>
      <div className='imageContainer-AboutMe'>
        <img className = 'headshot' src={logo} alt="Logo" />
        </div>
        </div>
        </div>
      </div>
    )
}
