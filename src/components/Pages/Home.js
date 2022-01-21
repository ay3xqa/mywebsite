import React from 'react'
import '../../App.css';
import AboutMe from '../AboutMe'
import Experience from '../Experience';
import Intro from '../Intro';
import Work from '../Work'

export default function Home() {
    return (
        <>
            <Intro />
            <AboutMe />
            <Experience />
            <Work />
        </>
    )
}
