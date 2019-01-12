import React from "react";
import styled from "styled-components";

const MainCont = styled.div`
  @media only screen and (max-width: 600px) {
    margin: -22rem 0 0 -8rem;
  }

  @media only screen and (min-width: 600px) {
    margin: -22rem 0 0 -42rem;
  }

  @media only screen and (min-width: 768px) {
    margin: -22rem 0 0 -42rem;
  }

  @media only screen and (min-width: 992px) {
    margin: -22rem 0 0 -42rem;
  }

  @media (min-width: 1024px) {
    margin: -24rem 0 0 -40rem;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  width: 480px;
  height: 600px;
  transform: translateX(-120px);
  @media (max-width: 1024px) {
    transform: none;
    -webkit-transform: none;
    margin: 0 auto;
    position: relative;
    top: 83px;
    left: 0;
    width: auto;
    max-width: 540px;
    height: auto;
  }

  @media (max-width: 1072px) {
    transform: none;
    -webkit-transform: none;
    margin: 0 auto;
    position: relative;
    top: 83px;
    left: 0;
    width: auto;
    max-width: 540px;
    height: auto;
  }
`;

const Container = props => {
  return <MainCont>{props.children}</MainCont>;
};

export default Container;
