import React, { useState } from 'react';
import './CombatGrid.css';

export default function CombatGrid({ dados, setDados }) {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (nome, field, value) => {
    setInputs(prev => ({
      ...prev,
      [`${nome}-${field}`]: parseInt(value) || 0
    }));
  };

  const handleApply = (nome, field) => {
    const key = `${nome}-${field}`;
    const valor = inputs[key] || 0;
    const atualizados = dados.map(p => {
      if (p.nome === nome) {
        return {
          ...p,
          [field]: p[field] + valor
        };
      }
      return p;
    });

    setDados(atualizados);
    setInputs(prev => ({ ...prev, [key]: 0 }));
  };

  const handleExcluir = (nome) => {
    const atualizados = dados.filter(p => p.nome !== nome);
    setDados(atualizados);
  };

  const dadosOrdenados = [...dados].sort((a, b) => b.iniciativa - a.iniciativa);

  return (
    <div className="combat-grid-container">
      <table className="combat-grid">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Iniciativa</th>
            <th>PV</th>
            <th>Dano</th>
            <th>PV Temp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dadosOrdenados.map((personagem) => {
            const { nome, iniciativa, pv, dano, pvTemp } = personagem;
            const critico = dano >= pv;
            const alerta = dano >= pv * 0.5;

            return (
              <tr key={nome} className={critico ? "critico" : alerta ? "alerta" : ""}>
                <td>{nome}</td>
                <td>{iniciativa}</td>
                <td>{pv}</td>

                <td>
                  {dano}
                  <div className="inline-edit">
                    <input
                      type="number"
                      value={inputs[`${nome}-dano`] || ''}
                      onChange={e => handleInputChange(nome, 'dano', e.target.value)}
                    />
                    <button onClick={() => handleApply(nome, 'dano')}>+</button>
                  </div>
                </td>

                <td>
                  {pvTemp}
                  <div className="inline-edit">
                    <input
                      type="number"
                      value={inputs[`${nome}-pvTemp`] || ''}
                      onChange={e => handleInputChange(nome, 'pvTemp', e.target.value)}
                    />
                    <button onClick={() => handleApply(nome, 'pvTemp')}>+</button>
                  </div>
                </td>

                <td>
                  <button onClick={() => handleExcluir(nome)} title="Remover">🗑</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

