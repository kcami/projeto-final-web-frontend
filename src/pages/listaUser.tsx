import stylesListaUer from '../styles/listaUser.module.css';
import stylesLista from '@/styles/lista.module.css';
import Header from '../components/Header';
import styles from '../styles/page.module.css';
import {Col, Container, Row} from 'react-bootstrap';
import ListaSolicitacaoUser from '@/components/listaSolicitacaoUser';
import InfoSolicitacaoUser from '@/components/InfoSolicitacaoUser';
import { useState } from "react";

export default function ListaUser(){
    const [nome,setNome] = useState('');
    const [registro,setRegistro] = useState('');
    const [email,setEmail] = useState('');
    const [funcao,setFuncao] = useState('');
    const [antecedentes,setAntecedentes] = useState('');
    const [codigo,setCodigo] = useState('')
    const handleData = (nome: string,registro: string,email: string, funcao: string, codigo: string) => {
        setNome(nome);
        setRegistro(registro);
        setEmail(email);
        setFuncao(funcao);
        setAntecedentes(antecedentes);
        setCodigo(codigo);
    }
    return(
        <Container className={`${styles.pageWrapper}`}>
            <Header pageType={2} linkText={''} legendType={2} legendText={'Lista de solicitações de cadastro'} />
            <Container className={`${stylesLista.pageWrapperContent}`}>
                <Row>
                    <Col xs={6}>
                        <ListaSolicitacaoUser handleData={handleData}/>
                    </Col>
                    <Col xs={6}>
                        <InfoSolicitacaoUser nome={nome} registro={registro} email={email} funcao={funcao} codigo={codigo}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}