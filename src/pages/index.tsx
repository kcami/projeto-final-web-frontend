// 'use client';
import Head from "next/head";
import styles from "../styles/login.module.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { authContext } from "@/contexts/authenticationContext";
import Link from "next/link";
import useAuth from "@/services/authenticationRequests";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = authContext();
  const { actions } = useAuth();

  useEffect(() => {
    actions.login({
      medical_register: "CRM/SP 123456",
      password: "12345678",
      role: "MEDICO_UTI",
    });
  });
  console.log(token);
  //const [showPassword, setShowPassword] = useState(false);
  //const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
    console.log(email);
  }
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
    console.log(password);
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container className={`${styles.container} w-75 shadow`}>
        <Row className='pl-5'>
          <Col className='p-5'>
            <div className='d-flex justify-content-center'>
              <Image width={"150px"} src='./images/logo.svg' />
            </div>

            <Row>
              <Form className='d-flex justify-content-center pb-3'>
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
                <Form.Control
                  type='text'
                  id='user'
                  className='shadow-sm'
                  onChange={handlePasswordChange}
                />
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type='password'
                  id='password'
                  aria-describedby='passwordHelpBlock'
                  className='shadow-sm'
                  onChange={handleEmailChange}
                />
              </Form>
              <p>
                <a href='#' className='text-dark'>
                  Esqueceu sua senha?
                </a>
              </p>
              <Button variant='blueButtom' className='m-2 shadow'>
                <p className='text-white m-0'>Login</p>
              </Button>
            </Row>
            <p>
              Ainda não tem conta?{" "}
              <Link href='/cadastro'>Faça seu cadastro!</Link>
            </p>
          </Col>
          <Col
            className={`p-0 pt-4 pb-4 ${styles.imgContainer} d-xl-flex justify-content-center d-none d-xl-block `}
          >
            <Image src='./images/login.svg' />
          </Col>
        </Row>
      </Container>
    </>
  );
}
