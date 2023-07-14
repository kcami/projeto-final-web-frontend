// 'use client';
import Head from "next/head";
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
import Header from "@/components/Header";


export default function Login() {
  const { token, setToken } = authContext();
  const { actions } = useAuth();
  const methods = useForm();

  useEffect(() => {}, []);

  const roles = [
    { label: "Médico da UTI", value: "MEDICO_UTI" },
    { label: "Médico Geral", value: "MEDICO_GERAL" },
    { label: "Enfermeiro", value: "ENFERMEIRO" },
  ];

  return (
    <div className={`vw-100 vh-100 d-flex justify-content-center align-items-center`}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header path='/solicitacaoUTI' linkText={"Criar solicitações"} pageType={1} legendType={1} legendText={"Testando"}/>  
      <Container className="mt-5 border border-blueSecondary border-2 rounded-3 ">
          <Col className='p-5'>
           
              <FormProvider {...methods}>
                <Form
                  onSubmit={methods.handleSubmit((data) => {
                    actions.login(data as AuthLogin);
                  })}
                >
                  <HookInput
                    name='medical_register'
                    label='Nome'
                    type='text'
                  />
                  <HookInput
                    name='medical_register'
                    label='Diagnósticos principais'
                    type='text'
                  />
                  <HookSelect name='role' label='Cargo' list={roles} />

                  <HookInput name='password' label='Senha' type='password' />
                  <p>
                    <a href='#' className='text-dark'>
                      Esqueceu sua senha?
                    </a>
                  </p>
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
                <Link href='/cadastro'>Faça seu cadastro!</Link>
              </p>
          </Col>
      </Container>
    </div>
  );
}
