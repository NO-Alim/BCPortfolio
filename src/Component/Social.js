import React from 'react'
import './Scss/Social.scss'
import {Link} from 'react-router-dom'
import {FaFacebookF,FaLinkedinIn,FaTwitter,FaGithub} from 'react-icons/fa'

const Social = () => {
    return (
        <div className="fixed-social">
            <div className="social-container">
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
        </div>
    )
}

export default Social
