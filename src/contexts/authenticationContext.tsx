import { createContext, useState, useContext } from 'react';

interface ContextAuth {
    token: string;
    setToken: (token: string) => void;
}

const AuthContext = createContext<ContextAuth>({} as ContextAuth);

interface AuthContextProps {
    children: React.ReactNode
}

export function AuthProvider({ children }: AuthContextProps) {
    const [token, setToken] = useState("tokenExemplo");
  
    return (
      <AuthContext.Provider value={{ token, setToken }}>
        {children}
      </AuthContext.Provider>
    );
}

export const authContext = () => {
    return useContext(AuthContext);
}