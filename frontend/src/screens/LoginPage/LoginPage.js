import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';


const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error,setError] = useState(false);
    const [loading, setLoading]= useState (false);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
      };


  return (

// Imported from react bootstrap

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default LoginPage;