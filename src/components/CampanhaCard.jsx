import React from 'react';
import './CampanhaCard.css';

const CampanhaCard = ({ nome, urlImagem, onClick }) => {
  return (
    <div className="campanha-card" onClick={onClick}>
      <img src={urlImagem} alt={nome} className="campanha-card-img" />
      <div className="campanha-card-title">
        {nome}
      </div>
    </div>
  );
};

export default CampanhaCard;
