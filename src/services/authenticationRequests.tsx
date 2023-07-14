import React, { useState } from "react";
import axios from "axios";
import { AuthLogin, AuthRaw, AuthCreate } from "../@types/auth";
import { AlertError } from "../components/AlertError";
import { AlertSucess } from "../components/AlertSucess";
import { authContext } from "@/contexts/authenticationContext";
import router from "next/router";
const baseUrl = "http://localhost:3333";

export interface userActions {
  login: (body: AuthLogin) => Promise<void>;
  postUser: (body: AuthCreate) => Promise<void>;
  signOut: () => void;
}

export const useAuth = (): { loading: boolean; actions: userActions } => {
  const [loading, setLoading] = useState(true);
  const { token, setToken, routes } = authContext();

  async function login(body: AuthLogin): Promise<void> {
    await new Promise(async (resolve) => {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/authenticate`, body);
        if (response.status == 201) {
          setToken(response.data.token);
          setLoading(false);
          localStorage.setItem("token", response.data.token);
          routes();
          AlertSucess("Login realizado com sucesso!");
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        AlertError("Ocorreu um erro no login!");
      }
    });
  }

  const signOut = async () => {
    setLoading(true);
    localStorage.removeItem("token");
    setToken("");
    setLoading(false);
    router.push("/");
  };

  async function postUser(body: AuthCreate) {
    await new Promise(async (resolve) => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${baseUrl}/register-collaborator`,
          body
        );
        router.push("/");
        AlertSucess("Solicitação de usuário criada com sucesso!");
      } catch (err) {
        setLoading(false);
        // AlertError("Não foi possível criar a solicitação de usuário!");
      }
    });
  }

  const actions = { login, postUser, signOut };

  return { loading, actions };
};

export default useAuth;
