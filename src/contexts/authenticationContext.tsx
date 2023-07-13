import router from 'next/router';
import { createContext, useState, useContext } from 'react';

interface ContextAuth {
    token: string;
    setToken: (token: string) => void;
    routes: () => void;
}

const AuthContext = createContext<ContextAuth>({} as ContextAuth);

interface AuthContextProps {
    children: React.ReactNode
}

export function AuthProvider({ children }: AuthContextProps) {
    const [token, setToken] = useState("tokenExemplo");

    function routes() {
      if (token) {
        const userType = token;
        console.log(token)
        const jwt = require("jsonwebtoken");
  
        const decodedToken = jwt.decode(token);
        const userRole = decodedToken.role;
        if (userRole === "MEDICO_UTI") {
          router.push("/home");
        } else if (userRole === "MEDICO_GERAL") {
          router.push("/homeGeral");
        } else if (userRole === "ENFERMEIRO") {
          router.push("/homeEnfermeiro");
        }
      } else {
        router.push("/login");
      }
    }
  
    return (
      <AuthContext.Provider value={{ token, setToken, routes }}>
        {children}
      </AuthContext.Provider>
    );
}

export const authContext = () => {
    return useContext(AuthContext);
}