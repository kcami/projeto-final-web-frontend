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
import HookInput from "@/components/ReactHookForm/HookInput";
import { useForm, FormProvider } from "react-hook-form";
import HookSelect from "@/components/ReactHookForm/HookSelect";
import { AuthLogin } from "@/@types/auth";
// import { AlertError } from "@/components/AlertError";
import { Alert } from "react-bootstrap";
import { AlertError } from "@/components/AlertError";
import router from "next/router";

export default function Login() {
  const { token, setToken, routes } = authContext();
  const { actions } = useAuth();
  const methods = useForm();

  useEffect(() => {}, []);

  const roles = [
    { label: "Médico da UTI", value: "MEDICO_UTI" },
    { label: "Médico Geral", value: "MEDICO_GERAL" },
    { label: "Enfermeiro", value: "ENFERMEIRO" },
  ];

  return (
    <div
      className={`vw-100 vh-100 d-flex justify-content-center align-items-center ${styles.background}`}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Container className={`${styles.container} w-50 shadow`}>
        <Row className='pl-5'>
          <Col className='p-5'>
            <div className='d-flex justify-content-center'>
              <Image width={"150px"} src='./images/logo.svg' />
            </div>

            <Row>
              <FormProvider {...methods}>
                <Form
                  onSubmit={methods.handleSubmit((data) => {
                    actions.login(data as AuthLogin);
                  })}
                >
                  <HookSelect name='role' label='Cargo' list={roles} />
                  <HookInput
                    name='medical_register'
                    label='CRM/COREN'
                    type='text'
                  />

                  <HookInput name='password' label='Senha' type='password' />
                  {/* <p>
                    <a href='#' className='text-dark'>
                      Esqueceu sua senha?
                    </a>
                  </p> */}
                  <Button
                    type='submit'
                    variant='blueButtom'
                    className='my-2 shadow w-100'
                  >
                    <p className='text-white m-0'>Login</p>
                  </Button>
                </Form>
              </FormProvider>
              <p>
                Ainda não tem conta?
                <span className="text-primary">
                  <Link href='/cadastro'> Faça seu cadastro!</Link>
                </span>
              </p>
            </Row>
          </Col>
          <Col
            className={`p-0 pt-4 pb-4 ${styles.imgContainer} d-xl-flex justify-content-center d-none d-xl-block `}
          >
            <Image src='./images/login.svg' className='w-100' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
