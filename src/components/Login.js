import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

import { useState } from "react";
const Child = ({ data, onChildClick }) => {
  const handleChange = () => {
    let user = document.getElementById("user").value;
    let passwrd = document.getElementById("password").value;
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("password", passwrd);
    onChildClick(user, passwrd);
  };
  return (
    <Container>
      <div className="login">
        <Col md={4}>
          <img
            src="https://img.shaadi.com/imgs/logos/community/shaadi-v3.png"
            alt="shaadi"
          />
        </Col>
        <Col md={2} xs={0}>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control id="user" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit" onClick={handleChange}>
              Login
            </Button>
          </Form>
        </Col>
      </div>
    </Container>
  );
};
export default Child;
