import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Detalii = (props) => {
  const {
    startDay,
    daysNo,
    endDay,
    clientNo,
    description,
    id,
    stergeDetalii
  } = props;

  const style = {
    borderBottom: "2px dotted #848484",
    marginTop: 20,
    paddingBottom: 15
  };

  const stil = {
    button: { marginTop: 50 }
  };

  return (
    <Container stil={style}>
      <Row style={style}>
        <Col sm={9}>
          <h4>Ziua inchirierii: {startDay}</h4>
          <h5>Numar de zile: {daysNo} </h5>
          <h5>Ziua predarii: {endDay}</h5>
          <h5>Numar client: {clientNo}</h5>
          <h5>Descriere: {description}</h5>
        </Col>
        <Col sm={3}>
          <Button
            style={stil.button}
            variant="primary"
            onClick={() => stergeDetalii(id)}
          >
            Sterge Detalii
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detalii;
