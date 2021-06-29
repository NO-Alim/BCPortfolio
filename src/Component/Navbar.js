import React,{useEffect, useRef, useState} from 'react'
import './Scss/Navbar.scss'
import {NavLink, Link} from 'react-router-dom'
import {FaMagento} from 'react-icons/fa'
import Headroom from 'react-headroom'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {Link as ScrollLink} from 'react-scroll'


const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
      drawerPaper : {
          width: 250,
          background: "#0b162a",
          color: "#e9e9e9"
      }
  });

const Navbar = () => {
    const [shadow, SetShadow] = useState(false);
    //drawer
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    
    const navRef = useRef(null);


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
    useEffect(() => {
        window.addEventListener("scroll",scrollHandler, true);
        document.addEventListener("keydown", toggleDrawerOutClick)
        return () =>{
            window.removeEventListener("scroll",scrollHandler,true)
            document.removeEventListener("keydown", toggleDrawerOutClick)

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
                                <button>Resume</button>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-container">
                        <span onClick={() => toggleDrawer()}><FaMagento/></span>
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
                <div className="drawer-container">
                    <div className="drawer-btn-container">
                        <button onClick={() => setDrawerOpen(false)} className="close-btn">close</button>
                    </div>
                </div>
        </Drawer>
        </>
    )
}

export default Navbar