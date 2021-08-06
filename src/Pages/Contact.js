import React from 'react'
import { useHistory } from 'react-router-dom'
import './Scss/Contact.scss'

const Contact = () => {
    const location = useHistory();
    return (
        <div className="contact">
            <div className="contact-container">
                <p className="spacial-tag">Get In Touch</p>
                <h2>Contact</h2>
                <div className="address">
                    <p>39 NO. South Halishahar</p>
                    <p>Chattogram, CTG 400</p>
                </div>
                <div className="address">
                    <p>Abdulalimrakib53@Gmail.Com</p>
                    <p>Tel: +8801537-501-420</p>
                </div>
                <a className="mail-btn" href="mailto:abdulalimrakib53@gmail.com">Let's Talk</a>
                <p className="description">I Am Currently Working From Bangladesh. I Am Always Available To Discuss Your Project Over The Phone Or Via Whatsapp.</p>
            </div>
        </div>
    )
}

export default Contact
