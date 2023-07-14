import styles from '@/styles/info.module.css';
import {Button, Container, Row, Col, Collapse} from 'react-bootstrap';



export default function InfoSolicitacaoUser(props: {nome: string,registro: string,email: string, funcao: string, codigo: string}){
    
    return(
        <Collapse in={props.nome!==''} dimension="height">
        <Container className={`${styles.pageWrapper}`}>
            <Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Nome</h5>
                    <span>{props.nome}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Registro</h5>
                    <span>{props.registro}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>email</h5>
                    <span>{props.email}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>Funcao</h5>
                    <span>{props.funcao}</span>
                </Row>
                <Row className={`${styles.rawRow}`}>
                    <h5 className={`${styles.label}`}>CRM/COREN</h5>
                    <span>{props.codigo}</span>
                </Row>
            </Row>
            <Row>
                    
                <Row className={`${styles.rowButtons}`}>
                    
                         <Button className={`${styles.button}`} variant="redButton">Aceitar Solicitacão</Button>
                        <Button className={`${styles.button}`} variant="greenButton">Recusar Solicitacao</Button>
                    
                </Row>
            </Row>
        </Container>
        </Collapse>
    )
}