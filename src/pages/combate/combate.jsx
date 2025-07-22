import React, { useState } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import AdicionarModal from './AdicionarModal';
import EditarModal from './EditarModal';
import './combate.css';
import CombatGrid from '../../components/CombatGrid';

export default function Combate() {
  const [combate, setCombate] = useState([]);
  const [showAdicionar, setShowAdicionar] = useState(false);
  const [showEditar, setShowEditar] = useState(false);

  const handleAdd = (personagem) => {
    setCombate(prev => [...prev, personagem]);
  };

  const handleReset = () => {
    setCombate([]);
  };

  const handleRolarIniciativas = () => {
    const configurados = JSON.parse(localStorage.getItem('listaConfigurada')) || [];

    const rolagem = configurados.map(p => {
      const roll = () => Math.floor(Math.random() * 20) + 1;
      let base = roll();
      if (p.tipo === 'vantagem') {
        base = Math.max(roll(), roll());
      } else if (p.tipo === 'desvantagem') {
        base = Math.min(roll(), roll());
      }
      return {
        nome: p.nome,
        iniciativa: base + p.iniciativa + (p.iniciativa/10),
        pv: p.pv,
        dano: 0,
        pvTemp: 0
      };
    });

    setCombate(rolagem);
  };

  return (
    <PageWrapper>
      <h1>Combate</h1>

      <CombatGrid dados={combate} setDados={setCombate}/>

      <div className="combate-botoes">
        <button onClick={() => setShowAdicionar(true)}>Adicionar</button>
        <button onClick={handleReset}>Resetar</button>
        <button onClick={handleRolarIniciativas}>Rolar Iniciativas</button>
        <button onClick={() => setShowEditar(true)}>Editar</button>
      </div>

      <AdicionarModal show={showAdicionar} onClose={() => setShowAdicionar(false)} onAdd={handleAdd} />
      <EditarModal show={showEditar} onClose={() => setShowEditar(false)} />
    </PageWrapper>
  );
}
