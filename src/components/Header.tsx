import {Navbar,Container,NavbarBrand, Image, Nav, ListGroup, NavLink} from 'react-bootstrap';
import styles from '../styles/page.module.css';
export default function Header(){
    const legenda = [
        {
          color: styles.green,
          texto: "UTIs disponiveis"
        },
        {
          color: styles.yellow,
          texto: "UTIs em limpeza"
        },
        {
          color: styles.red,
          texto: "UTIs ocupadas"
        }
      ]
    return (
        <Navbar expand="lg" fixed="top" className={`${styles.navbar}`}>
            <Container className={`${styles.container}`}>
                <NavbarBrand className={`${styles.logo}`}>
                    <Image width={"150px"} src='./images/Rectangle_2.png' />
                </NavbarBrand>
                <Nav>
                    <NavLink>Perfil</NavLink>
                    <NavLink>Sair</NavLink>
                </Nav>
            </Container>
            <Container className={`${styles.legenda} w-100`}>
                <ListGroup className={`${styles.listGroup} w-100`}>
                    {legenda.map((element, i) => {
                        return (

                            <ListGroup.Item key={i} className={`${styles.itemLegenda}`}>

                                <div className={`${element.color}`}></div>
                                {element.texto}

                            </ListGroup.Item>

                        )
                    })}
                </ListGroup>
            </Container>
        </Navbar>
        )
}