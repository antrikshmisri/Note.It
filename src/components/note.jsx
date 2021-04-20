import React from "react";
import { Col , Container } from "react-bootstrap";
function Note(props) {
  return (
    <Col lg={"4"}>
      <Container className="note">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </Container>
    </Col>
  );
}

export default Note;
