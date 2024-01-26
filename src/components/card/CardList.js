import React from "react";
import Card from "./Card";
import "./Card.css";

import brise from "../../images/card-brise.png";
import caramanchao from "../../images/card-caramanchao.png";
import deck from "../../images/card-deck.png";
import sauna from "../../images/card-sauna.png";

const CardList = () => {
  const cardsData = [
    {
      img: brise,
      linkImg:
        "https://www.google.com/search?sca_esv=601160025&rlz=1C1ONGR_pt-PTBR1080BR1080&sxsrf=ACQVn0_q8L1JagTMVFcXrV_vMdiV1zGRNg:1706126447420&q=brise&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjum9ym6PaDAxW4LrkGHW8dD2UQ0pQJegQIDRAB&biw=1920&bih=945&dpr=1",
      title: "Brise",
      text: "Estrutura de madeira ou concreto que serve para proteger do sol e do vento. Pode ser colocado na fachada de uma casa ou em uma área externa, como uma piscina.",
      linkWiki: "https://pt.wikipedia.org/wiki/Brise-soleil",
    },
    {
      img: caramanchao,
      linkImg:
        "https://www.google.com/search?sca_esv=601160025&rlz=1C1ONGR_pt-PTBR1080BR1080&sxsrf=ACQVn0_W4BdzXzyGeh_Z4NIEb_4crA0TFA:1706126816446&q=caramanchao&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiP4dfW6faDAxW-AbkGHca_BpYQ0pQJegQIDRAB&biw=1920&bih=945&dpr=1",
      title: "Caramanchão",
      text: "Estrutura de madeira ou metal que serve de apoio para plantas trepadeiras. Pode ser colocado em uma área externa, como um jardim ou uma varanda.",
      linkWiki: "https://pt.wikipedia.org/wiki/Caramanch%C3%A3o",
    },
    {
      img: deck,
      linkImg:
        "https://www.google.com/search?q=deck&tbm=isch&ved=2ahUKEwjly7H-6faDAxV2E7kGHfGKC7YQ2-cCegQIABAA&oq=deck&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIICAAQgAQQsQMyDQgAEIAEEIoFEEMQsQMyCggAEIAEEIoFEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoGCAAQBxAeUKQIWKQIYJIKaABwAHgAgAF1iAHlAZIBAzAuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=M26xZaXmKvam5OUP8ZWusAs&bih=945&biw=1920&rlz=1C1ONGR_pt-PTBR1080BR1080",
      title: "Deck",
      text: "Estrutura de madeira ou outro material que fica ao nível do solo, geralmente em uma área externa. Usado como área de lazer, espaço para relaxar ou fazer refeições.",
      linkWiki: "https://pt.wikipedia.org/wiki/Deque_(constru%C3%A7%C3%A3o)",
    },
    {
      img: sauna,
      linkImg:
        "https://www.google.com/search?sca_esv=601160025&rlz=1C1ONGR_pt-PTBR1080BR1080&sxsrf=ACQVn09zeOkPRX-i6xiH_xp9bFeqdKFFPw:1706126993683&q=sauna&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiuvpmr6vaDAxW4KLkGHY_gAo0Q0pQJegQIDBAB&biw=1920&bih=945&dpr=1",
      title: "Sauna",
      text: "Ambiente fechado que é aquecido a altas temperaturas. É usado para fins terapêuticos ou recreativos. Pode ser instalado em uma casa ou em um espaço comercial.",
      linkWiki: "https://pt.wikipedia.org/wiki/Sauna",
    },
  ];

  return (
    <div className="card">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          linkImg={card.linkImg}
          title={card.title}
          text={card.text}
          linkWiki={card.linkWiki}
        />
      ))}
    </div>
  );
};

export default CardList;
