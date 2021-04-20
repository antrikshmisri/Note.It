import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import line from "../assets/imgs/line.svg";
import note from "../assets/imgs/note.svg";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithGoogle } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

export default function Landing() {
  const [redirect, setRedirect] = useState(null);
  const user = useContext(AuthContext);
  const history = useHistory()

  useEffect(() => {
    if (user) {
      setRedirect("/home");
    }
  }, [user]);

  if (redirect) {
    history.push(redirect)
  }

  const goToLink = (link) => {
    window.location.href = link;
  };
  return (
    <>
      <Container fluid className="landing-container">
        <Row>
          <img className="svg" src={note} alt="note" />
          <Col lg={"12"} className="text-center mb-5 title-div">
            <h1 className="title">KEEPER - JS</h1>
            <img className="line" src={line} alt="line" />
          </Col>
          <Col lg={"12"} className="center">
            <Container className="center">
              <Row>
                <Col lg={"6"} className="center">
                  <Button onClick={signInWithGoogle}>
                    <FontAwesomeIcon icon={["fab", "google"]} /> Sign-In
                  </Button>
                </Col>
                <Col lg={"6"} className="center">
                  <Button>
                    <FontAwesomeIcon icon={["fab", "github"]} /> Sign-In
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={"12"} className="links">
            <Button
              className="add-btn"
              onClick={(e) => {
                goToLink("https://github.com/antrikshmisri/Keeper-ReactJS");
              }}
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Button>
            <Button
              className="add-btn"
              onClick={(e) => {
                goToLink(
                  "https://www.linkedin.com/in/antriksh-misri-b631361a1/"
                );
              }}
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Button>
            <Button
              className="add-btn"
              onClick={(e) => {
                goToLink("https://www.instagram.com/antrikshmisri/?hl=en");
              }}
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
