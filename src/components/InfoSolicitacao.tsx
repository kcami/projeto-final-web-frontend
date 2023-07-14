import styles from '@/styles/info.module.css';
import {Button, Container, Row, Col} from 'react-bootstrap';



export default function InfoSolicitacao(props: {gravidade:number}){
    let color;
    switch(props.gravidade){
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
    return(
        <Container className={`${styles.pageWrapper}`}>
            <Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Nome</h5>
                    <span>João Exemplo da Silva</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Diagnósticos principais</h5>
                    <span>Dor de cabeca</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Precaucão</h5>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Antecedentes e Comorbidades</h5>
                    <span>Hipertensão e diabetes</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Suporte Médico Necessário</h5>
                    <span></span>
                </Row>
            </Row>
            <Row>
                <Row className={`${styles.parecerRow}`}>
                        <Col className={`${styles.parecer}`} xs={3}>
                            <span>Parecer: </span><span className={`${color}`}>2</span>
                        </Col>    
                    </Row>
                    
                <Row className={`${styles.rowButtons}`}>
                    
                         <Button className={`${styles.button}`} variant="redButton">Aceitar Solicitacão</Button>
                        <Button className={`${styles.button}`} variant="greenButton">Recusar Solicitacao</Button>
                    
                </Row>
            </Row>
        </Container>
    )
}