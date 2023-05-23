import React from "react";
import {FaBars} from 'react-icons/fa'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu} from './NavElements'
import MapUI from "../MapUi/Index";
import Home from "../Home/Index"
function Navb({toggle}) {
  
    return (
        <>
        <Nav>
        <NavbarContainer>
        <NavLogo to ='/'>EleNA</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/Search" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Search
                        </NavLink>
                    </div>
                 </NavMenu>
    </NavbarContainer>
    </Nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<Home />} />
                    <Route exact path="/Search" element={<MapUI />} />
                </Routes>
        </>
    );
}
  
export default Navb;