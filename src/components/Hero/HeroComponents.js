import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'
export const HeroContainer = styled.div`

display:flex;
position:absolute;
justify-content:center;
align-items: center;
height: 1200px;
width: 100vw;
top:0%;
left:0%;
z-index: 0;
:before{
    content:"";
    top:0%;
    left:0%;
    right:0%;
    bottom:0%;
    position:absolute;
    background: linear-gradient(180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.4) 100%),linear-gradient(180deg,rgba(0,0,0,0.5)0%,transparent 100% );
};
`;
export const HeroBg = styled.div`
top:0;
right:0;
bottom:0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding :8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const HeroH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width :760px){
        font-size:35px;
    }
    @media screen and (max-width :480px){
        font-size:25px;
    }
`
export const HeroH2 = styled.div`
    color: #fff;
    font-size: 40px;
    text-align: center;
    @media screen and (max-width : 768px){
        font-size:30px;
    }
    @media screen and (max-width: 480px){
        font-size:10px;
    }
`
export const HeroP = styled.div`
    margin-top:24px;
    color: #fff;
    font-size: 25px;
    text-align: center;
    max-width: 900px;
    @media screen and (max-width : 768px){
        font-size:18px;
    }
    @media screen and (max-width :480px){
        font-size:8px;
    }
`
export const HeroBttnWrapper = styled.div`
    margin-top:32px;
    display:flex;
    flex-direction:column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`


