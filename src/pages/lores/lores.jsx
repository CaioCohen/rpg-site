import PageWrapper from "../../components/layout/PageWrapper";
import { useData } from "../../context/DataProvider";
import { Accordion } from "react-bootstrap";

export default function Lores() {

const { data, campanhaSelecionada } = useData();

  if (!data || !campanhaSelecionada) {
    return (
      <PageWrapper>
        <p>Carregando...</p>
      </PageWrapper>
    );
  }

  const campanha = data.find(item => item.nome === campanhaSelecionada);
  const sessoes = campanha?.info?.lores || [];

  return (
  <PageWrapper>
    <h1>Lores</h1>
    <Accordion defaultActiveKey={null}>
        {sessoes.map((lore, index) => (
          <Accordion.Item eventKey={index.toString()} key={lore.titulo}>
            <Accordion.Header>{lore.titulo}</Accordion.Header>
            <Accordion.Body>
              <p>{lore.descricao}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
  </PageWrapper>);
}
