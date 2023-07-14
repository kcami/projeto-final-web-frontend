import {Navbar,Container,NavbarBrand, Image, Nav, ListGroup, NavLink, Button} from 'react-bootstrap';
import styles from '../styles/page.module.css';
import headerStyle from '../styles/header.module.css';
import Legend from '../components/Legend';

export default function Header(props: { linkText: string, pageType: number, legendType: number, legendText: string }){

    return (
        <Navbar expand="lg" fixed="top" className={`${headerStyle.navbar}`} bg="bluePrimary">
            <Container className={`${styles.container}`}>
                <NavbarBrand >
                    <Image width={"150px"} src='./images/Rectangle_2.png' />
                </NavbarBrand>
                <Nav className={`${headerStyle.navbar_nav}`}>
                    {
                    props.pageType == 1 && <NavLink href="/profile">Perfil</NavLink>
                    }
                    {
                    props.pageType == 2 && <NavLink href="/home">Home</NavLink>
                    }
                    <NavLink href="#">Sair</NavLink>
                    {
                    (props.linkText != '' && props.pageType == 1) && <NavLink href="#"><Button variant="blueButtom" className={`${styles.blue_button}`}>{props.linkText}</Button></NavLink>
                    }
                </Nav>
            </Container>
            <Legend pageType={props.legendType} componentText={props.legendText}/>
        </Navbar>
        )
}