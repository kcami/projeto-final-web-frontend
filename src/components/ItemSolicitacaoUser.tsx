import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '@/styles/lista.module.css';




export default function ItemSolicitacaoUser(props: {nome: string,registro: string,email: string, funcao: string, codigo: string, handleData: (nome: string,registro: string,email: string, funcao: string, codigo: string) => void}){
    return( 
        <Button onClick={() => props.handleData(props.nome,props.registro,props.email, props.funcao, props.codigo)} className={`${styles.button} w-100`}>
            <Container className={`${styles.item} w-100`}>
                <Row>
                    <Col className={`${styles.column}`} sm={8}>
                        <span>Nome:</span>
                        <h4>{props.nome}</h4>
                    </Col>
                </Row>
            </Container>
        </Button>
    )
}