import React from "react";
import styled from "styled-components";

const Global = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;


`

const aboutGym = () => {
    const Container = styled.main`
    width:100%;
    background-color:#f0e3d7;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-top:60px;
    
`
    const Title = styled.h1`
    width:70%;
    background-color:#f0e3d7;
    display:flex;
    flex-direction:column;
    justify:content:center;
    align-self:center;
    align-items:center;
    font-size:2.50rem;
    padding-bottom:20px;
    font-weight:800;
`
    const Title2 = styled.h2`
    width:90%;
    background-color:#f0e3d7;
    display:flex;
    flex-direction:column;
    justify:content:center;
    align-self:center;
    align-items:center;
    font-size:1.30rem;
    font-weight:600;
    border-bottom:solid #ef7a2e 2px;
    text-align:center;
    
    @media(max-width:968px){
        width:80%; 
        
    }
`
    const Paragraph = styled.p`
    width:40%;
    background-color:#f0e3d7;
    display:flex;
    flex-direction:column;
    justify:content:center;
    align-self:center;
    align-items:center;
    font-size:1.20rem;
    text-align:center;
    padding-bottom:200px;
    padding-top:20px;
    @media(max-width:968px){
        width:90%; 
    }

`
    const OrangeBackground = styled.div`
    width:50%;
    height:10vh;
    background-color:#ef7a2e;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-self:center;
    display:none;
    
`
    const Img = styled.img`
    width:30%;
    box-shadow: 0px 5px 15px 1px black; 

    
`
    const People = styled.div`
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border:solid green;
    height:30vh;
    margin-bottom:50px;;
  
`
    const Button = styled.button`
    width:10%;
    background-color:#f0e3d7;
    color:black;
    border:#ef7a2e solid 2px;
    font-size:1.25rem; 
    font-weight:200;
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-self:center;
    @media(max-width:1563px){
        width:45%;
    }

`

    return (
        <Container>
            <Title>About Gym</Title>
            <Title2> NEW YORK HEALTH RACQUET CLUB </Title2>
            <Paragraph>We`ve transformed every aspect of our membership to encompass integrated digital and in-club offerings to keep you at your best—all the time, any time.  Images from<a href="/">Freepik</a></Paragraph>
            <OrangeBackground>
                <People>
                    <Img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/0df349b6f6715abb9a1321ac/portrait-young-afro-american-sports-man-looks-away_171337-8255.jpg" />
                    <Img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/e29cd126829a588a95f12909/athletic-boxer-punching-with-determination-precaution_158595-4826.jpg" />
                    <Img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/04a492d301605e8b8cbd886b/muscular-guy-with-dumbbell_144627-27153.jpg" />
                </People>
            </OrangeBackground>

            <Button>
                View More
            </Button>
        </Container>
    )
}
const curiosities = () => {
    const Container = styled.section`
        width:100%;
        `

    //Data for map orange box
    const box =
        [
            {
                name: "ABOUT GYM",
                paragraph: "Sample text. Click to select the text box. Click again or double click to start editing the text."
            },
            {
                name: "LOSE FAT",
                paragraph: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            },
            {
                name: "TRAINING",
                paragraph: "Sample text. Click to select the text box. Click again or double click to start editing the text."
            },
            {
                name: "OUR TEAM",
                paragraph: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
            }

        ]


    return (
        <Container>



        </Container>
    )
}
const endMain = () => {
    const Container = styled.section`
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        @media(max-width:620px){
            flex-direction:column;
        }
       
        `
    const Right = styled.article`
        width:50%;
        background-color:white;
        display:flex;
         flex-direction:column;
         align-items:center;
         justify-content:center;
        padding-top:20px;
        @media(max-width:620px){
            width:100%;
        }
        div{
            width:80%;
            background-color:white;
            display:flex;
             flex-direction:column;
             align-items:start;
             justify-content:center;
             
             padding-top:6rem;

        }
        img{
            width:50%;
            padding-bottom:6rem;
            
        }
       
        p{
            font-size:1.20rem;
            width:90%;
            
            padding-top:20px;
            padding-bottom:40px;
           
        }
        h1{
            font-size:1.30rem;
            font-weight:600;
            
          
             width:90%;
        }
    
    `
    
    const Left = styled.article`
         width:50%;
         background-color:#f0e3d7;
         display:flex;
         flex-direction:row;
         align-items:center;
         justify-content:center;
         @media(max-width:620px){
            width:100%;
        }
         img{
            width:75%;
            padding-top:6rem;
            padding-bottom:6rem;

           
            
        
        }
    
    `

    return (
        <Container>
            <Left>
                <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/47d2fdbe03c9510b90cf15ec/fdgg-min.jpg" alt="Man running" />
            </Left>
            <Right>
                <div>
                    <h1>Increase motivation</h1>
                    <p>Contact or visit us at one of our health and wellness facilities to make the best move of your life. Discover the perks of membership as you get fit, stay fit and focus on your health and wellness.</p>
                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/524d22b7a5445f7fbeb9905a/bvn.jpg" alt="Man wrestling " />
                </div>
            </Right>
        </Container>
    )
}
export default function Main() {
    return (
        <Global>
            <>{aboutGym()}</>
            <>{curiosities()}</>
            {endMain()}
        </Global>)
}