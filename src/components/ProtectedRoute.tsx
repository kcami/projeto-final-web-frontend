import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o token está presente (por exemplo, cookie ou localStorage)
    const token = localStorage.getItem('token');// obter o token aqui

    if (!token){
      // Redireciona para a página de login se não houver token
      router.push('/');
    } else {
      // Decodifica o token e verifica se o usuário tem acesso permitido
      const jwt = require('jsonwebtoken');
      const decodedToken = jwt.decode(token);// decodificar o token aqui
      const userRole = decodedToken.role;

      if (!allowedRoles.includes(userRole)) {
        // Redireciona para uma página de acesso negado se o usuário não tiver acesso permitido
        router.push('/access-denied');
      }
    }
  }, []);

  return children;
};

export default ProtectedRoute;