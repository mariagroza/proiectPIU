import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Detalii from "./detalii";

const DetaliiLista = (props) => {
  const { detalii, stergeDetalii } = props;
  const lista = detalii.map((item) => (
    <Detalii
      startDay={item.startDay}
      daysNo={item.daysNo}
      endDay={item.endDay}
      clientNo={item.clientNo}
      description={item.description}
      id={item.id}
      key={item.id}
      stergeDetalii={stergeDetalii}
    />
  ));

  const stil = {
    h2: { textAlign: "center" }
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Detalii inchiriere
      </h2>
      <div>{lista}</div>
    </>
  );
};

export default DetaliiLista;
