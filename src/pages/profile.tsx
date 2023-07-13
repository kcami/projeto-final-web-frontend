import Header from '../components/Header';
import {Col, Container, Row} from 'react-bootstrap'
import styles from '../styles/page.module.css';
import styleProfile from '../styles/profile.module.css'

export default function Profile(){
    return(
        <>
            <Header linkText={''} pageType={2} legendText={''} legendType={0}/>
            <Container className={`${styleProfile.profile_wrapper} w-100 bg-blueSecondary`} >
                <Row>
                    <Col xl="8">Teste</Col>
                    <Col xl="4">Teste</Col>
                </Row>
                <Row></Row>
                <Row></Row>
                
            </Container>
        </>
    )
}