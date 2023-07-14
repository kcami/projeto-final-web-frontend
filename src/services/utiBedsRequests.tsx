import React, { useState } from "react";
import axios from "axios";
import { AuthLogin, AuthRaw, AuthCreate } from "../@types/auth";
import { AlertError } from "../components/AlertError";
import { AlertSucess } from "../components/AlertSucess";
import { authContext } from "@/contexts/authenticationContext";
import router from "next/router";
import { UTIBeds } from "@/@types/utiBeds";
import { utiBedsContext } from "@/contexts/UTIBedsContext";
const baseUrl = "http://localhost:3333";

export interface userActions {
  get: () => Promise<void>;
}

export const useBedsRequests = (): {
  loading: boolean;
  actions: userActions;
} => {
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
        if(!token) return;
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

  const actions = { get };

  return { loading, actions };
};

export default useBedsRequests;
