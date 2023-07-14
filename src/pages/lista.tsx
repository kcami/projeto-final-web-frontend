import stylesLista from '../styles/lista.module.css';
import Header from '../components/Header';
import styles from '../styles/page.module.css';
import {Col, Container, Row} from 'react-bootstrap';
import ListaSolicitacao from '@/components/listaSolicitacao';
import InfoSolicitacao from '@/components/InfoSolicitacao';
import { useState } from "react";

export default function Lista(){
    const [nome,setNome] = useState('');
    const [gravidade,setGravidade] = useState(0);
    const [diagnosticos,setDiagnosticos] = useState('');
    const [precaucao,setPrecaucao] = useState('');
    const [antecedentes,setAntecedentes] = useState('');
    const [suporte,setSuporte] = useState('')
    const handleData = (nome: string,gravidade: number,diagnosticos: string, precaucao: string, antecedentes: string, suporte: string) => {
        setNome(nome);
        setGravidade(gravidade);
        setDiagnosticos(diagnosticos);
        setPrecaucao(precaucao);
        setAntecedentes(antecedentes);
        setSuporte(suporte);
    }
    return(
        <Container className={`${styles.pageWrapper}`}>
            <Header pageType={2} linkText={''} legendType={2} legendText={'Lista de solicitações de vagas de UTI'} />
            <Container className={`${stylesLista.pageWrapperContent}`}>
                <Row>
                    <Col xs={6}>
                        <ListaSolicitacao handleData={handleData}/>
                    </Col>
                    <Col xs={6}>
                        <InfoSolicitacao nome={nome} gravidade={gravidade} diagnosticos={diagnosticos} precaucao={precaucao} antecedentes={antecedentes} suporte={suporte}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}