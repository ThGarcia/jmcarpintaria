import React from "react";
import "./About.css";

import aboutBg from "../../images/about.png";
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <div className="about">
      <img className="about-bg" src={aboutBg} alt="imagem de fundo" />
      <img className="about-img" src={aboutImg} alt="imagem destaque" />
      <p className="about-text">
        <span>
          Bem-vindo à <i>JM Carpintaria</i>
        </span>
        <br></br>Onde a carpintaria é uma tradição de maestria e durabilidade.
        Especializados na criação de estruturas de madeira que resistem ao teste
        do tempo, nossa equipe une a rica herança da carpintaria com técnicas
        modernas. Construímos ambientes funcionais e inspiradores, transformando
        visões em realidade.
      </p>
    </div>
  );
};

export default About;
