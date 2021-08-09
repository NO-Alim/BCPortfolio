import React from 'react'
import './Scss/Header.scss'
import {Link as ScrollLink} from 'react-scroll'
import arrow from '../img/arrow_down.png'
const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <p className="spacial-tag">Hello, I'm </p>
                <h1>Abdul Alim.</h1>
                <h2>I Help Designers, Small Agencies And Businesses Bring Their Ideas To Life.</h2>
                <p className="description"></p>
                <a className="mail-btn" href="mailto:abdulalimrakib53@gmail.com">Let's Talk</a>
            </div>
            <div className="btn-down">
                <ScrollLink to="about" spy={true} smooth={true} offset={80} duration={500} className="down-btn"><img src={arrow} /></ScrollLink>
            </div>
        </div>
    )
}

export default Header
