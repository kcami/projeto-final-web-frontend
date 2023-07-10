import React, { useState } from 'react'
import axios from "axios";
import { AuthLogin, AuthRaw, AuthCreate } from "../@types/auth";
import { AlertError } from "../components/AlertError";
import { AlertSucess } from "../components/AlertSucess";
const baseUrl = "http://localhost:3333";


export interface userActions {
    // get: (roomID?: string) => Promise<void>;
    // put: ( roomID: string, putObject: any ) => Promise<void>;
    login: (body: AuthLogin) => Promise<void>;
    postUser: (body: AuthCreate) => Promise<void>;
    // delete: (roomID: string) => Promise<void>;
}

export const useAuth = (): {loading: boolean, actions: userActions} => {
    const [loading, setLoading] = useState(true);

    async function login( body: AuthLogin ): Promise<void> {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.post(`${baseUrl}/authenticate`,
                    body
                );
                if (response.data) {
                    //setRoom(response.data);
                    setLoading(false);
                    AlertSucess("Login realizado com sucesso!")
                }
            } catch (err) {
                setLoading(false);
                AlertError("Ocorreu um erro no login!")
            }
        });
    }

    async function postUser(
        body: AuthCreate
    ) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.post(`${baseUrl}/create-room`,
                    body
                );
                if (response.data) {
                    //setRoom(response.data);
                    setLoading(false);
                    AlertSucess("Solicitação de usuário criada com sucesso!")
                }
            } catch (err) {
                setLoading(false);
                AlertError("Não foi possível criar a solicitação de usuário!")
            }
        });
    }

    const actions = {login, postUser};

    return {loading, actions}

};

export default useAuth;