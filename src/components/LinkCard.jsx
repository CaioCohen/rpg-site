import React from 'react';
import './LinkCard.css';

const LinkCard = ({ imagem, titulo, link, descricao }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link-card">
      <img src={imagem} alt={titulo} className="link-card-img" />
      <div className="link-card-content">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </a>
  );
};

export default LinkCard;
