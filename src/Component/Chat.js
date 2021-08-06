import React, { useRef,useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
import './Scss/ChatBtn.scss'

const Chat = () => {
    const chatRef = useRef(null);

    const handleChatbtn = () =>{
        const pageOffset = window.pageYOffset * 2;
        const ViewPortHeight = window.innerHeight;
        if (pageOffset > ViewPortHeight) {
            chatRef.current.style.bottom = '20px' 
        } else {
            chatRef.current.style.bottom = '-40px' 
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleChatbtn)
        return () => {
            window.removeEventListener('scroll', handleChatbtn)
        }
    })

    return (
        <div className="chat-btn" ref={chatRef}>
            <a className="button" href="mailto:abdulalimrakib53@gmail.com">Chat</a>
        </div>
    )
}

export default Chat
