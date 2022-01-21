import React, {useState} from 'react'
import { Button } from './Button'
import './Experience.css'

  


export default function Experience() {
   
    const [butts, setButtons] = useState([{"bStyle":'btn--outline', "bSize":'btn--active', "name":"Leidos","click":1},
     {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Storage Scholars","click":2}, {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Leidos", "click":3}])
    const [jobDes, setJobDes] = useState([{"title": 'Project Management Intern', "date": 'December 2021 - December 2022', "Content": '• Refreshed architectural diagrams using MS Visio as part of the Engineering and DOD Healthcare Management System Modernization (DHMSM) teams', "Content2":'• Completed Security Technical Implementation Guide (STIG) checklists on PostgreSQL database running on in-house application server and RHEL 7', 'Content3':'• Automated MS Excel spreadsheet updates by writing Python script using openpyxl and Pandas libraries'}])
    function job1(){
        setButtons([{"bStyle":'btn--outline', "bSize":'btn--active', "name":"Leidos","click":1},
     {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Storage Scholars","click":2}, {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Leidos", "click":3}])
     setJobDes([{"title": 'Project Management Intern', "date": 'December 2021 - December 2022', "Content": '• Refreshed architectural diagrams using MS Visio as part of the Engineering and DOD Healthcare Management System Modernization (DHMSM) teams', "Content2":'• Completed Security Technical Implementation Guide (STIG) checklists on PostgreSQL database running on in-house application server and RHEL 7', 'Content3':'• Automated MS Excel spreadsheet updates by writing Python script using openpyxl and Pandas libraries'}])
    }
    function job2(){
        setButtons([{"bStyle":'btn--outline', "bSize":'btn--job', "name":"Leidos","click":1},
     {"bStyle":'btn--outline', "bSize":'btn--active', "name":"Storage Scholars","click":2}, {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Leidos", "click":3}])
        setJobDes([{"title":"Campus Co-Founder", "date": "March 2021 - Present","Content":'• Co-founded a branch of Storage Scholars at the UVA campus, a storage service by students for students','Content2':'• Launched a digital marketing campaign as well as utilized traditional marketing techniques to acquire over 500 new accounts (~20% conversion rate to paid customers)', 'Content3':'• Oversaw a team of 20 workers to carry out the logistical operations of storage and delivery of over 100 paid customers, generating over $35,000 in revenue during the pilot year'}])
    }
    function job3(){
        setButtons([{"bStyle":'btn--outline', "bSize":'btn--job', "name":"Leidos","click":1},
     {"bStyle":'btn--outline', "bSize":'btn--job', "name":"Storage Scholars","click":2}, {"bStyle":'btn--outline', "bSize":'btn--active', "name":"Leidos", "click":3}])
        setJobDes([{'title':'Systems Engineering Intern', 'date': 'June 2021 - August 2021', "Content": '• Refreshed architectural diagrams using MS Visio as part of the Engineering and DOD Healthcare Management System Modernization (DHMSM) teams', "Content2":'• Completed Security Technical Implementation Guide (STIG) checklists on PostgreSQL database running on in-house application server and RHEL 7', 'Content3':'• Automated MS Excel spreadsheet updates by writing Python script using openpyxl and Pandas libraries'}])
    }
    return (
        <div className='Experience-container'>
           <h1 className='a1'>Experience</h1> 
           <div className='inner'>
            <div className='joblist'>
            {butts.map(butt =>{
                if(butt.click===1){
        return (
            <div className='job3'>
                <Button key ={butt.click} buttonStyle={butt.bStyle} buttonSize = {butt.bSize} onClick={job1}><span>{butt.name}</span></Button>
            </div>
        )
                }
        if(butt.click===2){
            return (
                <div className='job3'>
                    <Button key ={butt.click} buttonStyle={butt.bStyle} buttonSize = {butt.bSize} onClick={job2}><span>{butt.name}</span></Button>
                </div>
            )
        }
        if(butt.click===3){
            return (
                <div className='job3'>
                    <Button key ={butt.click} buttonStyle={butt.bStyle} buttonSize = {butt.bSize} onClick={job3}><span>{butt.name}</span></Button>
                </div>
            )
        }
        return(<></>)
                
    })}
            </div>
            <div className='descript'>
            {jobDes.map(jobs =>{
        return (
            <>
            <h3 className='titleHead'>{jobs.title}</h3><br></br>
            <p className='date'>{jobs.date}</p><br></br>
            <p className='text'>{jobs.Content}<br></br>{jobs.Content2}<br></br>{jobs.Content3}</p>
            </>
        )
    
                
    })}

            
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