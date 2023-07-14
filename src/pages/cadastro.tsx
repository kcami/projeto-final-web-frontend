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
import { FormProvider, useForm } from "react-hook-form";
import HookSelect from "@/components/ReactHookForm/HookSelect";
import HookInput from "@/components/ReactHookForm/HookInput";
import { AuthCreate, AuthLogin } from "@/@types/auth";
import useAuth from "@/services/authenticationRequests";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token, setToken} = authContext();
  const methods = useForm();
  const { actions } = useAuth();

  const roles = [
    { label: "Médico da UTI", value: "MEDICO_UTI" },
    { label: "Médico Geral", value: "MEDICO_GERAL" },
    { label: "Enfermeiro", value: "ENFERMEIRO" },
  ];
  
  return (
    <div className={`vw-100 vh-100 d-flex justify-content-center align-items-center ${styles.background}`}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Container className={`${styles.container} w-75 shadow`}>
        <Row className="pl-5">
          <Col className='py-3 px-5'>
            <div className='d-flex justify-content-center'>
              <Image width={"150px"} src='./images/logo.svg' />
            </div>
            
            <Row className="mt-4">
            <FormProvider {...methods}>
                <Form
                  onSubmit={methods.handleSubmit((data) => {
                    actions.postUser(data as AuthCreate);
                  })}
                >
                  <HookSelect name='role' label='Cargo' list={roles} />
                  <HookInput
                    name='name'
                    label='Nome'
                    type='text'
                  />
                  <HookInput
                    name='register'
                    label='CPF'
                    type='text'
                  />
                  <HookInput
                    name='medical_register'
                    label='CRM/COREN'
                    type='text'
                  />
                  <HookInput
                    name='email'
                    label='E-mail'
                    type='email'
                  />
                  <HookInput name='password' label='Senha' type='password' />
                  <Button
                    type='submit'
                    variant='blueButtom'
                    className='my-5 shadow w-100'
                  >
                    <p className='text-white m-0'>Solicitar cadastro</p>
                  </Button>
                </Form>
              </FormProvider>
            </Row>
          </Col>
          <Col className={`p-0 pt-4 pb-4 ${styles.imgContainer} d-xl-flex justify-content-center d-none d-xl-block `}>
            <Image src='./images/login.svg' className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
