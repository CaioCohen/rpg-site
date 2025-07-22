import React, { useState, useEffect } from 'react';
import './EditarModal.css';

export default function EditarModal({ show, onClose }) {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const carregado = JSON.parse(localStorage.getItem('listaConfigurada')) || [];
        setLista(carregado);
    }, [show]);

    const handleChange = (index, field, value) => {
        const novaLista = [...lista];
        novaLista[index][field] = field === "iniciativa" || field === "pv" ? parseInt(value) || 0 : value;
        setLista(novaLista);
    };

    const handleAddPersonagem = () => {
        setLista(prev => [...prev, { nome: '', pv: 0, iniciativa: 0, tipo: 'normal' }]);
    };

    const handleRemover = (index) => {
        const novaLista = lista.filter((_, i) => i !== index);
        setLista(novaLista);
    };

    const handleSalvar = () => {
        localStorage.setItem('listaConfigurada', JSON.stringify(lista));
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>Pré-configurar Iniciativas</h2>

                {lista.map((p, i) => (
                    <div key={i} className="personagem-config">
                        <div className="campo">
                            <label>Nome</label>
                            <input
                                placeholder="Nome"
                                value={p.nome}
                                onChange={e => handleChange(i, 'nome', e.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label>PV</label>
                            <input
                                type="number"
                                value={p.pv}
                                onChange={e => handleChange(i, 'pv', e.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label>Mod. Iniciativa</label>
                            <input
                                type="number"
                                value={p.iniciativa}
                                onChange={e => handleChange(i, 'iniciativa', e.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label>Tipo</label>
                            <select
                                value={p.tipo}
                                onChange={e => handleChange(i, 'tipo', e.target.value)}
                            >
                                <option value="normal">Normal</option>
                                <option value="vantagem">Vantagem</option>
                                <option value="desvantagem">Desvantagem</option>
                            </select>
                        </div>
                        <button onClick={() => handleRemover(i)} title="Remover">🗑</button>
                    </div>
                ))}

                <div className="modal-actions">
                    <button onClick={handleAddPersonagem}>+ Adicionar</button>
                    <button onClick={handleSalvar}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
