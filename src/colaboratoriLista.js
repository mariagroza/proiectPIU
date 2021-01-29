import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Colaborator from "./colaborator";

const ColaboratoriLista = (props) => {
  const { colaborator, stergeCol } = props;
  const lista = colaborator.map((item) => (
    <Colaborator
      name={item.name}
      email={item.email}
      phone={item.phone}
      address={item.address}
      id={item.id}
      key={item.id}
      stergeCol={stergeCol}
    />
  ));

  const stil = {
    h2: { textAlign: "center" }
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Colaboratorii nostri
      </h2>
      <div>{lista}</div>
    </>
  );
};

export default ColaboratoriLista;
