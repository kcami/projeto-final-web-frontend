// 'use client';
import Head from "next/head";
import styles from "../styles/login.module.css";
import { ChangeEvent, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { authContext } from '@/contexts/authenticationContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token, setToken} = authContext();

  console.log(token);
  //const [showPassword, setShowPassword] = useState(false);
  //const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
    console.log(email)
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
    console.log(password)
  }
  
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Container className={`${styles.container} w-75 shadow`}>
        <Row className="pl-5">
          <Col className='py-3 px-5'>
            <div className='d-flex justify-content-center'>
              <Image width={"150px"} src='./images/logo.svg' />
            </div>
            
            <Row>
              <Form className="d-flex justify-content-center">
                <Form.Check
                  inline
                  label='Enfermeiro'
                  name='group1'
                  type={"radio"}
                  id={`radio-1`}
                />
                <Form.Check
                  inline
                  label='Médico'
                  name='group1'
                  type={"radio"}
                  id={`radio-2`}
                />
                <Form.Check
                  inline
                  label='Médico da UTI'
                  name='group1'
                  type={"radio"}
                  id={`radio-2`}
                />
              </Form>
              <Form>
                <Form.Label>Nome</Form.Label>
                <Form.Control type='text' id='user' className="shadow-sm" onChange={handlePasswordChange} />
                <Form.Label>Identificador (CRM/COREN)</Form.Label>
                <Form.Control type='text' id='user' className="shadow-sm" onChange={handlePasswordChange} />
                <Form.Label>CPF</Form.Label>
                <Form.Control type='email' id='user' className="shadow-sm" onChange={handlePasswordChange} />
                <Form.Label>Email</Form.Label>
                <Form.Control type='text' id='user' className="shadow-sm" onChange={handlePasswordChange} />
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type='password'
                  id='password'
                  aria-describedby='passwordHelpBlock'
                  className="shadow-sm"
                  onChange={handleEmailChange}
                />
              </Form>
              <Button variant='primary' className="m-2 mt-3 shadow">
                <p className='text-white m-0'>Solicitar cadastro</p>
              </Button>
            </Row>
          </Col>
          <Col className={`p-0 pt-4 pb-4 ${styles.imgContainer} d-xl-flex justify-content-center d-none d-xl-block `}>
            <Image src='./images/login.svg' />
          </Col>
        </Row>
      </Container>
    </>
  );
}
