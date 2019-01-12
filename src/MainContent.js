import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const MainCont = styled.div`
    opacity:1;
    z-index:10;
    padding: 0;
    position: absolute;
    overflow: hidden;
    left: 95%;
    top: 10px;
    width: 63em;
    height: 44rem;
    padding-left:4rem;
    background: #ffffff;
    transform-origin: center left;
    border-radius:4px;
    font-family:Montserrat;
    box-sizing:border-box;


    @media (max-width:1024px){
    position:relative;
    margin: 8rem 0;
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    padding-left:1.5rem;
    }

&::before{
      content: '';
    position: absolute;
     @media (max-width:1024px){
      position:relative;}

    top: 0;
    left: 0;
    right: 20px;
    height: 20px;
    background: #ffffff;
    z-index: 10;
}

&::after{
  :after {
    content: '';
    position: absolute;
     @media (max-width:1024px){
      position:relative;}
    top: 0;
    left: 0;
    right: 20px;
    height: 20px;
    background: #ffffff;
    z-index: 10;
}

animation-name: fadeInLeft;
animation-duration:1s;
animation-fill-mode:both;


@keyframes fadeInLeft {

  0%{
    opacity:0;
    transform:tranlate3d(-70%,0,0);
  }

  100%{
    opacity:1;
    transform:translate3d(0,0,0);
  }
}
`;

const MainContentCard = props => {
  return (
    <MainCont>
      <Route exact path="/" component={Profile} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </MainCont>
  );
};

export default MainContentCard;
