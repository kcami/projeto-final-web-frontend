import { Paciente } from "@/@types/paciente";
import ItemSolicitacao from "./itemSolicitacao";
import styles from '@/styles/lista.module.css';
import { Container } from "react-bootstrap";
interface listaDeSolicitacoes{
    listaPacientes: Paciente[]
}


export default function ListaSolicitacao(){
    return (
        <Container className={`${styles.ListaContainer} w-100`} >
            <ItemSolicitacao nome={'Joao de Exemplo'} gravidade={1}/>
            <ItemSolicitacao nome={'Joao de Exemplo'} gravidade={2}/>
            <ItemSolicitacao nome={'Joao de Exemplo'} gravidade={3}/>
            <ItemSolicitacao nome={'Joao de Exemplo'} gravidade={4}/>
            <ItemSolicitacao nome={'Joao de Exemplo'} gravidade={5}/>
        </Container>
    )
}