import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks } from './NavbarElements'
const Navbar = ({toggle}) =>{
    return (
    <>
    <Nav>
    <NavbarContainer>
        <NavLogo to ='/'>EleNA</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to="About">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="Home">HOME</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="Search">SEARCH</NavLinks>
            </NavItem>
        </NavMenu>
    </NavbarContainer>
    </Nav>
    </>
    );
};

export default Navbar;