import React from "react";
import { Col , Container } from "react-bootstrap";
function Note(props) {
  return (
    <Col lg={"4"}>
      <Container className="note px-0 py-0">
        <div className="note-title">
          <h1>{props.title}</h1>
        </div>
        <p className="mx-2 my-2">{props.desc}</p>
      </Container>
    </Col>
  );
}

export default Note;
