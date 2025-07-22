import React, { useState } from 'react';
import './AdicionarModal.css';

export default function AdicionarModal({ show, onClose, onAdd }) {
  const [form, setForm] = useState({
    nome: '',
    iniciativa: '',
    pv: '',
    dano: '',
    pvTemp: ''
  });

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    const parsed = {
      nome: form.nome,
      iniciativa: parseInt(form.iniciativa) || 0,
      pv: parseInt(form.pv) || 0,
      dano: parseInt(form.dano) || 0,
      pvTemp: parseInt(form.pvTemp) || 0
    };
    onAdd(parsed);
    setForm({ nome: '', iniciativa: '', pv: '', dano: '', pvTemp: '' });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Adicionar Personagem</h2>
        <div className="form-group">
          <label>Nome</label>
          <input name="nome" value={form.nome} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Iniciativa</label>
          <input name="iniciativa" type="number" value={form.iniciativa} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>PV</label>
          <input name="pv" type="number" value={form.pv} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Dano</label>
          <input name="dano" type="number" value={form.dano} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>PV Temp</label>
          <input name="pvTemp" type="number" value={form.pvTemp} onChange={handleChange} />
        </div>
        <div className="modal-actions">
          <button onClick={handleConfirm}>Confirmar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
