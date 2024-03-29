import React from 'react'
import './Scss/About.scss'
import {FaHtml5,FaCss3,FaSass,FaJsSquare,FaReact,FaCaretRight} from 'react-icons/fa'
import img from '../img/alim.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="text-content">
                        <p className="spacial-tag">Hi, I'm Abdul Alim. I'm A Multi-Talented Human With Few Years Of Experiences In Front-End-Design.I Help Designers, Small Agencies And Businesses Bring Their Ideas To Life.</p>
                        <p>I Spent The Last Four Years Working As A Front-End-Designer. I Acquired Project And Time Management Skills, As Well As The Ability To Communicate With Team Members And Clients While Effectively Meeting Milestones And Deadlines.I Have Worked On Multiple Of Responsive Web Design Projects Using (Photoshop, Illustrator) And Development (HTML, CSS, Scss, JS, React, Redux Etc.).</p>
                        <p>I Am Currently Working From Bangladesh. I Am Always Available To Discuss Your Project Over The Phone Or Via Whatsapp. These Days I Enjoy Spending My Free Time Photography, Traveling And Watching Movie.</p>
                        <p>Here are a few technologies I've been working with recently :</p>
                        <div className="technology-list">
                            <div className="left-tech">
                                <li><span><FaHtml5/></span> HTML5</li>
                                <li><span><FaCss3/></span> CSS</li>
                                <li><span><FaSass/></span> Scss</li>
                            </div>
                            <div className="right-tech">
                                <li><span><FaJsSquare/></span> JavaScript (ES6+)</li>
                                <li><span><FaReact/></span> React js</li>
                                <li><span><FaCaretRight/></span> Material-UI</li>
                            </div>
                        </div>
                    </div>
                    <div className="img-container">
                        <div className="image">
                            <img src={img} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
