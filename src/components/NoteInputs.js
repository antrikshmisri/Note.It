import TextField from "../components/TextField";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RepoInputs = () => {
  return (
    <Container>
      <Row className="inputs">
        <Col md={"12"} className="mb-3">
          <TextField isRequired={true} placeholder="TITLE" name="title" />
        </Col>
        <Col md={"12"}>
          <textarea placeholder="BODY" name="body" />
        </Col>
      </Row>
    </Container>
  );
};

export default RepoInputs;
