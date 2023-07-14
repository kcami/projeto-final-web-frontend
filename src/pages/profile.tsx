import Header from '../components/Header';
import { Button, Col, Container, Row, Image, Form } from 'react-bootstrap'
import styles from '../styles/page.module.css';
import styleProfile from '../styles/profile.module.css'
export default function Profile() {
    return (
        <>
            <Header linkText={''} pageType={2} legendText={''} legendType={0} />
            <Container className={`${styleProfile.profile_wrapper} w-100 bg-blueSecondary`} >
                <h6>Perfil</h6>
                <Container className={`${styleProfile.content_wrapper}`}>
                    <Row className={`${styleProfile.first_row}`}>
                        <Col xl="10" className={`${styleProfile.profile_description}`}>

                            <Image width={140}src='./images/Ellipse_5.png' />


                            <Container className={`${styleProfile.info_wrapper}`}>
                                <Row>
                                    <h4>Fulano de Tal</h4>
                                </Row>
                                <Row><span>Medico Cardiologista</span></Row>
                                <Row><span>Solicitante de vagas</span></Row>
                                <Row><span>CRM:XXXXXXXXXX-X</span></Row>
                            </Container>

                        </Col>
                        <Col xl="2" className={`${styleProfile.profile_description}`}>
                            <Button className={`${styleProfile.edit_button}`}>
                                <Image width={20} src='./images/edit.png'/>
                                Edit
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group controlId='profileEditionEmail' className={`${styleProfile.formGroup}`}>
                                <Form.Label className={`${styleProfile.formLabel}`}>E-mail</Form.Label>
                                <Form.Control className={`${styleProfile.formControl}`} type='email' />
                            </Form.Group>
                            <Form.Group controlId='profileEditionPassword'>
                                <Form.Label className={`${styleProfile.formLabel}`}>Senha</Form.Label>
                                <Form.Control className={`${styleProfile.formControl}`} type='password'/>
                            </Form.Group>
                        </Form>

                    </Row>
                    <Row></Row>
                </Container>

            </Container>
        </>
    )
}