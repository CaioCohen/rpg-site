import { Navigate, useLocation } from 'react-router-dom';

const RequireCampanha = ({ children }) => {
  const campanhaSelecionada = sessionStorage.getItem("campanhaSelecionada");
  const location = useLocation();

  // Permitir acesso livre à página de seleção
  if (location.pathname === "/campanhas") return children;

  // Se não tiver campanha selecionada, redireciona
  if (!campanhaSelecionada) {
    return <Navigate to="/campanhas" replace />;
  }

  return children;
};

export default RequireCampanha;
