import React from "react";
import {FaBars} from 'react-icons/fa'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks } from './NavbarElements'
import Home from "../../pages";
import MapUI from "../MapUi/Index";
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
    {/* <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="About" element={<Home />} />
    <Route exact path="Home" element={<Home />} />
    <Route exact path="Search" element={<MapUI />} />
    </Routes> */}
    </>
    );
};

export default Navbar;