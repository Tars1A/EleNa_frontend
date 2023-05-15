import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
export const SidebarContainer = styled.aside`
position :fixed;
z-index : 999;
width :100%;
height : 100%;
background : #0d0d0d;
display : grid;
align-items : center;
top : ${({isOpen})=>(isOpen?'0%':'-100%')};
left : 0;
transition : 0.3s ease-in-out;
opacity : ${({isOpen})=> (isOpen?'100%':'0%')};
`

export const CloseIcon = styled(FaTimes)`
color:#FFF;
`
export const Icon = styled.div`
position : absolute;
top : 1.2rem;
right : 1.5rem;
background:transparent;
font-size : 2rem;
cursor: pointer;
outline:none; 
`
export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarLinks = styled.div`
display: flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration: none;
list-style:none;
transition: 0.2s ease-in-out;
text-decoration:none;
color:#fff; 
cursor:pointer;
&:hover{
    color:yellow;
    transition:0.2s ease-in-out;
}
`
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align:center;
    @media screen and (max-width = 760px){
        grid-template-rows: repeat(4,50px);
    }

`