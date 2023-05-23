import styled from "styled-components";
export const Button = styled.div`
// border-radius :50px;
background:${({primary}) =>(primary ? 'transparent':'#010606')};
white-space : nowrap;
padding: ${({big}) => (big  ? '14p 48px':'12px 30px')};
color:${({dark})=>(dark ? '#010606':'#fff')};
font-size: ${({fontBig})=>(fontBig?'20px':'16px')};
outline: none;
width: 200px;
margin-top:20px;
margin-bottom:20px;
border: 0.1px solid white;
cursor:pointer;
display:flex;
justify-content: center;
align-items:center;
transition: all 0.2s ease-in-out;
$:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=>(primary?'#fff':'#01BF71')};
}
`
