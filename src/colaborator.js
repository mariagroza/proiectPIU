import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Colaborator = (props) => {
  const { name, email, phone, address, id, stergeCol } = props;

  const stil = {
    borderBottom: "2px solid black"
  };

  return (
    <Container stil={stil}>
      <Row style={stil}>
        <Col sm={9}>
          <h4>Nume: {name}</h4>
          <h5>email: {email} </h5>
          <h5>Telefon: {phone}</h5>
          <h5>Adresa: {address}</h5>
        </Col>
        <Col sm={3}>
          <Button variant="primary" onClick={() => stergeCol(id)}>
            Sterge Colaborator
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Colaborator;
