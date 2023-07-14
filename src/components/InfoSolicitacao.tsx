import styles from '@/styles/info.module.css';
import {Button, Container, Row, Col, Collapse} from 'react-bootstrap';



export default function InfoSolicitacao(props: {nome:string, gravidade:number,diagnosticos: string, precaucao: string, antecedentes: string, suporte: string}){
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
        <Collapse in={props.gravidade!==0} dimension="height">
        <Container className={`${styles.pageWrapper} ${props.gravidade === 0 ? styles.displayNone : ''}`}>
            <Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Nome</h5>
                    <span>{props.nome}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Diagnósticos principais</h5>
                    <span>{props.diagnosticos}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Precaucão</h5>
                    <span className={`${styles.span}`}>{props.precaucao}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Antecedentes e Comorbidades</h5>
                    <span>{props.antecedentes}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Suporte Médico Necessário</h5>
                    <span className={`${styles.span}`}>{props.suporte}</span>
                </Row>
            </Row>
            <Row>
                <Row className={`${styles.parecerRow}`}>
                        <Col className={`${styles.parecer}`} xs={3}>
                            <span>Parecer: </span><span className={`${color}`}>{props.gravidade}</span>
                        </Col>    
                    </Row>
                    
                <Row className={`${styles.rowButtons}`}>
                    
                         <Button className={`${styles.button}`} variant="redButton">Aceitar Solicitacão</Button>
                        <Button className={`${styles.button}`} variant="greenButton">Recusar Solicitacao</Button>
                    
                </Row>
            </Row>
        </Container>
        </Collapse>
    )
}