import React, { Component } from "react";
import styled from "styled-components";
import { Contentdiv, TitleDiv, Row, Col } from "./styles/commonstyle";
import pastock from "../images/pastock.jpg";

const Pastock = styled.img`
  width: 100%;
  height: auto;
`;

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
const Hr = styled.hr`
  margin: 2.5rem 0 2.5rem 0;
`;

const A = styled.a`
  text-decoration: none;
  color: blue;
  font-style: italic;
`;

export default class Projects extends Component {
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
          <TitleDiv>Pastock</TitleDiv>
          <Row>
            <Col>
              <TextBox>
                <p>Sistema de ventas y administración de stock. </p>

                <A href="https://pastock.herokuapp.com" target="_blank">
                  pastock.herokuapp.com
                </A>
              </TextBox>
            </Col>

            <MediaRow>
              <MediaCol style={{ padding: "0" }}>
                <Pastock src={pastock} alt="pastock" />
              </MediaCol>
              <MediaCol>
                <SkillItemDiv>
                  <SkillItemName>
                    Características:
                    <p>
                      <strong>&middot;</strong> Symfony 4 RESTFUL API usada en
                      el back-end.
                    </p>
                    <p>
                      <strong>&middot;</strong> ReactJS usado en el Front-End.
                    </p>
                    <p>
                      <strong>&middot;</strong> Deploy de la aplicación web en
                      Heroku.
                    </p>
                  </SkillItemName>
                </SkillItemDiv>
                <Hr />
                <SkillItemDiv>
                  <SkillItemName>
                    Enlaces:
                    <p>
                      <strong>&middot;</strong> Código de la aplicación:
                    </p>
                    <p>https://github.com/Chazaarg/paStock</p>
                  </SkillItemName>
                </SkillItemDiv>
              </MediaCol>
            </MediaRow>
          </Row>
        </Contentdiv>
      </React.Fragment>
    );
  }
}
