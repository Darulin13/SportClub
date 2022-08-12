import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    background-color:#333333;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Paragraph = styled.p`
    color:white;
    width:95%;

    font-size:0.7rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-top:10px;
    padding-bottom:10px;
    @media(max-width:667px){
        font-size:0.7rem;
    }


`
export default function Footer() {
    const Credits = () => {
        return (
            <Container>
                    <Paragraph>Website by João Pedro</Paragraph>
                <Paragraph>Website Templates created with Website Builder Software</Paragraph>
            </Container>

        )
    }
    return (
        <div>
            {Credits()}
        </div>
    )
}