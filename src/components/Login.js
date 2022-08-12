import React from "react";
import styled from "styled-components";
//Price Page
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
   
`
//Text Page
const BlackBackground = styled.section`
    background-color:black;
    width:100%;
    border:solid red;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    padding-top:8rem;
    @media(max-width:896px){
        flex-direction:column;
    }

`
const LeftContainer = styled.section`
    width:50%;
    border:solid green;
    display:flex;
    flex-direction:row;
    justify-content:center;
    @media(max-width:896px){
        width:90%;
        justify-content:start;
        align-items:start;
        align-self:center;
    
    }
`
const RightContainer = styled.section`
    width:50%;
    border:solid blue;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    padding-top:100px;
    padding-bottom:100px;
    @media(max-width:896px){
        width:90%;
        align-items:start;
        align-self:center;
        padding-top:30px;
        padding-bottom:20px;
    
    }
    
`
const RightParagraph = styled.p`
    color:white;
    font-size:2rem;
    font-weight:300;  
    width:80%;
    padding-top:30px;
    padding-bottom:30px;
    @media(max-width:896px){
        font-size:1rem;    
    
    }

`
const RightTitle = styled.h1`
    color:white;
    font-size:2rem;
    font-weight:400;
    padding-top:70px;
    padding-bottom:20px;
    width:80%;
    @media(max-width:896px){
        font-size:1rem; 
        padding-top:10px;
        padding-bottom:0px;   
    }

    
    
`
const Freepik = styled.p`
    color:white; 
    padding-top:20px;
     padding-bottom:20px;
     font-size:2rem;
     @media(max-width:896px){
        font-size:1rem; 
        padding-top:0px;
        padding-bottom:0px;   
    }
`
const TextPageImg = styled.img`
    width:70%;
    
`

//Membership Page
const MembershipContainer = styled.section`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

    
    div{
        width:80%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-items:center;
        @media(max-width:1208px){
        flex-direction:column;
        width:90%;
        

    }
    }
`

const MemberTitle = styled.h1`
    font-size:2rem;
    font-weight:400;
     padding-top:20px;
     padding-bottom:20px;
     @media(max-width:500px){
        font-size:1rem;
    }
  
`
const BlackTitle = styled.h2`
    font-size:3rem;
    @media(max-width:500px){
        font-size:1.5rem;
    }

    
`

const SocialMedias = styled.nav`
    width:40%;
    display:flex;
    flex-direction:row;
    align-items:start;
    justify-content:space-between;

    border:2px solid red;
    @media(max-width:1208px){
        width:25%;
    }
    @media(max-width:540px){
        width:90%;
        align-self:center;
    }
    
`
const Icon = styled.img`
    width:15%;
    
    
`
const MemberShipParagraph = styled.p`
    font-size:1rem;
    font-weight:300;
    padding-top:20px;
    padding-bottom:20px;
    border:solid blue;
    width:60%;

    @media(max-width:1208px){
        width:100%;
        

    }
    
   
    
    
`
const Box1 = styled.article`
    width:30%;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-items:center;
    align-self:center;
    border:solid red;
    @media(max-width:1208px){
        width:90%;

    }


`
const Box2 = styled.article`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-items:center;
    align-self:center;
    padding-top:85px;
    padding-bottom:85px;
    border:solid blue;
    @media(max-width:1208px){
        width:50%;
    }
    @media(max-width:540px){
        width:100%;
        padding-top:20px;
       padding-bottom:20px;
    }
`
const Title2 = styled.h2`
    font-size:1.5rem;
    text-align:center;
    font-weight:400;
    @media(max-width:540px){
  
        font-size:1.3rem;
    }
    
`
const Box3 = styled.article`
    width:50%;
    background-color:#f0e3d7;
    d    font-size:2.5rem;   g-top:50px;
    padding-bottom:50px;
    border:solid red;
    @media(max-width:540px){
        width:100%;
    }
   

    
`
const Img = styled.img`
    width:90%;

    
`
const Responsive = styled.section`
    width:70%;
    display:flex;
    flex-direction: row;
    justify-content:center;
    border:solid green;
    @media(max-width:1208px){
        width:90%;
    }
    @media(max-width:540px){
        flex-direction: column;
    }
    
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

    const textPage = () => {
        return (
            <BlackBackground>
                <LeftContainer>
                    <TextPageImg src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/4e60aa1514be5c9f86f20991/erttt.jpg" alt="Man working out" />
                </LeftContainer>
                <RightContainer>
                    <TextPageImg src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ab096fb3a8e854908c57e3f4/gff.jpg" alt="Man working out" />
                    <RightTitle>Men's Workout</RightTitle>
                    <RightParagraph>Sample text. Click to select the text box. Click again or double click to start editing the text.</RightParagraph>
                    <Freepik>Images from Freepik</Freepik>
                </RightContainer>

            </BlackBackground>
        )

    }

    const membership = () => {
        return (
            <MembershipContainer>
                <div>
                    <Box1>
                        <MemberTitle>MEMBERSHIP</MemberTitle>
                        <BlackTitle>
                            Membership Benefits
                        </BlackTitle>
                        <MemberShipParagraph>
                            A gym structured to flow, getting you in and out fast. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        </MemberShipParagraph>
                        <SocialMedias>
                            <Icon src="https://img.icons8.com/ios-glyphs/344/facebook.png" alt="Facebook icon" />
                            <Icon src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter icon" />
                            <Icon src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" alt="Instagram icon" />
                            <Icon src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128210.png?token=exp=1655160772~hmac=f744a412850b4cacb929b698de035b85" alt="Youtube icon" />
                        </SocialMedias>
                    </Box1>
                    <Responsive>

                        <Box2>
                            <Title2>You ll discover how easy it is to stay motivated and fit</Title2>
                            <MemberShipParagraph> Images from Freepik </MemberShipParagraph>
                            <Button>Join now</Button>
                        </Box2>
                        <Box3>
                            <Img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/7398d9ab97d152f88615ac78/fxgtfh.jpg" alt="Man working" />
                        </Box3>

                    </Responsive>
                </div>
            </MembershipContainer>

        )
    }

    return (
        <div>
            {pricePage()}
            {textPage()}
            {membership()}
        </div>
    )
}