import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Campanhas from './pages/campanhas/campanhas';
import Npcs from './pages/npcs/npcs';
import Sessoes from './pages/sessoes/sessoes';
import Lore from './pages/lores/lores';
import Combate from './pages/combate/combate';
import Mapas from './pages/mapas/mapas';
import Navbar from './components/navbar';
import RequireCampanha from './components/requireCampanha';
import { useData } from './context/DataProvider';

function App() {

  const { campanhaSelecionada } = useData();

  return (
    <RequireCampanha>
      {campanhaSelecionada && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/npcs" element={<Npcs />} />
        <Route path="/sessoes" element={<Sessoes />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/combate" element={<Combate />} />
        <Route path="/mapas" element={<Mapas />} />
      </Routes>
    </RequireCampanha>
  );
}

export default App;
