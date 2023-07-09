// 'use client';
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import "../styles/login.css";
import { ChangeEvent, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <Container className="w-75 shadow">
        <Row className="pl-5">
          <Col className='p-5'>
            <div className='d-flex justify-content-center'>
              <Image width={"150px"} src='./images/logo.svg' />
            </div>
            
            <Row>
              <Form className="d-flex justify-content-center pb-3">
                <Form.Check
                  inline
                  label='Solicitar vaga'
                  name='group1'
                  type={"radio"}
                  id={`radio-1`}
                />
                <Form.Check
                  inline
                  label='Administrar vagas'
                  name='group1'
                  type={"radio"}
                  id={`radio-2`}
                />
              </Form>
              <Form>
                <Form.Label>Identificador (CRM/COREN)</Form.Label>
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
              <p>
                <a href='#' className='text-dark'>
                  Esqueceu sua senha?
                </a>
              </p>
              <Button variant='primary' className="m-2 shadow">
                <p className='text-white m-0'>Login</p>
              </Button>
            </Row>
            <p>Ainda não tem conta? <a href='#' className="text-primary">Faça seu cadastro!</a></p>
          </Col>
          <Col className='p-0 pt-4 pb-4 img-container d-xl-flex justify-content-center d-none d-xl-block '>
            <Image src='./images/login.svg' />
          </Col>
        </Row>
      </Container>
    </>
  );
}
