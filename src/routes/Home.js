import React, { useEffect, useContext, useState } from "react";
import Header from "../components/header";
import Note from "../components/note";
import swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import notes from "../notes";
import { Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect, useHistory } from "react-router-dom";

export default function Home() {
  const [title, setTitle] = useState("");
  const [redirect, setRedirect] = useState(null);
  const user = useContext(AuthContext);
  const history = useHistory()

  useEffect(() => {
    if (!user) {
      setRedirect("/");
    }
  }, [user]);
  if (redirect) {
    history.push(redirect)
  }
  const handleClick = (event) => {
    setTitle("This is title");
    swal.fire({
      title: { title },
      text: "Enter the note details",
      confirmButtonText: "Add",
    });
  };
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          {notes.map((note) => (
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
