import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width:100%;
    background-color:#332e29;
    display:flex;
    flex-direction:column;
    justify:content:center;
`
const NavegationBar = styled.nav`
    width:80%;
    border:solid red;
    display:flex;
    flex-direction:row;
    justify:content:space-between;
    align-self:center;
`
const Logo = styled.img`
    width:10%;
    border:solid green;
`
const Section = styled.section`
    width:90%;
    border:solid blue;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-self:end;
    @media(max-width:768px){
        width:100%;
        display:flex;
        flex-direction:column-reverse;
        justify:content:space-between;
       
    }
    
    `
const Paragraph = styled.p`
    font-size:1.25rem;;
    font-weight:400;
    line-height:2;   
    padding-bottom:3vh;

`
const Credit = styled.p`
    font-size:1.25rem; 
    font-weight:400;
    padding-bottom:1.55rem; 

  
`
const Button = styled.button`
    width:20%;
    background-color:#332e29;
    color:white;
    border:white solid 2px;
    font-size:1.25rem; 
    font-weight:200;
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    @media(max-width:1563px){
        width:45%;
    }
    

`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    justify:content:space-between;
    align-self:start;
    border:solid green;
    width:50%;
    color:white;
    padding-top:60px;
    @media(max-width:768px){
        width:90%;
        padding-right:0px;
        padding-top:0px;
        align-self:center;
    }

`
const BackgroundImage = styled.img`
    width:45%;
    @media(max-width:768px){
        width:100%;
    }
`
const Title = styled.h1`
    position:absolute;
    z-index;1;;
    font-size:20vh;
    bottom:0px;
    left:300px;
    width:50%;
    border:solid 7px pink;
    color:white;
    display:flex;
    flex-direction:row;
    justify-content:center;
    @media(max-width:768px){
        width:60%;
        left:0px;
        top:500px;
        font-size:15vh;
    }

    `
export default function Header() {
    const Navegation = () => {
        return (
            <Container>
                <NavegationBar>
                    <Logo src="https://capp.nicepage.com/127a9e0280bc0238654a86948d8a962576590dba/images/default-logo.png" alt="Logo" />
                    <Logo src="https://capp.nicepage.com/127a9e0280bc0238654a86948d8a962576590dba/images/default-logo.png" alt="Logo" />

                </NavegationBar>
                <Section>
                    <Text>

                        <Paragraph>We are committed to helping you exceed your fitness goals. With our indoor pool, basketball courts, group exercise classes and state-of-the-art fitness floor, you will find exactly what you are looking for.</Paragraph>
                        <Credit>Image from <a>Freepik</a></Credit>
                        <Button>Join now</Button>
                    </Text>
                    <BackgroundImage src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/38ee1ea677385329992fba19/gfggg-min1.jpg" alt="Man weigth" />

                </Section>
            </Container>
        )
    }
    return (
        <>
            <>{Navegation()}</>
        </>
    )

}