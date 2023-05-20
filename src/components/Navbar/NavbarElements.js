import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
background: #000;
z-index:2;
height:80px;
opacity:0.7;
width : 100vw;
display:flex;
justify-content:center;
align-items:center;
font-size:1 rem;
position:absolute;
border-bottom: 0.1px solid white;
top:0%;
left:0%;
@media screen and (max-width:960px){
    transition:0.8 all ease;
}
`;
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:100%;
z-index:1;
width:100vw;
align-items:center;
margin-left:12px;
font-size:1 rem;
font-weight:bold;
opacity:1;
text-decoration:none;
`;

export const NavLogo = styled(LinkR)`
color:red;
justify-self:flex-center;
cursor:pointer;
font-size: 1rem;
display:flex;
align-items:flex-start;
margin-left:25px;
font-weight :bold;
`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:760px){
   display:block;
   position:relative;
   top:0%;
   right:0%;
   transform:translate(-100%,20%);
   font-size:1.5rem;
   cursor : pointer;
   color: #fff;
}
`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    position:relative;
    top:0%;
    right:42%;
    text-align:center;
    margin-right:10px;
    @media screen and (max-width:760px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:80px;
`
export const NavLinks = styled(LinkS)`
    color:#fff;
    display:flex;
    font-size:1 rem;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor: pointer;
    &:hover{
        color:rgb(255 193 7);
        transition:0.2s ease-in-out;
    }
 `