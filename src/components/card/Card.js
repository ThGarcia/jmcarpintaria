import React from "react";
import "./Card.css";

const Card = ({ img, linkImg, title, text, linkWiki }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <img src={img} className="card-bg" alt={`imagem referência ${title}`} />
        <div className="card-item">
          <a href={linkImg} target="_blank" rel="noreferrer">
            <img
              src={img}
              className="card-img"
              alt={`imagem referência ${title}`}
            />
          </a>
          <div className="card-info">
            <span className="card-title">{title}</span>
            <a href={linkWiki} target="_blank" rel="noreferrer">
              <p className="card-text">{text}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
