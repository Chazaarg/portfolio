import React from "react";
import styled from "styled-components";
import { Contentdiv, TitleDiv, Row, Col } from "./styles/commonstyle";

const TextBox = styled.div`
  box-sizing: border-box;
  margin: 0 p {
    overflow-wrap: break-word;
    font-size: 14px;
    line-height: 1.6;
    padding: 0;

    box-sizing: border-box;
  }
`;

const InfoList = styled.div`
  box-sizing: border-box;

  ul {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;

    li {
      display: inline-block;
      width: 48%;
      line-height: 1.6;
      font-size: 12px strong {
        display: inline-block;
        font-size: 12px;
        color: #171717;
        font-weight: 550;
        text-transform: uppercase;
      }
    }
  }
`;

const MediaRow = styled.div`
  margin: 0 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: radial-gradient(
      ellipse at top,
      rgba(197, 202, 213, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );

    @media (max-width: 1024px) {
      background: none;
    }
  }

  &::after {
    margin: 0 0 0 -1px;
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: radial-gradient(
      ellipse at top,
      rgba(197, 202, 213, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );

    @media (max-width: 1024px) {
      background: none;
    }
  }
`;

const MediaCol = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }
  padding: 20px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    background: none;
    padding: 0px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );

    @media (max-width: 1024px) {
      background: none;
    }
  }
`;

const SkillItemDiv = styled.div`
  text-align: left;
`;

const SkillItemName = styled.div`
  margin: 15px 0 10px 0;
  font-size: 12px;
  color: #171717;
  font-weight: 550;
  text-transform: uppercase;
  p {
    font-size: 14px;
    line-height: 1.6;
    padding: 0;
    font-weight: 500;
    text-transform: none;
  }
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.loadingContainer = React.createRef();
  }

  componentDidMount() {
    this.loadingContainer.focus();
  }

  render() {
    return (
      <React.Fragment>
        <Contentdiv
          ref={loadingContainer => {
            this.loadingContainer = loadingContainer;
          }}
        >
          <TitleDiv>Perfil</TitleDiv>
          <Row>
            <Col style={{ width: "auto" }}>
              <TextBox>
                <p>
                  Busco desarrollarme en un ambiente de trabajo que me lleve a
                  nuevas fronteras de conocimiento y aprendizaje para un mejor
                  desarrollo en mi vida laboral.
                </p>
              </TextBox>

              <InfoList>
                <ul>
                  <li>
                    <strong>Edad : </strong> 18
                  </li>
                  <li>
                    <strong>Idiomas : </strong> Inglés
                  </li>
                  <li>
                    <strong>Email : </strong> chazarreta.patricio@gmail.com
                  </li>
                  <li>
                    <strong>Teléfono : </strong> 1123146048
                  </li>
                  <li>
                    <strong>Dirección: </strong> Castelar, Buenos Aires
                    Argentina
                  </li>
                </ul>
              </InfoList>
            </Col>
          </Row>
        </Contentdiv>
        <Contentdiv>
          <TitleDiv>Habilidades</TitleDiv>
          <MediaRow>
            <MediaCol>
              <SkillItemDiv>
                <SkillItemName>
                  Front-End:
                  <p>- HTML/CSS, Javascript.</p>
                  <p>- Bootstrap 4.</p>
                  <p>- ReactJS.</p>
                </SkillItemName>
              </SkillItemDiv>

              <SkillItemDiv>
                <SkillItemName>
                  Back-End:
                  <p>- Desarrolo de RESTFUL API modernas con PHP.</p>
                  <p>- Symfony 4.</p>
                </SkillItemName>
              </SkillItemDiv>
            </MediaCol>

            <MediaCol>
              <SkillItemDiv>
                <SkillItemName>
                  Base de datos
                  <p>- MYSQL</p>
                </SkillItemName>
              </SkillItemDiv>

              <SkillItemDiv>
                <SkillItemName>
                  Herramientas
                  <p>- Git Hub, Apache, Visual Studio Code</p>
                </SkillItemName>
              </SkillItemDiv>
            </MediaCol>
          </MediaRow>
        </Contentdiv>
      </React.Fragment>
    );
  }
}

export default Profile;
