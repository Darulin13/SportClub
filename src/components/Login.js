import React from "react";
import styled from "styled-components";

const Container = styled.section`
    background-color:#ef7a2e;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:20px; 
    padding-bottom:30px;   
    `


const Paragraph = styled.p`
    font-size:2.5rem;   
    color:white;
    width:44%; 
    padding-top:30px;
    padding-bottom:30px;
    text-align:center;
    @media(max-width:1440px){
        width:80%; 
        font-size:1.2rem;  
    }
`


const Title = styled.h1`
    font-size:5.5rem;   
    color:white;     
    width:40%; 
    text-align:center;
    @media(max-width:1440px){
        width:80%; 
        font-size:2.1em;   
    }
`
const Button = styled.button`
    font-size:1.5rem;  
    color:#ef7a2e;  
    background-color:white; 
    border:none;  
    padding-top:5px;
    padding-bottom:5px;
    padding-right:10px;
    padding-left:10px;
`


export default function Login() {
    const pricePage = () => {
        return (
            <Container>
                <Title>Our sports club is open!</Title>
                <Paragraph>Join today by paying our $39 processing and $49 initiation fees and get the rest of the year FREE!</Paragraph>
                <Button>Join now</Button>
            </Container>
        )
    }
   
    return (
        <div>
            {pricePage()}
        </div>
    )
}