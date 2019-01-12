import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Container from "./Container";
import MainContent from "./MainContent";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import "./App.css";

WebFont.load({
  google: {
    families: ["Montserrat:300,400,500,700", "serif"]
  }
});

const BackgroundDiv = styled.div`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: "red";
`;

const BackgroundBubbles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;

  li {
    position: absolute;
    list-style: none;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    bottom: -320px;
    -webkit-animation: square 50s infinite;
    animation: square 50s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    -khtml-border-radius: 4px;
  }
  li:nth-child(1) {
    left: 10%;
  }
  li:nth-child(2) {
    left: 20%;
    width: 160px;
    height: 160px;
    border-radius: 160px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 34s;
    animation-duration: 34s;
  }

  li:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  li:nth-child(4) {
    left: 40%;
    width: 120px;
    height: 120px;
    border-radius: 120px;
    -webkit-animation-duration: 44s;
    animation-duration: 44s;
  }

  li:nth-child(5) {
    left: 70%;
  }

  li:nth-child(6) {
    left: 80%;
    width: 240px;
    height: 240px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  li:nth-child(7) {
    left: 32%;
    width: 320px;
    height: 320px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
  }

  li:nth-child(8) {
    left: 55%;
    width: 40px;
    height: 40px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
  }

  li:nth-child(9) {
    left: 25%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
  }

  li:nth-child(10) {
    left: 90%;
    width: 320px;
    height: 320px;
    -webkit-animation-delay: 22s;
    animation-delay: 22s;
  }

  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(-1500px) rotate(600deg);
      transform: translateY(-1500px) rotate(600deg);
    }
  }
`;

const PageDiv = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    overflow: visible;
  }
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageDiv>
        <BackgroundDiv>
          <BackgroundBubbles>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </BackgroundBubbles>
        </BackgroundDiv>

        <Container>
          <Header />
          <MainContent isVisible={true} />
        </Container>
      </PageDiv>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
