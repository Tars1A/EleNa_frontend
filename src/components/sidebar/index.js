import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLinks } from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick = {toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
        <SidebarLinks to="About">ABOUT</SidebarLinks>
        <SidebarLinks to="Home">HOME</SidebarLinks>
        <SidebarLinks to="Search">SEARCH</SidebarLinks>
        </SidebarMenu> 
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar