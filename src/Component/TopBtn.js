import React,{useEffect,useRef} from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaArrowUp} from 'react-icons/fa'
import './Scss/TopBtn.scss'


const TopBtn = () => {
    const TopBntref = useRef(null)

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const handleTopBtn = () => {
        const pageOffset = window.pageYOffset * 2;
        const ViewPortHeight = window.innerHeight;
        if (pageOffset > ViewPortHeight) {
            TopBntref.current.style.bottom = '20px' 
        } else {
            TopBntref.current.style.bottom = '-40px' 
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',handleTopBtn)
        return () => {
            window.removeEventListener('scroll', handleTopBtn)
        }
    })

    return (
        <div className="topBtn" ref={TopBntref}>
            <span className="scroll-top" onClick={scrollToTop}>
                <FaArrowUp />
            </span>
        </div>
    )
}

export default TopBtn
