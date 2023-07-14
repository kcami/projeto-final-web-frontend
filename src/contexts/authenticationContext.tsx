import router from 'next/router';
import { createContext, useState, useContext } from 'react';
import jwt_decode, { JwtPayload } from "jwt-decode";

interface ContextAuth {
    token: string;
    setToken: (token: string) => void;
    role: string;
    setRole: (role: string) => void;
    routes: () => void;
}

const AuthContext = createContext<ContextAuth>({} as ContextAuth);

interface AuthContextProps {
    children: React.ReactNode
}
interface TokenPayload extends JwtPayload {
  role: string;
}

export function AuthProvider({ children }: AuthContextProps) {
    const [token, setToken] = useState("tokenExemplo");
    const [role, setRole] = useState("tokenExemplo");

    function routes() {
      if (token) {
        const jwt = require("jsonwebtoken");
        const tokenLocal = localStorage.getItem("token");
        
        const decodedToken = jwt_decode<TokenPayload>(tokenLocal as string, {header: false});
        const userRole = decodedToken.role;
        setRole(userRole);
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
      <AuthContext.Provider value={{ token, setToken, routes, role, setRole }}>
        {children}
      </AuthContext.Provider>
    );
}

export const authContext = () => {
    return useContext(AuthContext);
}