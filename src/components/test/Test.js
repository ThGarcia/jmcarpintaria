import React from "react";
import "./Test.css";

import img from "../../images/info.png";

const Test = () => {
  return (
    <div className="test">
      <img src={img} className="test-img" alt="background sobre" />
      <p>
        A carpintaria, antiga e nobre, é essencial na construção de estruturas
        duráveis, refletindo maestria ao unir tradição e inovação. A
        versatilidade dos carpinteiros se destaca em ambientes funcionais e
        esteticamente belos, desde móveis até elementos arquitetônicos. Sua
        importância se estende a espaços externos, onde estruturas como
        caramanchões e decks enriquecem a experiência. Com raízes históricas
        profundas e simbolizada por Jesus Cristo como o "Carpinteiro de Nazaré",
        a carpintaria transcende as eras, esculpindo a história e identidade de
        comunidades ao redor do mundo.
      </p>
    </div>
  );
};

export default Test;
