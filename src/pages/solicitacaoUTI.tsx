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
import useBedsRequests from "@/services/utiBedsRequests";
import { RegisterRequestUTI, RegisterUTI } from "@/@types/utiBeds";
import { utiBedsContext } from "@/contexts/UTIBedsContext";

export default function solicitacaoUTI() {
  const { token, setToken, id } = authContext();
  const { selectedUtisBeds } = utiBedsContext();
  const { actions } = useBedsRequests();
  const methods = useForm();

  useEffect(() => {}, []);

  const genders = [
    { label: "Feminino", value: "Feminino" },
    { label: "Masculino", value: "Masculino" },
  ];

  const precautions = [
    { label: "Padrão", value: "Padrao" },
    { label: "Contato", value: "Contato" },
    { label: "Respiratório gotícula", value: "Respiratorio_Goticula" },
    { label: "Respiratório aerossol", value: "Respiratory_Aerossol" },
  ];

  const suports = [
    { label: "Droga Vasoativa", value: "Droga Vasoativa" },
    { label: "Ventilação Mecânica", value: "Ventilação Mecânica" },
    { label: "Morte Encefálica", value: "Morte Encefálica" },
    { label: "Hemodiálise", value: "Hemodiálise" },
    { label: "Marcapasso", value: "Marcapasso" },
  ];
  const priorities = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];
  console.log(id);

  return (
    <div
      className={`vw-100 vh-100 d-flex justify-content-center align-items-center mt-5`}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header
        path='/solicitacaoUTI'
        returnTo="/homeGeral"
        linkText={"Criar solicitações"}
        pageType={2}
        legendType={2}
        legendText={"Formulário de solicitação de UTI"}
      />
      <Container className='border border-blueSecondary border-2 rounded-3 '>
        <Col className='p-3'>
          <FormProvider {...methods}>
            <Form
              onSubmit={methods.handleSubmit((data) => {
                data.priority = Number(data.priority)
                actions.post({...data as RegisterUTI, collaborator_id: id, uti_bed_id: selectedUtisBeds.id });
                
              })}
            >
              <Row>
                <Col>
                  <HookInput name='name' label='Nome' type='text' />
                </Col>
                <Col>
                  <HookInput name='register' label='CPF' type='text' />
                </Col>
                <Col>
                  <HookSelect text="" name='gender' label='Gênero' list={genders} />
                </Col>
                <Col>
                  <HookInput
                    name='birth_date'
                    label='Data de nascimento'
                    type='text'
                  />
                </Col>
              </Row>
              <HookInput
                name='antecedents_comorbidities'
                label='Antecedentes e comorbidades'
                type='text'
              />
              <HookInput
                name='main_deseases'
                label='Diagnósticos principais'
                type='text'
              />
              <HookSelect
                name='precaution'
                text=""
                label='Precaução'
                list={precautions}
              />
              <HookSelect
                name='suport_needed'
                text=""
                label='Suporte necessário'
                list={suports}
              />
              <Row className="align-items-end">
                <Col>
                  <HookSelect
                    name='priority'
                    text=""
                    label='Prioridade'
                    list={priorities}
                  />
                </Col>
                <Col>
                  <Button
                    type='submit'
                    variant='blueButtom'
                    className='my-1 shadow w-25'
                  >
                    <p className='text-white m-0'>Enviar solicitação</p>
                  </Button>
                </Col>
              </Row>
            </Form>
          </FormProvider>
        </Col>
      </Container>
    </div>
  );
}
