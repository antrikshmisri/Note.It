import React, { useState } from "react";

import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import notes from "../notes";
import messages from "../constants/messages";
import useArray from "../hooks/useArray";
import Header from "../components/Header";
import Note from "../components/Note";
import { Canvas } from "../components/Canvas";
import { CanvasProvider } from "../contexts/CanvasContext";

const reactSwal = withReactContent(swal);

export default function Home() {
  const [notesArray, setNotesArray] = useArray(notes);
  const [subButtonVisibility, setSubButtonVisibility] = useState(false);

  const handleTextNoteClick = (event) => {
    reactSwal
      .fire(messages.noteinfo)
      .then((res) => {
        const [title, body] = res.value;
        if (title) {
          const note = {
            key: notes.length + 1,
            title: title,
            desc: body,
          };
          setNotesArray(note, notesArray.length);
        } else {
          reactSwal.fire(messages.nullinfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDoodleNoteClick = (event) => {
    reactSwal
      .fire({
        confirmButtonText: "Add",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        customClass: "doodle-modal",
        html: (
          <CanvasProvider>
            <Canvas />
          </CanvasProvider>
        ),
      })
      .then((res) => {
        console.log("worked");
      });
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {notesArray.map((note) => (
            <Note key={note.key} title={note.title} desc={note.desc} />
          ))}
          <Col lg={"4"} className="btn-container">
            <Container className="d-flex align-items-center" fluid>
              <Row>
                <Col xs={"3"}>
                  <Button
                    className="add-btn no-anim"
                    onClick={() => {
                      setSubButtonVisibility(!subButtonVisibility);
                    }}
                  >
                    <span>+</span>
                  </Button>
                </Col>
                {subButtonVisibility ? (
                  <Col xs={"9"} className="d-flex align-items-center">
                    <Button className="sub-btn mx-1" onClick={handleTextNoteClick}>
                      <span>Text</span>
                    </Button>
                    <Button className="sub-btn mx-1" onClick={handleDoodleNoteClick}>
                      <span>Doodle</span>
                    </Button>
                  </Col>
                ) : null}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
