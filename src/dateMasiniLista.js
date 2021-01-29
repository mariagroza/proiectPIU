import React from "react";
import Masina from "./masina";
import { FaCarSide } from "react-icons/fa";

const DateMasiniLista = (props) => {
  const { masina, stergeDateMas } = props;
  const lista = masina.map((
    item //map: preia sirul de valori, pornind de la un sir dat
  ) => (
    <Masina
      model={item.model}
      year={item.year}
      fuelType={item.fuelType}
      transmissionType={item.transmissionType}
      noPlaces={item.noPlaces}
      startHour={item.startHour}
      daysNo={item.daysNo}
      endHour={item.endHour}
      clientNo={item.clientNo}
      description={item.description}
      id={item.id}
      key={item.id}
      stergeDateMas={stergeDateMas}
    />
  ));

  const style = {
    h2: { textAlign: "center", color: "black", backgroundColor: "#91DBD9" }
  };

  return (
    <>
      <h2 className="mt-4" style={style.h2}>
        <FaCarSide /> Masini inchiriate
      </h2>
      <div>{lista}</div>
    </>
  );
};

export default DateMasiniLista;
