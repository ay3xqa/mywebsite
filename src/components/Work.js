import React from 'react'
import './Work.css'

const PROJECTS = [
    {
        title: "Comprehend",
        description: "A brief description of what this project does and the technologies used to build it.",
        link: "https://boltid.me",
        thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
        title: "BoltId",
        description: "Another project description highlighting key features and implementation details.",
        link: "https://boltid.me",
        thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
        title: "Algorithmic Trading on Kalshi",
        description: "Description of the third project explaining the problem it solves and approach taken.",
        link: "https://github.com/ay3xqa/kalshiXderibitTrading",
        thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
    }
];

export default function Work() {
    return (
        <div className='Work-container'>
            <h1 className='work-title'>Work I've Done</h1>
            <div className='projects-grid'>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='project-card-wrapper'>
                        <h3 className='project-card-title'>{project.title}</h3>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='project-card'
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className='project-thumbnail'
                            />
                            <div className='project-overlay'>
                                <p className='project-description'>{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
