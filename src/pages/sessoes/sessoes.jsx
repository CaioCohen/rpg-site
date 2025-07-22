import PageWrapper from "../../components/layout/PageWrapper";
import { useData } from "../../context/DataProvider";
import { Accordion } from "react-bootstrap";

export default function Sessoes() {
  const { data, campanhaSelecionada } = useData();

  if (!data || !campanhaSelecionada) {
    return (
      <PageWrapper>
        <p>Carregando...</p>
      </PageWrapper>
    );
  }

  const campanha = data.find(item => item.nome === campanhaSelecionada);
  const sessoes = campanha?.info?.sessoes || [];

  return (
    <PageWrapper>
      <h1>Sessões</h1>
      <Accordion defaultActiveKey={null}>
        {sessoes.map((sessao, index) => (
          <Accordion.Item eventKey={index.toString()} key={sessao.titulo}>
            <Accordion.Header>{sessao.titulo}</Accordion.Header>
            <Accordion.Body>
              <p>{sessao.descricao}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </PageWrapper>
  );
}
