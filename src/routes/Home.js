import React from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import notes from "../notes";
import { Button } from "react-bootstrap";
import messages from "../constants/messages";
import useArray from "../hooks/useArray";

const reactSwal = withReactContent(swal);

export default function Home() {
  const [notesArray, setNotesArray] = useArray(notes);

  const handleClick = (event) => {
    reactSwal.fire(messages.noteinfo).then(res => {
      const [title, body] = res.value
      if(title){
        const note = {
          key: notes.length+1,
          title: title,
          desc: body
        }
        setNotesArray(note, notesArray.length)
      }
      else{
        reactSwal.fire(messages.nullinfo)
      }
    }).catch(err => {
      console.log(err)
    });
  };
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {notesArray.map((note) => (
            <Note key={note.key} title={note.title} desc={note.content} />
          ))}
          <Col lg={"3"}>
            <Container className="btn-container">
              <Button className="add-btn" onClick={handleClick}>
                <span>+</span>
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
