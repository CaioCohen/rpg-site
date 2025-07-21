import React from 'react';
import { useData } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const Campanhas = () => {
  const { data, loading, error } = useData();
  const navigate = useNavigate();

  const handleSelect = (campanhaSelecionada) => {
    sessionStorage.setItem("campanhaSelecionada", campanhaSelecionada);
    navigate("/");
  };

  if (loading) return <p>Carregando campanhas...</p>;
  if (error) return <p>Erro ao carregar dados: {error}</p>;
  if (!data) return <p>Nenhuma campanha carregada.</p>;

  return (
    <div>
      <h2>Selecione uma Campanha</h2>
      <ul>
        {data.map((item) => (
          <li key={item.nome}>
            <button onClick={() => handleSelect(item.nome)}>
              {item.nome}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Campanhas;
