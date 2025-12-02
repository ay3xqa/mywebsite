import React from 'react'
import './Work.css'

const PROJECTS = [
    {
        title: "Comprehend",
        videoUrl: "https://www.pexels.com/video/placeholder-video-1",
        link: "https://boltid.me",
        thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    },
    {
        title: "BoltId",
        videoUrl: "https://www.pexels.com/video/placeholder-video-2",
        link: "https//boltid.me",
        thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
        title: "Algorihmic Trading on Kalshi",
        videoUrl: "https://www.pexels.com/video/placeholder-video-3",
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
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='project-card'
                    >
                        <div className='project-media'>
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className='project-thumbnail'
                            />
                        </div>
                        <div className='project-info'>
                            <h3 className='project-title'>{project.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
