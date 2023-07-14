import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/lista.module.css";
import { RequestsUTIs } from "@/@types/paciente";
import { utiBedsContext } from "@/contexts/UTIBedsContext";

interface props {
  item: RequestsUTIs  
} 

export default function ItemSolicitacao({item}: props) {

    const {setSelectedRequestsUTI, setRequestOpen, requestOpen} = utiBedsContext();
  let color;
  switch (item.priority) {
    case 1:
      color = styles.one;
      break;
    case 2:
      color = styles.two;
      break;
    case 3:
      color = styles.three;
      break;
    case 4:
      color = styles.four;
      break;
    case 5:
      color = styles.five;
      break;
  }
  return (
    <Button
      onClick={() => {
        setSelectedRequestsUTI(item);
        setRequestOpen(!requestOpen);
      }}
      className={`${styles.button} w-100 `}
    >
      <Container className={`${styles.item} w-100`}>
        <Row>
          <Col className={`${styles.column}`} sm={8}>
            <span>Nome:</span>
            <h4>{item.collaborator.user.name}</h4>
          </Col>
          <Col sm={4} className={`${styles.column}`}>
            <span>Gravidade: </span>
            <h4 className={`${color}`}>{item.priority}</h4>
          </Col>
        </Row>
      </Container>
    </Button>
  );
}
