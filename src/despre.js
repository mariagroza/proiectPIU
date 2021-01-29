import React from "react";
import Media from "react-bootstrap/Media";

const DesprePage = () => {
  const src = "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg";
  return (
    <Media>
      <img className="mr-3" src={src} alt="Generic placeholder" />
      <Media.Body>
        <h3> Despre noi: </h3>
        <p>
          Firma noastra a fost infiintata in anul 2018 având ca obiect principal
          de activitate inchirierea de vehicule, atat persoanelor fizice, cat si
          juridice. In prezent avem sediul principal in localitatea Cluj-Napoca
          si in aceasta locatie dispunem de 3 masini pentru categoria B care pot
          fi inchiriate.
        </p>
      </Media.Body>
    </Media>
  );
};

export default DesprePage;
