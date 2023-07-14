import { Paciente } from "@/@types/paciente";
import ItemSolicitacaoUser from "@/components/ItemSolicitacaoUser";
import styles from '@/styles/lista.module.css';
import { Container } from "react-bootstrap";

interface listaDeSolicitacoes{
    listaPacientes: Paciente[]
}


export default function ListaSolicitacaoUser(props: {handleData: (nome: string,registro: string,email: string, funcao: string, codigo: string) => void}){
    const listaDeNomes = [
        {
            nome: 'Joao 1',
            registro: '111.111.111-11',
            email: 'email@email.com',
            funcao: 'medico',
            codigo: 'CRM 1111111/11'
        },
        {
            nome: 'Joao 2',
            registro: '111.111.111-11',
            email: 'email@email.com',
            funcao: 'medico',
            codigo: 'CRM 1111111/11'
        },
        {
            nome: 'Joao 3',
            registro: '111.111.111-11',
            email: 'email@email.com',
            funcao: 'medico',
            codigo: 'CRM 1111111/11'
        },
        {
            nome: 'Joao 4',
            registro: '111.111.111-11',
            email: 'email@email.com',
            funcao: 'medico',
            codigo: 'CRM 1111111/11'
        },
        {
            nome: 'Joao 5',
            registro: '111.111.111-11',
            email: 'email@email.com',
            funcao: 'medico',
            codigo: 'CRM 1111111/11'
        },
    
    ]

    

    return (
        <Container className={`${styles.ListaContainer} w-100`} >
            {listaDeNomes.map((element,i) => {
                return(
                <ItemSolicitacaoUser handleData={props.handleData} key={i} nome={element.nome} registro={element.registro} email={element.email} funcao={element.funcao} codigo={element.codigo}/>
            )})}
            
            
        </Container>
    )
}