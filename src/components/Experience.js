import React, {useState} from 'react'
import { Button } from './Button'
import './Experience.css'

const EXPERIENCES = [
    {
        company: "Capital One",
        title: "Software Engineering Intern",
        date: "June 2023 - August 2023",
        bullets: [
            "Product developed and implemented an internal slack application aiding performing data stewards to better perform metadata checks/updates and easily view dataset metrics and tasks in the application dashboard",
            "Refactored metrics dashboard to scan and flag datasets that are uncompliant with enterprise data policies using backend APIs and drove the integration of an AI assistant chatbot into the application using Tensorflow and other NLP techniques",
            "Utilized Amazon Web Services (ECS Fargate, S3, IAM) and performed DevOps to facilitate scalable and efficient deployment of the Slack application"
        ]
    },
    {
        company: "Yext",
        title: "Software Engineering Intern",
        date: "May 2022 - August 2022",
        bullets: [
            "Designed, bug fixed, and implemented search analytics on store locator pages using HTML, CSS and Javascript for notable companies/brands such as Sanrio Ltd., JD Sports, and Dunkin'.",
            "Created automated Out of Office messaging within intra-company communication mediums via Slack API"
        ]
    },
    {
        company: "Storage Scholars",
        title: "Campus Co-Founder",
        date: "March 2021 - October 2022",
        bullets: [
            "Co-founded a branch of Storage Scholars at the UVA campus, a storage service by students for students",
            "Launched a digital marketing campaign as well as utilized traditional marketing techniques to acquire over 500 new accounts (~20% conversion rate to paid customers)",
            "Oversaw a team of 20 workers to carry out the logistical operations of storage and delivery of over 100 paid customers, generating over $35,000 in revenue during the pilot year"
        ]
    }
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const currentExperience = EXPERIENCES[activeIndex];

    return (
        <div className='Experience-container'>
            <div className='Experience-inner'>
                <h1 className='a1'>Experience</h1>
                <div className='Experience-holder'>
                    <div className='joblist'>
                        {EXPERIENCES.map((exp, index) => (
                            <div className='job3' key={index}>
                                <Button
                                    buttonStyle='btn--outline'
                                    buttonSize={activeIndex === index ? 'btn--active' : 'btn--job'}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span>{exp.company}</span>
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className='descript'>
                        <h3 className='titleHead'>{currentExperience.title}</h3>
                        <br></br>
                        <p className='date'>{currentExperience.date}</p>
                        <br></br>
                        <p className='text'>
                            {currentExperience.bullets.map((bullet, index) => (
                                <React.Fragment key={index}>
                                    • {bullet}
                                    {index < currentExperience.bullets.length - 1 && (
                                        <>
                                            <br></br>
                                            <br></br>
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}