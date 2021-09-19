import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import note from "../assets/imgs/note.svg";
import line from "../assets/imgs/line.svg";

import { auth, googleProvider, firestore } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  selectUser,
} from "../features/userSlice";

export default function Landing() {
  const [redirect, setRedirect] = useState(null);
  const [userNotes, setUserNotes] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();
  const usersRef = firestore.collection("users");

  useEffect(() => {
    if (user) {
      setRedirect("/home");
    }
  }, [user]);

  if (redirect) {
    history.push(redirect);
  }

  const goToLink = (link) => {
    window.location.href = link;
  };

  const handleSignIn = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      const uid = res.user.uid;

      usersRef.doc(uid).get()
      .then((snapshot) => {
        if(snapshot.exists){
          usersRef.doc(uid).onSnapshot(doc => {
            setUserNotes(doc.data().notes);
          })
        }
        else{
          usersRef.doc(uid).set({
            name: res.user.displayName,
            email: res.user.email,
            notes: userNotes,
          })
        }
      })

      dispatch(
        setUser({
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
        })
      );
    });
  };
  return (
    <>
      <Container fluid className="landing-container">
        <Row>
          <Col lg={"12"} className="text-center mb-3">
            <img className="svg" src={note} alt="note" />
          </Col>
          <Col lg={"12"} className="text-center title-div">
            <h1 className="title">NOTE.IT</h1>
          </Col>
          <Col lg={"12"} className="text-center title-div">
            <img className="svg xl" src={line} alt="note" />
          </Col>
          <Col lg={"12"} className="center mt-5">
            <Container className="center btns">
              <Row>
                <Col lg={"6"} className="center">
                  <Button onClick={handleSignIn}>
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
          <Col lg={"12"} className="links mb-2">
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
