import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataProvider';
import './navbar.css';


export default function Navbar() {
  const { campanhaSelecionada } = useData();

  const corNavbar = {
    "Corrupted Domain": "vermelha",
    "Primordial": "azul",
    "Humblewood": "verde"
  }[campanhaSelecionada];

  return (
    <nav className={`navbar navbar-${corNavbar}`}>
      <div className="navbar-container">
        <Link to="/" style={{ marginRight: '10px' }}>{campanhaSelecionada}</Link>
        <Link to="/npcs" style={{ marginRight: '10px' }}>NPCs</Link>
        <Link to="/sessoes" style={{ marginRight: '10px' }}>Sessões</Link>
        <Link to="/lore" style={{ marginRight: '10px' }}>Lore</Link>
        <Link to="/combate" style={{ marginRight: '10px' }}>Combate</Link>
        <Link to="/mapas">Mapas</Link>
        <Link to="/campanhas">Campanhas</Link>
      </div>
    </nav>
  );
}
