import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCanvas } from "../contexts/CanvasContext";
import TextField from "./TextField";
import { AiFillTool, AiOutlineClear } from "react-icons/ai";

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          <Container fluid >
            <Row >
              <Col lg={"2"}>
                <Button className="sub-btn mb-1">
                  <AiFillTool />
                </Button>
              </Col>
              <Col lg={"2"}>
                <Button className="sub-btn mb-1" onClick={clearCanvas}>
                  <AiOutlineClear />
                </Button>
              </Col>
              <Col lg={"8"}>
                <Button className="sub-btn mb-1">
                  <span>Convert To Text Note</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
