import React from 'react'
import pdf from './ConcussionCapstone.png'
import proj from './projectImg.PNG'
import './Work.css'

export default function Work() {
    return (
        <div className='Work-container'>
      <h1 className='a12'>Work I've Done</h1>
      <div className='inner-work'>
        <div className='Work-holder'>
          <div className='text-work1'>
      <p className='a12'>Utilized the Pandas library to clean and scrape demographics and medical history data from online datasets</p>
        <br></br>
        <p className='a12'>Trained a logistic regression model, support vector machine model, and decision tree using the Sklearn library to assess future re-concussion risk of NFL players at a 75% accuracy and created a research slide to summarize the findings</p>
        <br></br>
        </div>
      <div className='imageContainer-top'>
        <img className = 'concuss' src={pdf} alt="Logo" />
        </div>
        </div>
        </div>
        <div className='inner-work'>
        <div className='Work-holder'>
        <div className='imageContainer-bot'>
        <img className = 'concuss' src={proj} alt="Logo" />
        </div>
          <div className='text-work2'>
      <p className='a12'>Trained a machine learning model to assess the percent match with a disease or condition given the symptoms, and implemented this back end computing into a Flask web application using Python and Javascript</p>
        <br></br>
        <p className='a12'>Incorporated code that uses natural language processing to group similar text reviews on medications to create a content based recommendation system and recommend optimal medication for certain conditions in a Flask web application
        </p>
        <br></br>
        </div>
      
        </div>
        </div>
      </div>
    )
}
