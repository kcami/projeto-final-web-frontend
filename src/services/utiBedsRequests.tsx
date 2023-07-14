import React, { useState } from "react";
import axios from "axios";
import { AuthLogin, AuthRaw, AuthCreate } from "../@types/auth";
import { AlertError } from "../components/AlertError";
import { AlertSucess } from "../components/AlertSucess";
import { authContext } from "@/contexts/authenticationContext";
import router from "next/router";
import { RegisterRequestUTI, UTIBeds } from "@/@types/utiBeds";
import { utiBedsContext } from "@/contexts/UTIBedsContext";
const baseUrl = "http://localhost:3333";

export interface userActions {
  get: () => Promise<void>;
  post: (body: RegisterRequestUTI) => Promise<void>; // faz a solicitacao de uma vaga
  getRequestUTI: () => Promise<void>;
}

export const useBedsRequests = (): { loading: boolean; actions: userActions } => {
  const [loading, setLoading] = useState(true);
  const { utisBeds, setUtisBeds } = utiBedsContext();
  const { token } = authContext();

  //const token = localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function get(): Promise<void> {
    await new Promise(async (resolve) => {
      try {
        console.log(token)
        setLoading(true);
        const response = await axios.get(`${baseUrl}/uti-beds`, config);
        console.log(token);
        if (response.status === 200) {
          console.log("Oi")
          setLoading(false);
          setUtisBeds(response.data.uti_beds);
          console.log(utisBeds);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        AlertError("Ocorreu um erro no login!");
      }
    });
  }
  
  async function post(body: RegisterRequestUTI): Promise<void> {
    await new Promise(async (resolve) => {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/register-patient`, body, config);
        if (response.status === 201) {
          setLoading(false);
          console.log("deu certo")
          router.push("/homeGeral");
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        AlertError("Ocorreu um erro no login!");
      }
    });
  }
  async function getRequestUTI(): Promise<void> {
    await new Promise(async (resolve) => {
      try {
        console.log(token)
        setLoading(true);
        const response = await axios.get(`${baseUrl}/solicitation-to-approve`, config);
        console.log(token);
        if (response.status === 200) {
          console.log("Oi")
          setLoading(false);
          setUtisBeds(response.data.uti_beds);
          console.log(utisBeds);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        AlertError("Ocorreu um erro no login!");
      }
    });
  }
  
  const actions = { get, post, getRequestUTI };

  return { loading, actions };
};

export default useBedsRequests;
