import { Paciente } from "@/@types/paciente";
import ItemSolicitacao from "./itemSolicitacao";
import styles from "@/styles/lista.module.css";
import { Container } from "react-bootstrap";
import { utiBedsContext } from "@/contexts/UTIBedsContext";
import useBedsRequests from "@/services/utiBedsRequests";
import { useEffect } from "react";

interface listaDeSolicitacoes {
  listaPacientes: Paciente[];
}

export default function ListaSolicitacao() {
  const { actions } = useBedsRequests();
  useEffect(() => {
    actions.getRequestUTI();
  }, []);
  const { requestsUTIs } = utiBedsContext();
  console.log(requestsUTIs)
  return (
    <Container className={`${styles.ListaContainer} w-100`}>
      {requestsUTIs.map((element, i) => {
        return <ItemSolicitacao key={i} item={element} />;
      })}
    </Container>
  );
}
