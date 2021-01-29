import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import FormularDateMas from "./formularDateMas";
import DetaliiLista from "./detaliiLista";

let listaDateMas11 = [
  {
    startDay: "07:00",
    daysNo: "14",
    endDay: "19:00",
    clientNo: "125",
    id: 1,
    description: "Masina are o zgarietura, portiera fatabn stanga"
  }
];

let listaDateMas22 = [
  {
    startHour: "08.00",
    daysNo: "7",
    endHour: "118:00",
    clientNo: "133",
    id: 2,
    description: "Masina se preda cu rezervorul plin"
  }
];

let listaDateMas33 = [
  {
    startHour: "13:00",
    daysNo: "30",
    endHour: "20:00",
    clientNo: "142",
    id: 3,
    description: "-"
  }
];

const Masina = (props) => {
  const { model, year, fuelType, transmissionType, noPlaces, id } = props;
  const [listaDateMas2, setListaDateMas2] = useState([]);

  const stergeDetalii = (id) => {
    const listaNouaDateMas = listaDateMas2.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setListaDateMas2(listaNouaDateMas);
    console.log("Lista noua: " + listaDateMas2);
  };

  const adaugaDateMas = (mas) => {
    mas.id = listaDateMas2.length + 1;
    setListaDateMas2([...listaDateMas2, mas]);
  };

  const style = {
    marginTop: 20,
    paddingBottom: 15,
    borderBottom: "2px solid black"
  };

  return (
    <Container>
      <Row style={style}>
        <Col sm={8}>
          <h4>
            Model: {model} - {year}
          </h4>
          <h6>Tip carburant: {fuelType}</h6>
          <h6>Tip cutie viteza: {transmissionType}</h6>
          <h6>Numar locuri: {noPlaces}</h6>
        </Col>
        <Col sm={4}>
          <h6> Localitatea inchirierii: </h6>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" value>
              Selecteaza orasul
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Bucuresti</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cluj-Napoca</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Constanta</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Iasi</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Mures</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Satu Mare</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Timisoara</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h6> Localitatea predarii: </h6>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" value>
              Selecteaza orasul
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="bucuresti">Bucuresti</Dropdown.Item>
              <Dropdown.Item value="cluj-napoca">Cluj-Napoca</Dropdown.Item>
              <Dropdown.Item value="constanta">Constanta</Dropdown.Item>
              <Dropdown.Item value="iasi">Iasi</Dropdown.Item>
              <Dropdown.Item value="mures">Mures</Dropdown.Item>
              <Dropdown.Item value="satumare">Satu Mare</Dropdown.Item>
              <Dropdown.Item value="timisoara">Timisoara</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={8}>
          <DetaliiLista detalii={listaDateMas2} stergeDetalii={stergeDetalii} />
          <FormularDateMas transmit={adaugaDateMas} />
        </Col>
      </Row>
    </Container>
  );
};

export default Masina;
