import React, { useEffect } from 'react';
import { useData } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import './campanhas.css';
import PageWrapper from '../../components/layout/PageWrapper';
import CampanhaCard from '../../components/CampanhaCard';

const Campanhas = () => {
  const { data, loading, error } = useData();
  const navigate = useNavigate();

  const { setCampanhaSelecionada } = useData();

  const resetCampanhaSelecionada = () => {
    sessionStorage.removeItem("campanhaSelecionada");
    setCampanhaSelecionada(null);
  }

  useEffect(() => {
    resetCampanhaSelecionada();
  }, []);

  const handleSelect = (nomeCampanha) => {
    sessionStorage.setItem("campanhaSelecionada", nomeCampanha);
    setCampanhaSelecionada(nomeCampanha);
    navigate("/");
  };

  if (loading) return <p>Carregando campanhas...</p>;
  if (error) return <p>Erro ao carregar dados: {error}</p>;
  if (!data) return <p>Nenhuma campanha carregada.</p>;

  return (
    <PageWrapper>
      <h2>Selecione uma Campanha</h2>
      <div className="campanha-grid">
        {data.map((item) => (
          <CampanhaCard
            key={item.nome}
            nome={item.nome}
            urlImagem={item.info.urlImage}
            onClick={() => handleSelect(item.nome)}
          />
        ))}
      </div>
    </PageWrapper>

  );
};

export default Campanhas;
