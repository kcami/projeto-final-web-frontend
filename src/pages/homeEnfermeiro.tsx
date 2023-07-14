import { ListGroup, NavLink, NavbarBrand, Row } from 'react-bootstrap';
import Leitos from '../components/leitos'
import styles from '../styles/page.module.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Image} from 'react-bootstrap';
import logo from '../assets/Rectangle_2.png';
import Header from '../components/Header';
import { useEffect } from 'react';
import useBedsRequests from '@/services/utiBedsRequests';
export default function homeEnfermeiro() {
  
  return (
    <Container className={`${styles.pageWrapper}`}>
      <Header path='#' returnTo='/homeEnfermeiro' linkText={"Criar solicitações"} pageType={2} legendType={1} legendText={"Testando"}/>  
      <Container className={`${styles.pageWrapperContent}`}>
      <Leitos />
      </Container>
    </Container>
  )
}
