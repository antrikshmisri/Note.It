import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCanvas } from "../contexts/CanvasContext";
import TextField from "./TextField";

export const Canvas = () => {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={"12"} className="mb-2">
          <TextField name="title" placeholder="Title" isRequired={true} />
        </Col>
        <Col lg={"12"}>
          <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />
        </Col>
        <Col lg={"12"}>
          <Container>
            <Row>
              <Col lg={"2"}>
                <Button className="sub-btn">
                  <span>Tools</span>
                </Button>
              </Col>
              <Col lg={"2"}>
                <Button className="sub-btn" onClick={clearCanvas}>
                  <span>Clear</span>
                </Button>
              </Col>
              <Col lg={"6"}>
                <Button className="sub-btn">
                  <span>Convert To Text</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
