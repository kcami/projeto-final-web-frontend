import stylesLista from '../styles/lista.module.css';
import Header from '../components/Header';
import styles from '../styles/page.module.css';
import {Col, Container, Row} from 'react-bootstrap';
import ListaSolicitacao from '@/components/listaSolicitacao';
import InfoSolicitacao from '@/components/InfoSolicitacao';
export default function Lista(){
    return(
        <Container className={`${styles.pageWrapper}`}>
            <Header pageType={2} linkText={''} legendType={2} legendText={'Lista de solicitações de vagas de UTI'} />
            <Container className={`${stylesLista.pageWrapperContent}`}>
                <Row>
                    <Col xs={6}>
                        <ListaSolicitacao />
                    </Col>
                    <Col xs={6}>
                        <InfoSolicitacao gravidade={1} />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}