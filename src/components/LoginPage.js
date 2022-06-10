import React from "react";
import styled from "styled-components";

const Container = styled.section`
    background-image: url("https://images03.nicepage.com/c461c07a441a5d220e8feb1a/26852d28143b583b9a71c2a4/fddddd-min.jpg");
    display:flex;
    flex-direction:row;
    justify-content:center;    
    padding-top:40px;
    padding-bottom:80px;
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
`
const Form = styled.form`
    width:40%;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
    align-items:start;
   
    padding-top:20px;
    padding-bottom:20px;
    padding-left:20px;
    padding-right:20px;
    @media(max-width:1440px){
        width:80%;
    }
`

const Title = styled.h1`
    display:flex;
    flex-direction:row;
    align-self:center; 
    padding-bottom:15px;



`

const Left = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;  
    width:49%;  
    @media(max-width:532px){
        width:100%;
    }



`


const Right = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:49%;    
    
    @media(max-width:532px){
        width:100%;
     
    }



`
const Box = styled.section`
    display:flex;
    flex-direction:row;
    justify-content:space-between;   
    width:100%;
    @media(max-width:532px){
        flex-direction:column;

    }
`

const Input = styled.input`
    background-color:#f2f2f2;

    padding-top:10px;
    padding-bottom:10px;
    border:none;
    
    @media(max-width:532px){
        width:100%;
        margin-bottom:10px;
        
        
    }
    
`
const InputMessage = styled.input`
    background-color:#f2f2f2;
    border:none;
    padding-top:40px;
    padding-bottom:40px;
    width:100%;
    
`
const Label = styled.label`
    font-size:0.8rem;

    padding-bottom:10px;
    margin-top:10px;
`
const Button = styled.button`
    background-color:black;
    color:white;
    border:none;
    margin-top:10px;
    padding-right:25px;
    padding-left:25px;
    padding-bottom:10px;
    padding-top:10px;

`
export default function LoginPage() {
    const login = () => {
        return (
            <Container>
                <Form>
                    <Title>Contact Us</Title>
                    <Box>
                        <Left>
                            <Label>Adress</Label>
                            <Input />
                            <Input />
                        </Left>
                        <Right>
                            <Label>Name</Label>
                            <Input />
                            <Label>Date</Label>
                            <Input />

                        </Right>
                    </Box>

                    <Label>Message</Label>

                    <InputMessage />
                    <Button>Submit</Button>

                </Form>

            </Container>
        )
    }
    return (
        <>
            {login()}
        </>
    )

}