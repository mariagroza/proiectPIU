import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularDateMasini = (props) => {
  const [startDay, setStartDay] = useState("");
  const [daysNo, setDaysNo] = useState("");
  const [endDay, setEndDay] = useState("");
  const [clientNo, setClientNo] = useState("");
  const [description, setDescription] = useState("");

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const detalii = {
      startDay,
      daysNo,
      endDay,
      clientNo,
      description
    };

    props.transmit(detalii);
    setStartDay("");
    setDaysNo("");
    setEndDay("");
    setClientNo("");
    setDescription("");
  };

  const style = {
    marginTop: "2rem",
    backgroundColor: "#ddd",
    padding: "20px",
    marginBottom: "2rem",
    width: "675px"
  };

  return (
    <>
      <h4 className="mt-4" style={style.h2}>
        Adauga detalii inchiriere
      </h4>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Ziua inchirierii: </Form.Label>
          <Form.Control
            type="text"
            value={startDay}
            onChange={(e) => setStartDay(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Numar de zile: </Form.Label>
          <Form.Control
            type="text"
            value={daysNo}
            onChange={(e) => setDaysNo(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Ziua predarii: </Form.Label>
          <Form.Control
            type="text"
            value={endDay}
            onChange={(e) => setEndDay(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Numar client: </Form.Label>
          <Form.Control
            type="text"
            value={clientNo}
            onChange={(e) => setClientNo(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Adresa: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Trimite detalii
        </Button>
      </Form>
    </>
  );
};

export default FormularDateMasini;
