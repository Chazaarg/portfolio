import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AlertDiv = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
`;

const Alert = props => {
  let { message, messageType, errors } = props;
  let inputs = document.getElementsByClassName("contact");
  inputs = Array.from(inputs);
  inputs.forEach((input, idx) => {
    //Primero me aseguro de eliminar errores y mensajes anteriores del DOM.
    if (input.classList.contains("is-invalid")) {
      input.classList.remove("is-invalid");
      if (input.classList.contains("contact")) {
        const textDanger = Array.from(
          document.querySelectorAll(".text-danger")
        );
        textDanger.forEach(text => {
          if (text) {
            text.parentElement.removeChild(text);
          }
        });
      } else {
        input.parentElement.removeChild(
          input.parentElement.getElementsByClassName("text-danger")[0]
        );
      }
    }
  });
  //Si recibo un array con los errores específicos para cada input...
  if (errors) {
    //Si hay errores en contact...

    inputs.forEach((input, idx) => {
      //Creo el elemento small que contendrá el mensaje de error.
      const small = document.createElement("small");
      small.classList.add("text-danger");
      small.style.marginTop = "1rem";

      errors.forEach(error => {
        if (error.value === input.name || error.value === input.id) {
          input.classList.add("is-invalid");
          small.innerHTML = error.message;
          input.parentElement.insertBefore(small, input);
        }
      });
    });
  }

  if (messageType === "success") {
    return <AlertDiv>{message}</AlertDiv>;
  } else {
    return null;
  }
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired
};

export default Alert;
