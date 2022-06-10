import React from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Login from "./components/Login"
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
`;
export default function App (){
  return(
    <>
   <GlobalStyle/>
    <Header/>
    <Main/>
    <Login/>
    <LoginPage/>
    <Footer/>
    </>
  )
}