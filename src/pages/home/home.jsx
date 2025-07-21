import PageWrapper from "../../components/layout/PageWrapper";
import { useData } from "../../context/DataProvider";

export default function Home() {

  const { data, campanhaSelecionada } = useData();

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
  
  
  return (
  <PageWrapper>
    <p>{filteredData.info.descricao}</p>
    <a
      href={filteredData.info.linkGrid}
      target="_blank"
      rel="noopener noreferrer"
      className="campanha-link"
    >
      Abrir Grid
    </a>
  </PageWrapper>);
}
