import React from 'react'
import './Scss/Home.scss'
import Header from '../Pages/Header'
import About from '../Pages/About'
import Experience from '../Pages/Experience'
import Work from '../Pages/Work'
import Contact from '../Pages/Contact'
import {Element} from 'react-scroll'


const Home = () => {
    return (
        <div className="home">
            <Element name="header">
                <Header />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="experience">
                <Experience />
            </Element>
            <Element name="work">
                <Work />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    )
}

export default Home
