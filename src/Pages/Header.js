import React from 'react'
import './Scss/Header.scss'
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
        </div>
    )
}

export default Header
