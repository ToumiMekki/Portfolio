import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Main_home from '../components/Main_home/Main_home'
import AboutMe from '../components/AboutMe/AboutMe'
import Resume from '../components/Resume/Resume'
import Skills from '../components/My-Skilles/Skills'
import Contact from '../components/Contact/Contact'

function home() {
    return (
        <div className="home">
            <Navbar /> 
            <Main_home />
            <AboutMe />
            <Resume />
            <Skills />
            <Contact />
        </div>
    )
}

export default home
