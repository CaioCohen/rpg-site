import PageWrapper from "../../components/layout/PageWrapper";
import LinkCard from "../../components/LinkCard";
import { useData } from "../../context/DataProvider";
import owlbearImg from "../../assets/imgs/owlbear.jpg";

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
    <LinkCard
    imagem={owlbearImg}
    titulo="Entrar no Grid"
    link={filteredData.info.linkGrid}
    descricao="Grid de batalhas utilizado na campanha"
    />
  </PageWrapper>);
}
