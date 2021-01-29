import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import DateMasiniLista from "./dateMasiniLista";
import ColaboratoriLista from "./colaboratoriLista";
import FormularCol from "./formularCol";
import { Route, Link, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ErrorPage from "./errorPage";
import Contact from "./contact";
import Despre from "./despre";

const listaMasini = [
  {
    id: 1,
    model: "Skoda Octavia",
    year: "2015",
    fuelType: "Benzina",
    transmissionType: "Automata",
    noPlaces: "5"
  },
  {
    id: 2,
    model: "Smart for 2",
    year: "2018",
    fuelType: "Diesel",
    transmissionType: "Automata",
    noPlaces: "2"
  },
  {
    id: 3,
    model: "Volkswagen Touran",
    year: "2014",
    fuelType: "Benzina",
    transmissionType: "Manuala",
    noPlaces: "7+1"
  }
];

let listaColab = [
  {
    name: "Aeroportul Cluj-Napoca",
    email: "rentcaraeroportcluj@yahoo.com",
    phone: "0745236521",
    address: "str. Aurel Vlaicu, nr 5",
    id: 1
  },
  {
    name: "Autogara Timisoara",
    email: "rentcarautogaratimisoara@yahoo.com",
    phone: "0744336555",
    address: "str. Silviana, nr 33",
    id: 2
  },
  {
    name: "Gara Iasi",
    email: "rentcargaraiasi@yahoo.com",
    phone: "07454563211",
    address: "str. Mihai Eminescu, nr 45",
    id: 3
  }
];

let listaDateMas11 = [
  {
    startHour: "07:00",
    daysNo: "14",
    endHour: "19:00",
    clientNo: "125",
    id: 1,
    description: "Masina are o zgarietura, portiera fata stanga"
  }
];

export default function App() {
  const [listaCol, setListaCol] = useState([]);

  const stergeCol = (id) => {
    const listaNouaCol = listaCol.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setListaCol(listaNouaCol);
    console.log("Lista noua: " + listaCol);
  };

  const adaugaCol = (col) => {
    col.id = listaCol.length + 1;
    setListaCol([...listaCol, col]);
  };

  const style = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" }
  };

  return (
    <Container style={style.container}>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Homepage: Lista masini
            </Nav.Link>
            <Nav.Link as={Link} to="/formularCol">
              Formular colaboratori
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/despre">
              Despre noi
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <DateMasiniLista masina={listaMasini} />
        </Route>
        <Route path="/formularCol">
          <ColaboratoriLista colaborator={listaColab} stergeCol={stergeCol} />
          <ColaboratoriLista colaborator={listaCol} stergeCol={stergeCol} />
          <FormularCol transmit={adaugaCol} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/despre">
          <Despre />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Container>
  );
}
