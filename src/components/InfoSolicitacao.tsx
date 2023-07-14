import { utiBedsContext } from "@/contexts/UTIBedsContext";
import styles from "@/styles/info.module.css";
import { Button, Container, Row, Col, Collapse } from "react-bootstrap";

export default function InfoSolicitacao() {
  let color;
  const {selectedRequestsUTI, requestOpen} = utiBedsContext();

  switch (selectedRequestsUTI.priority) {
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
    <Collapse in={requestOpen} dimension='height'>
      <Container
        className={`${styles.pageWrapper} ${
            selectedRequestsUTI.priority === 0 ? styles.displayNone : ""
        }`}
      >
        <Row>
          <Row className={`${styles.rawRow}`}>
            <h5 className={`${styles.label}`}>Nome</h5>
            <span>{selectedRequestsUTI.collaborator.user.name}</span>
          </Row>
          <Row className={`${styles.rawRow}`}>
            <h5 className={`${styles.label}`}>Diagnósticos principais</h5>
            <span>{selectedRequestsUTI.patient_infos.main_deseases}</span>
          </Row>
          <Row className={`${styles.rawRow}`}>
            <h5 className={`${styles.label}`}>Precaução</h5>
            <span className={`${styles.span}`}>{selectedRequestsUTI.patient_infos.precaution}</span>
          </Row>
          <Row className={`${styles.rawRow}`}>
            <h5 className={`${styles.label}`}>Antecedentes e Comorbidades</h5>
            <span>{selectedRequestsUTI.patient_infos.antecedents_comorbidities}</span>
          </Row>
          <Row className={`${styles.rawRow}`}>
            <h5 className={`${styles.label}`}>Suporte Médico Necessário</h5>
            <span className={`${styles.span}`}>{selectedRequestsUTI.patient_infos.suport_needed}</span>
          </Row>
        </Row>
        <Row>
          <Row className={`${styles.parecerRow}`}>
            <Col className={`${styles.parecer}`} xs={3}>
              <span>Parecer: </span>
              <span className={`${color}`}>{selectedRequestsUTI.priority}</span>
            </Col>
          </Row>

          <Row className={`${styles.rowButtons}`}>
            <Button className={`${styles.button}`} variant='greenButton'>
              Aceitar Solicitacão
            </Button>
            <Button className={`${styles.button}`} variant='redButton'>
              Recusar Solicitacao
            </Button>
          </Row>
        </Row>
      </Container>
    </Collapse>
  );
}
