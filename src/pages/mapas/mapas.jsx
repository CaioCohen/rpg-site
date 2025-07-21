import PageWrapper from "../../components/layout/PageWrapper";
import { useData } from "../../context/DataProvider";
import "./mapas.css";


export default function Mapas() {

  const { data, campanhaSelecionada } = useData();

  if (!data || !campanhaSelecionada) {
    return (
      <PageWrapper>
        <p>Carregando...</p>
      </PageWrapper>
    );
  }

  const campanha = data.find(item => item.nome === campanhaSelecionada);
  const mapas = campanha?.info?.mapas || [];

  return (
  <PageWrapper>
    <h1>Mapas</h1>
      <div className="mapas-container">
        {mapas.map((item) => (
          <div className="mapa-item" key={item.titulo}>
            <h2>{item.titulo}</h2>
            <img src={item.urlImagem} alt={item.titulo} />
          </div>
        ))}
      </div>
  </PageWrapper>
  );
}
