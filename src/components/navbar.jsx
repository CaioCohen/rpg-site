import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/npcs" style={{ marginRight: '10px' }}>NPCs</Link>
      <Link to="/sessoes" style={{ marginRight: '10px' }}>Sessões</Link>
      <Link to="/lore" style={{ marginRight: '10px' }}>Lore</Link>
      <Link to="/combate" style={{ marginRight: '10px' }}>Combate</Link>
      <Link to="/mapas">Mapas</Link>
    </nav>
  );
}
