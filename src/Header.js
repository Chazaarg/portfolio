import React from "react";
import styled from "styled-components";
import patricio from "./images/patricio.jpg";
import wallpaper from "./images/wallpaper.png";

import { Link } from "react-router-dom";
import { AddressCard } from "styled-icons/fa-regular/AddressCard";
import { FilePdf } from "styled-icons/icomoon/FilePdf";
import { Github } from "styled-icons/fa-brands/Github";
import { Cubes } from "styled-icons/fa-solid/Cubes";
import { Envelope } from "styled-icons/fa-solid/Envelope";
import cv from "./CV_CHAZARRETA_PATRICIO.pdf";

const MainDiv = styled.div`
  position: relative;
`;

const getIcon = component => {
  return styled(component)`
    margin: -20px 0 0 -8px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: #171717;
    line-height: 40px;
    display: inline-block;
    border-radius: 1px;
    -webkit-border-radius: 1px;
  `;
};

const ProfileCardIcon = getIcon(AddressCard);
const CurriculumIcon = getIcon(FilePdf);
const GithubIcon = getIcon(Github);
const ProjectIcon = getIcon(Cubes);
const ContactIcon = getIcon(Envelope);

const Wrapper = styled.header`
  position: absolute;
  left: 0;
  top: 32rem;
  z-index: 100;

  display: flex;
  width: 100%;

  opacity: 1;
  visibility: visible;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0px;
    height: 4rem;

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const ProfileCard = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  z-index: 11;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: "";
    position: absolute;
    left: -15px;
    top: -15px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(121, 31, 106, 0.4) 0%,
      rgba(46, 202, 127, 0.01) 100%
    );
  }
`;

const Profilediv = styled.div`
  padding: 210px 50px 38px 50px;
  position: relative;
  height: 100%;

  @media (max-width: 1024px) {
    height: 70%;
  }
  background: #ffffff;
  text-align: center;
  z-index: 10;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  font-family: Montserrat;
`;

const ImageCard = styled.div`
  background-image: url(${wallpaper});
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 300px;
  background-color: #626262;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;

  &::before {
    content: "";
    position: absolute;
    left: -25%;
    bottom: -198px;
    width: 700px;
    height: 200px;
    background: #ffffff;
    transform: rotate(12deg);
    -webkit-transform: rotate(12deg);
  }

  &::after {
    left: auto;
    right: -25%;
    content: "";
    position: absolute;

    bottom: -198px;
    width: 700px;
    height: 200px;
    background: #ffffff;
    transform: rotate(-6deg);
    -webkit-transform: rotate(-6deg);
  }
`;

const ProfileImage = styled.div`
  margin: 0 0 20px 0;
  position: relative;
  display: inline-block;
  width: 140px;
`;

const ProfileTitle = styled.div`
  margin: 0 0 10px 0;
  font-size: 2rem;
  color: #171717;
  line-height: 32px;
  font-weight: 500;
  font-family: Montserrat;
`;

const ProfileSubTitle = styled.div`
  margin: 0 0 15px 0;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  font-family: Montserrat;
`;

const NavGridContainer = styled.div`
  display: flex;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-widh: 560px) {
    max-width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 4px 0;
    -moz-border-radius: 0 0 4px 0;
    -webkit-border-radius: 0 0 4px 0;

    @media (max-width: 1024px) {
      box-shadow: none;
    }
    @media (max-widh: 560px) {
      box-shadow: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 4px 0;
    -moz-border-radius: 0 0 4px 0;
    -webkit-border-radius: 0 0 4px 0;
  }
`;

const NavUl = styled.ul`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  grid-template-columns: auto auto auto auto auto;
  padding: 1px;
  align-items: center;
`;

const NavGridItem = styled.li`
  display: block;
  width: 100%;
  font-size: 0.75rem;

  list-style: none;
  font-weight: 500;
  text-transform: uppercase;
  font-family: Montserrat;

  &:nth-child(5) {
    border: none;

    a::after {
      content: "";
      position: absolute;
      background: none;
      right: -0.75rem;
      bottom: 0;
      z-index: 1;
      height: 1.1rem;
      width: 3px;
    }
  }

  a {
    text-decoration: none;
    color: #32147b;
    position: relative;
    display: block;
    height: 72px;
    text-align: center;
    background: #fff;

    span {
      position: absolute;
      top: 60%;
      left: 0;
      width: 100%;
      display: block;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  a::after {
    content: "";
    position: absolute;
    background: linear-gradient(to top, #e2e2e2, #c2c2c2, #e2e2e2);
    right: 0rem;
    top: 0.25rem;
    bottom: 0;
    z-index: 1;
    height: 80%;
    width: 2px;
  }
`;

const SocialDiv = styled.div`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  text-align: center;
  padding: 0 5px 0 20px;
  a {
    margin: 0 0.4em;
  }
`;

const Header = () => {
  return (
    <MainDiv>
      <Wrapper>
        <NavGridContainer>
          <NavUl>
            <NavGridItem>
              <Link to="/">
                <ProfileCardIcon />
                <span>Perfil</span>
              </Link>
            </NavGridItem>
            <NavGridItem>
              <a href={cv} title="Descargar CV" download>
                <CurriculumIcon />
                <span>Curriculum</span>
              </a>
            </NavGridItem>
            <NavGridItem>
              <Link to="/projects">
                <ProjectIcon />
                <span>Projectos</span>
              </Link>
            </NavGridItem>
            <NavGridItem>
              <a
                href="https://github.com/Chazaarg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
                <span>Github</span>
              </a>
            </NavGridItem>
            <NavGridItem>
              <Link to="/contact">
                <ContactIcon />
                <span>Contacto</span>
              </Link>
            </NavGridItem>
          </NavUl>
        </NavGridContainer>
      </Wrapper>
      <ProfileCard>
        <Profilediv>
          <ImageCard />
          <ProfileImage alt="banner">
            <img src={patricio} alt="foto" width="100%" height="100%" />
          </ProfileImage>
          <ProfileTitle>Patricio Chazarreta</ProfileTitle>
          <ProfileSubTitle>Programador Web</ProfileSubTitle>
          <SocialDiv>
            <small>Chazarreta.Patricio@gmail.com</small>
          </SocialDiv>
        </Profilediv>
      </ProfileCard>
    </MainDiv>
  );
};

export default Header;
