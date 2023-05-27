import React, {useState, useEffect} from 'react';
import {GiCrystalBars} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
            scroll.scrollToTop();
        };

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo onClick={toggleHome}> muntean </NavLogo>
                <MobileIcon onClick={toggle}>
                    <GiCrystalBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ="About" smooth={true} duration={500} spy={true} exact='true' offset= {-80} >Despre mine</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="Motivation" smooth={true} duration={500} spy={true} exact='true' offset= {-80} >Motivatie</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="Vision" smooth={true} duration={500} spy={true} exact='true' offset= {-80} >Viziune</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
