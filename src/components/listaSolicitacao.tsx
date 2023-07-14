import { Paciente } from "@/@types/paciente";
import ItemSolicitacao from "./itemSolicitacao";
import styles from '@/styles/lista.module.css';
import { Container } from "react-bootstrap";

interface listaDeSolicitacoes{
    listaPacientes: Paciente[]
}


export default function ListaSolicitacao(props: {handleData: (nome:string, gravidade:number,diagnosticos: string, precaucao: string, antecedentes: string, suporte: string) => void}){
    const listaDeNomes = [
        {
            nome: 'Joao 1',
            gravidade: 1,
            diagnosticos: 'Fratura no femur esquerdo',
            precaucao: 'Morde em hora par',
            antecedentes: 'Pressao alta',
            suporte: 'Ventilacao mecanica'
        },
        {
            nome: 'Joao 2',
            gravidade: 2,
            diagnosticos: 'Fratura no femur esquerdo',
            precaucao: 'Morde em hora impar',
            antecedentes: 'Pressao alta',
            suporte: 'Ventilacao mecanica'
        },
        {
            nome: 'Joao 3',
            gravidade: 3,
            diagnosticos: 'Fratura no femur esquerdo',
            precaucao: 'Morde de duas em duas horas',
            antecedentes: 'Pressao alta',
            suporte: 'Ventilacao mecanica'
        },
        {
            nome: 'Joao 4',
            gravidade: 4,
            diagnosticos: 'Fratura no femur esquerdo',
            precaucao: 'Morde em hora cheia',
            antecedentes: 'Pressao alta',
            suporte: 'Ventilacao mecanica'
        },
        {
            nome: 'Joao 5',
            gravidade: 5,
            diagnosticos: 'Fratura no femur esquerdo',
            precaucao: 'Morde em hora vazia',
            antecedentes: 'Pressao alta',
            suporte: 'Ventilacao mecanica'
        },
    
    ]

    

    return (
        <Container className={`${styles.ListaContainer} w-100`} >
            {listaDeNomes.map((element,i) => {
                return(
                <ItemSolicitacao handleData={props.handleData} key={i} nome={element.nome} gravidade={element.gravidade} diagnosticos={element.diagnosticos} precaucao={element.precaucao} antecedentes={element.antecedentes} suporte={element.suporte}/>
            )})}
            
            
        </Container>
    )
}