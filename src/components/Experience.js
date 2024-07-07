import React, {useState} from 'react'
import { Button } from './Button'
import './Experience.css'

  


export default function Experience() {
   
    const [butts, setButtons] = useState([{"bStyle":'btn--outline', "bSize":'btn--active', "name":"Capital One","click":1},
     {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Yext","click":2}, {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Storage Scholars", "click":3}])
    const [jobDes, setJobDes] = useState([{"title": 'Software Engineering Intern', "date": 'June 2023 - August 2023', 
    "Content": '• Product developed and implemented an internal slack application aiding performing data stewards to better perform metadata checks/updates and easily view dataset metrics and tasks in the application dashboard', 
    "Content2":'• Refactored metrics dashboard to scan and flag datasets that are uncompliant with enterprise data policies using backend APIs and drove the integration of an AI assistant chatbot into the application using Tensorflow and other NLP techniques', 
    'Content3':'• Utilized Amazon Web Services (ECS Fargate, S3, IAM) and performed DevOps to facilitate scalable and efficient deployment of the Slack application'}])
    
    function job1(){
        setButtons([{"bStyle":'btn--outline', "bSize":'btn--active', "name":"Capital One","click":1},
        {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Yext","click":2}, {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Storage Scholars", "click":3}])
     setJobDes([{"title": 'Software Engineering Intern', "date": 'June 2023 - August 2023', 
     "Content": '• Product developed and implemented an internal slack application aiding performing data stewards to better perform metadata checks/updates and easily view dataset metrics and tasks in the application dashboard', 
     "Content2":'• Refactored metrics dashboard to scan and flag datasets that are uncompliant with enterprise data policies using backend APIs and drove the integration of an AI assistant chatbot into the application using Tensorflow and other NLP techniques', 
     'Content3':'• Utilized Amazon Web Services (ECS Fargate, S3, IAM) and performed DevOps to facilitate scalable and efficient deployment of the Slack application'}])
    }
    
    function job2(){
        setButtons([{"bStyle":'btn--outline', "bSize":'btn--job', "name":"Capital One","click":1},
        {"bStyle":'btn--outline', "bSize":'btn--active', "name":"Yext","click":2}, {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Storage Scholars", "click":3}])
        setJobDes([{"title":"Software Engineering Intern", "date": "May 2022 - August 2022",
        "Content":'• Designed, bug fixed, and implemented search analytics on store locator pages using HTML, CSS and Javascript for notable companies/brands such as Sanrio Ltd., JD Sports, and Dunkin’.',
        'Content2':'• Created automated Out of Office messaging within intra-company communication mediums via Slack API',
        'Content3':''}])
    }
    
    function job3(){
        setButtons([{"bStyle":'btn--outline', "bSize":'btn--job', "name":"Capital One","click":1},
        {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Yext","click":2}, {"bStyle":'btn--outline', "bSize":'btn--active', "name":"Storage Scholars", "click":3}])
        setJobDes([{"title":"Campus Co-Founder", "date": "March 2021 - October 2022",
        "Content":'• Co-founded a branch of Storage Scholars at the UVA campus, a storage service by students for students',
        'Content2':'• Launched a digital marketing campaign as well as utilized traditional marketing techniques to acquire over 500 new accounts (~20% conversion rate to paid customers)',
        'Content3':'• Oversaw a team of 20 workers to carry out the logistical operations of storage and delivery of over 100 paid customers, generating over $35,000 in revenue during the pilot year'}])
    }

    const functionMap = {
        1: job1,
        2: job2,
        3: job3
      };
    return (
        <div className='Experience-container'>
            <div className='Experience-inner'>
           <h1 className='a1'>Experience</h1> 
           <div className='Experience-holder'>
            <div className='joblist'>
            {butts.map(butt =>{

        return (
            <div className='job3'>
                <Button key ={butt.click} buttonStyle={butt.bStyle} buttonSize = {butt.bSize} onClick={functionMap[butt.click]}><span>{butt.name}</span></Button>
            </div>
        )          
    })}
            </div>
            <div className='descript'>
            {jobDes.map(jobs =>{
        return (
            <>
            <h3 className='titleHead'>{jobs.title}</h3><br></br>
            <p className='date'>{jobs.date}</p><br></br>
            <p className='text'>{jobs.Content}<br></br><br></br>{jobs.Content2}<br></br><br></br>{jobs.Content3}</p>
            </>
        )
    
                
    })}

            
            </div>
           </div>
           </div>
        </div>
    )
}

/* <h3 className='titleHead'>Project Management Intern</h3>
                <br></br>
                <p className='date'>December 2021 - December 2022</p>
                <br></br>
                <p className='text'>
                • Refreshed architectural diagrams using MS Visio as part of the Engineering and DOD Healthcare Management System
Modernization (DHMSM) teams
<br></br>
• Completed Security Technical Implementation Guide (STIG) checklists on PostgreSQL database running on in-house
application server and RHEL 7
<br></br>
• Automated MS Excel spreadsheet updates by writing Python script using openpyxl and Pandas libraries
                </p> 
                
                
              return (
                <h3 className='titleHead'>{jobs.title}</h3>
                <p className='date'>{jobs.date}</p>
                <p className='text'>{jobs.Content}<p/>
                )  */