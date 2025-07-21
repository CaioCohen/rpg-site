import PageWrapper from "../../components/layout/PageWrapper";
import { useData } from "../../context/DataProvider";
import CardDetalhado from "../../components/CardDetalhado";
import "./npcs.css";
import { useState } from "react";

export default function NPCs() {

  const { data, campanhaSelecionada } = useData();
  const [filtroTipo, setFiltroTipo] = useState(1);


  if (!data || !campanhaSelecionada) {
    return (
      <PageWrapper>
        <p>Carregando...</p>
      </PageWrapper>
    );
  }

  const filterData = () => {
    return data.filter(item => item.nome === campanhaSelecionada)[0];
  }

  const filteredData = filterData();
  const npcs = filteredData?.info?.npcs || [];
  const npcsFiltrados = filtroTipo ? npcs.filter(npc => npc.tipo === filtroTipo) : npcs;

  return (
    <PageWrapper>
      <h1>NPCs</h1>

      <div className="npcs-filtros">
        <button className={filtroTipo === null ? "ativo" : ""} onClick={() => setFiltroTipo(null)}>Todos</button>
        <button className={filtroTipo === 1 ? "ativo" : ""} onClick={() => setFiltroTipo(1)}>Primários</button>
        <button className={filtroTipo === 2 ? "ativo" : ""} onClick={() => setFiltroTipo(2)}>Secundários</button>
        <button className={filtroTipo === 3 ? "ativo" : ""} onClick={() => setFiltroTipo(3)}>Aleatórios</button>
      </div>

      <div className="npcs-grid">
        {npcsFiltrados.map(npc => (
          <CardDetalhado
            key={npc.nome}
            titulo={npc.nome}
            descricao={npc.descricao}
            urlImagem={npc.urlImagem}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
