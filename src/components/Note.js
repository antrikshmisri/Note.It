import React from "react";
import { Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Note(props) {
  return (
    <Col lg={"4"}>
      <Container className="note px-0 py-0">
        <div className="note-title">
          <h1>{props.title}</h1>
        </div>
        <p className="mx-2 my-2">{props.desc}</p>
        <Button className="edit-btn no-anim">
          <span>
            <FontAwesomeIcon icon="edit" size="sm" />
          </span>
        </Button>
      </Container>
    </Col>
  );
}

export default Note;
