import React from 'react';
import './CardDetalhado.css';

const CardDetalhado = ({ titulo, urlImagem, descricao }) => {
  return (
    <div className="card-detalhado">
      <img src={urlImagem} alt={titulo} className="card-detalhado-img" />
      <h3 className="card-detalhado-titulo">{titulo}</h3>
      <div className="card-detalhado-descricao">
        {descricao}
      </div>
    </div>
  );
};

export default CardDetalhado;
