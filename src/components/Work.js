import React from 'react'
import './Work.css'
import ComprehendThumbnail from './comprehend_thumbnail.png'
import BoltIdThumbnail from './boltid_thumbnail.png'
import KalshiThumbnail from './kalshi_thumbnail.jpg'

const PROJECTS = [
    {
        title: "Comprehend",
        description: "An AI Powered application for querying external APIs using a GraphQL API and LLM to generate dynamic responses.",
        link: "https://boltid.me",
        thumbnail: ComprehendThumbnail
    },
    {
        title: "BoltId",
        description: "A full-stack identity verification platform using AWS Rekognition for biometric validation, and Algorand to issue and store identity tokens on the blockchain.",
        link: "https://github.com/ay3xqa/api-smart-query",
        thumbnail: BoltIdThumbnail
    },
    {
        title: "Algorithmic Trading on Kalshi",
        description: "An Algorithmic trading bot using Deribit Crypto Option Market data to trade event-based contracts on Kalshi.",
        link: "https://github.com/ay3xqa/kalshiXderibitTrading",
        thumbnail: KalshiThumbnail
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
