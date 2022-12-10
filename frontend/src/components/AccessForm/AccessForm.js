import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { getUserJSON, emptyUserJSON } from "../../helpers/UserDataFormatter";
import "./AccessForm.css";

const AccessForm = () => {
  const [userData, setUserData] = useState(emptyUserJSON);

  // Form Data References
  const fullNameRef = React.createRef();
  const phoneRef = React.createRef();
  const emailRef = React.createRef();
  const tokenRef = React.createRef();

  const handleFormInput = (event) => {
    event.preventDefault();

    // Collect data
    let userInput = {
      fullName: fullNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      token: tokenRef.current.value,
    };

    // Ask to convert userInput in a userJSON
    let userInfoJSON = getUserJSON(userInput);

    // If user input is invalid, return!
    if (!userInfoJSON) {
      console.log("Invalid input!");
      return;
    }

    // If user input is valid, update userData state
    console.log("Valid input!");
    if (userData === emptyUserJSON) {
      setUserData(userInfoJSON);
    }

    console.log(userData);
  };

  return (
    <div class="container-sm">
      <br />    
      <Form>
      <Form.Group class="mb-3">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" name="nombre" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Apellido paterno:</Form.Label>
        <Form.Control type="text" name="apellidoPaterno" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Apellido materno:</Form.Label>
        <Form.Control type="text" name="apellidoMaterno" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Fecha de nacimiento:</Form.Label>
        <Form.Control type="date" name="fechaNacimiento" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Calle:</Form.Label>
        <Form.Control type="text" name="calle" />
        <Form.Label>Número interior:</Form.Label>
        <Form.Control type="number" name="numeroInterior" />
        <Form.Label>Número exterior:</Form.Label>
        <Form.Control type="number" name="numeroExterior" />
        <Form.Label>Código postal:</Form.Label>
        <Form.Control type="text" name="codigoPostal" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Historial de alergias:</Form.Label>
        <Form.Control as="textarea" name="historialAlergias" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Form.Label>Información del seguro médico:</Form.Label>
        <Form.Control as="textarea" name="informacionSeguroMedico" />
      </Form.Group>
      
      <Form.Group class="mb-3">
        <Button type="submit" variant="primary" className="mt-3">
          Registrar
        </Button>
      </Form.Group>
    </Form>
    <br /> 
    </div>
  );
};

export default AccessForm;
