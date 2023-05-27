import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="About" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset= {-80} >
                    Despre mine
                </SidebarLink>
                <SidebarLink to="Motivation" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset= {-80} >
                    Motivatie
                </SidebarLink>
                <SidebarLink to="Vision" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset= {-80} >
                    Viziune
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
