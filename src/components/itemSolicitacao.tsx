import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '@/styles/lista.module.css';




export default function ItemSolicitacao(props: {nome: string, gravidade: number, diagnosticos: string, precaucao: string, antecedentes: string, suporte: string, handleData: (nome: string, gravidade: number, diagnosticos: string, precaucao: string, antecedentes: string, suporte: string) => void}){
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
        <Button onClick={() => props.handleData(props.nome,props.gravidade, props.diagnosticos, props.precaucao, props.antecedentes, props.suporte)} className={`${styles.button} w-100`}>
            <Container className={`${styles.item} w-100`}>
                <Row>
                    <Col className={`${styles.column}`} sm={8}>
                        <span>Nome:</span>
                        <h4>{props.nome}</h4>
                    </Col>
                    <Col sm={4} className={`${styles.column}`}>
                        <span>Gravidade: </span>
                        <h4 className={`${color}`}>{props.gravidade}</h4>
                    </Col>
                </Row>
            </Container>
        </Button>
    )
}