import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataProvider';
import './navbar.scss'

export default function Navbar() {
  const { campanhaSelecionada } = useData();;
  const [menuAberto, setMenuAberto] = useState(false);


  const corNavbar = {
    "Corrupted Domain": "vermelha",
    "Primordial": "azul",
    "Humblewood": "verde"
  }[campanhaSelecionada];

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  const links = (
    <>
      <Link to="/" onClick={fecharMenu}>{campanhaSelecionada}</Link>
      <Link to="/npcs" onClick={fecharMenu}>NPCs</Link>
      <Link to="/sessoes" onClick={fecharMenu}>Sessões</Link>
      <Link to="/lore" onClick={fecharMenu}>Lore</Link>
      <Link to="/combate" onClick={fecharMenu}>Combate</Link>
      <Link to="/mapas" onClick={fecharMenu}>Mapas</Link>
      <Link to="/campanhas" onClick={fecharMenu}>Campanhas</Link>
    </>
  );

  return (
    <>
      <nav className={`navbar navbar-${corNavbar}`}>
        <div className="navbar-container">
          <div className="navbar-desktop">{links}</div>

          {/* botão à direita no mobile */}
          <div className="navbar-mobile">
            <div className="navbar-title">{campanhaSelecionada}</div>
            <button className="menu-button" onClick={toggleMenu}>☰</button>
          </div>
        </div>
      </nav>

      {menuAberto && (
        <div className={`mobile-modal mobile-modal-${corNavbar} slide-in`}>
          <div className="mobile-links">
            {links}
            <button className="mobile-fechar" onClick={fecharMenu}>❌ Fechar Menu</button>
          </div>
        </div>
      )}
    </>
  );
}
