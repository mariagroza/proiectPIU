import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularCol = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const stil = {
    h2: { textAlign: "center" }
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const colaborator = { name, email, phone, address };
    props.transmit(colaborator);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Colaborator nou
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Nume:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>email:</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Telefon: </Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Adresa: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Trimite
        </Button>
      </Form>
    </>
  );
};

export default FormularCol;
