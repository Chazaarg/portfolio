import React from "react";
import styled from "styled-components";
import { Contentdiv, TitleDiv, Row, Col, TextBox } from "./styles/commonstyle";
import axios from "axios";
import Alert from "./Alert";

import { Send } from "styled-icons/boxicons-solid/Send";

const getIcon = component => {
  return styled(component)`
    width: 25px;
    height: 25px;
    font-size: 20px;
    color: #171717;
    line-height: 40px;
    display: inline-block;
    border-radius: 1px;
    -webkit-border-radius: 1px;
  `;
};
const SendIcon = getIcon(Send);

const Form = styled.form``;

const Input = styled.input`
  margin: auto;
  display: block;
  width:60%
  height: calc(2.25rem + 2px);
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #111;
  letter-spacing: 1px;
  margin-bottom:1rem;
  font-family: "Lato";

`;
const Textarea = styled.textarea`
  margin: auto;
  display: block;
  height: auto;
  width: 80%;
  padding: 0.375rem 0.75rem;
  font-family: "Lato";
  font-size: 1rem;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #111;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  resize: none;
`;

const Button = styled.button`
  color: #171717;
  background: rgba(46, 144, 202, 0.4);
  margin-top: 15px;
  height: 34px;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`;
const Span = styled.span`
  display: block;
  margin-top: 10px;
  font: 300 14px "Lato", sans-serif;
  letter-spacing: 2px;
`;
const ButtonDiv = styled.div`
  width: 100%;
  height: 34px;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translate3d(0px, -29px, 0px);
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0 auto;
  font: 300 1.4rem "Oswald", sans-serif;
  letter-spacing: 2px;
  color: #111;
`;
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.loadingContainer = React.createRef();
    this.state = {
      name: "",
      email: "",
      message: "",
      payload: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const mail = {
      name,
      email,
      message
    };

    axios
      .post("https://pastock.herokuapp.com/api/contact", mail)
      .then(res => this.setState({ payload: res.data }))
      .catch(res => this.setState({ payload: res.response.data }));

    //Luego de unos segundos borro el mensaje
    setTimeout(() => {
      this.setState({ payload: "" });
    }, 10000);
  };

  componentDidMount() {
    this.loadingContainer.focus();
  }
  render() {
    const { name, email, message, payload } = this.state;
    return (
      <React.Fragment>
        <Contentdiv
          ref={loadingContainer => {
            this.loadingContainer = loadingContainer;
          }}
        >
          <TitleDiv>Contacto</TitleDiv>

          <Col>
            <TextBox>
              <H1>¡Enviame un mail!</H1>
            </TextBox>
          </Col>
          <Form onSubmit={this.onSubmit} noValidate>
            <Row>
              <Input
                className="contact"
                type="text"
                placeholder="Nombre..."
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </Row>
            <Row>
              <Input
                className="contact"
                type="text"
                placeholder="Email..."
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </Row>
            <Row>
              <Textarea
                className="contact"
                type="text"
                placeholder="Mensaje..."
                name="message"
                value={message}
                onChange={this.onChange}
                rows="10"
              />
            </Row>
            <Row>
              <Button type="submit" id="submit" value="ENVIAR">
                <ButtonDiv>
                  <SendIcon />
                  <Span>
                    <strong>Enviar</strong>
                  </Span>
                </ButtonDiv>
              </Button>
            </Row>
          </Form>
          {payload.message ? (
            <Alert
              message={payload.message}
              errors={payload.errors}
              messageType={payload.messageType}
            />
          ) : null}
        </Contentdiv>
      </React.Fragment>
    );
  }
}
