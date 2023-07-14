import {
  Navbar,
  Container,
  NavbarBrand,
  Image,
  Nav,
  ListGroup,
  NavLink,
  Button,
} from "react-bootstrap";
import styles from "../styles/page.module.css";
import headerStyle from "../styles/header.module.css";
import Legend from "../components/Legend";
import useAuth from "@/services/authenticationRequests";
import Link from "next/link";

export default function Header(props: {
  linkText: string;
  path: "/solicitacaoUTI" | "/lista" | "#";
  returnTo: "/home" | "/homeGeral" | "/homeEnfermeiro"
  pageType: number;
  legendType: number;
  legendText: string;
}) {
  const { actions } = useAuth();
  console.log(props.returnTo)
  return (
    <Navbar
      expand='lg'
      fixed='top'
      className={`${headerStyle.navbar} rounded-bottom`}
      bg='bluePrimary'
    >
      <Container className={`${styles.container}`}>
        <NavbarBrand>
          <Image width={"150px"} src='./images/Rectangle_2.png' />
        </NavbarBrand>
        <Nav className={`${headerStyle.navbar_nav}`}>
          {props.pageType == 1 && (
            <NavLink
              className={`${headerStyle.navLink} d-flex justify-content-center`}
              href='/profile'
            >
              <Image src='./images/account_circle.png' />
              Perfil
            </NavLink>
          )}
          {props.pageType == 2 && (
            <Link
              className={`${headerStyle.navLink} d-flex justify-content-center`}
              href={props.returnTo}
            >
              <Image src='./images/home.png' />
              Home
            </Link>
          )}
          <NavLink
            className={`${headerStyle.navLink} d-flex justify-content-center`}
            onClick={actions.signOut}
          >
            <Image src='./images/exit_to_app.png' />
            Sair
          </NavLink>
          {props.linkText != "" && props.pageType == 1 && (
            <Link href={props.path}>
              <Button
                variant='blueButtom'
                className={`${styles.blue_button} shadow-lg `}
              >
                {props.linkText}
              </Button>
            </Link>
          )}
        </Nav>
      </Container>
      <Legend pageType={props.legendType} componentText={props.legendText} />
    </Navbar>
  );
}
