import React from 'react'
import './Scss/Footer.scss'
import {Link} from 'react-router-dom'
import {FaFacebookF,FaLinkedinIn,FaTwitter,FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-social">
                    <ul>
                    <li>
                        <Link to="#"><FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaLinkedinIn /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaTwitter /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaGithub /></Link>
                    </li>
                    </ul>
                </div>
                <p>Designed & Build by Abdul Alim</p>
            </div>
        </footer>
    )
}

export default Footer
