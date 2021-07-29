import React,{useEffect, useRef, useState} from 'react'
import './Scss/Navbar.scss'
import {NavLink, Link} from 'react-router-dom'
import {FaMagento,FaTimes} from 'react-icons/fa'
import Headroom from 'react-headroom'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {Link as ScrollLink} from 'react-scroll'
import {useWindowWidth} from '@react-hook/window-size'
import Resume from '../img/Resume.doc'


const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
    list: {
        width: 'auto',
      },
      fullList: {
        width: 'auto',
      },
      drawerPaper : {
          width: 'auto',
          background: "#0b162a",
          color: "#e9e9e9"
      }
  });

const Navbar = () => {
    const [shadow, SetShadow] = useState(false);
    //drawer
    const [drawerOpen, setDrawerOpen] = useState(false);
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const navRef = useRef(null);
    const width = useWindowWidth();


    const toggleDrawer = () =>{
        setDrawerOpen(!drawerOpen);
    }

    const toggleDrawerOutClick = (e) => {
        if (e.type === 'keydown' && (e.key === 'Enter' || e.key === 'Shift')) {
            setDrawerOpen(false)
        }
    }
    const scrollHandler = () => {
        var top = window.scrollY;
        //const navHeight = navRef.current.clientHeight;
        if (top === 0) {
            SetShadow(false)
        } else {
            SetShadow(true)
        }
    }

    const handleClick = (e) =>{
        if (!menuBtnRef.current.contains(e.target)) {
            if (!menuRef.current.contains(e.target)) {
                setDrawerOpen(false);
            }
        }

    }

    const mediaWidth = () => {
        if (width > 768) {
            setDrawerOpen(false)
        }
    }

    useEffect(() => {
        mediaWidth();
        return () => {
            mediaWidth();
        }
    },[width])
    useEffect(() => {
        window.addEventListener("scroll",scrollHandler, true);
        document.addEventListener("keydown", toggleDrawerOutClick);
        document.addEventListener('click', handleClick)
        return () =>{
            window.removeEventListener("scroll",scrollHandler,true)
            document.removeEventListener("keydown", toggleDrawerOutClick)
            document.removeEventListener('click', handleClick)

        }
    })
    const classes = useStyles();
    return (
        <>
        <Headroom>
            <nav ref={navRef} className={`navbar ${shadow ? 'shadow': null}`}>
                <div className="nav-container">
                    <div className="logo-container">
                        <ScrollLink to="header" spy={true} smooth={true} offset={-100} duration={500}>
                            <h2>BC</h2>
                        </ScrollLink>
                    </div>
                    <div className="link-container">
                        <ul>
                            <li>
                                <ScrollLink to="header" spy={true} smooth={true} offset={-100} duration={500}>Home</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500}>About</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="experience" spy={true} smooth={true} offset={-100} duration={500}>experience</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="work" spy={true} smooth={true} offset={-100} duration={500}>work</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500}>contact</ScrollLink>
                            </li>
                            <li>
                                <a className="resume-btn" href={Resume} download='Resume.doc'>Resume</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <div className="menu-container" ref={menuBtnRef}>
                            <div className={`menus ${drawerOpen ? 'active': null}`} onClick={() => toggleDrawer()}>
                                <div className="menu-bar"></div>
                                <div className="menu-bar"></div>
                                <div className="menu-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Headroom>
        <Drawer className={classes.list}
            palette="secondary"
            variant="persistent"
            open={drawerOpen}
            anchor="left"
            classes={{paper: classes.drawerPaper}}>
                <div className="drawer-container" ref={menuRef}>
                    <div className="drawer-btn-container">
                        <button onClick={() => setDrawerOpen(false)} className="close-btn"><FaTimes /></button>
                    </div>
                    <ul>
                            <li>
                                <ScrollLink to="header" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>Home</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>About</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>experience</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="work" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>work</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>contact</ScrollLink>
                            </li>
                            <li>
                                <a className="resume-btn" href={Resume} download="Resume.doc">Resume</a>
                            </li>
                        </ul>
                </div>
        </Drawer>
        </>
    )
}

export default Navbar