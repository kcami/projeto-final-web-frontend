import { UTIBed, UTIBeds } from '@/@types/utiBeds';
import router from 'next/router';
import { createContext, useState, useContext } from 'react';

interface ContextUTIBeds {
    utisBeds: UTIBed[];
    setUtisBeds: (utiBeds: UTIBed[]) => void;
}

const UTIBedsContext = createContext<ContextUTIBeds>({} as ContextUTIBeds);

interface ContextProps {
    children: React.ReactNode
}

export function UTIBedsProvider({ children }: ContextProps) {
    const [utisBeds, setUtisBeds] = useState<UTIBed[]>([
        {
            id: "348d469b-f729-4dce-b6c0-b11c0bc17825",
            type: "UTI",
            status: "Livre"
        },
        {
            id: "aca201b3-5787-46cc-8699-7898742b8739",
            type: "UTI",
            status: "Livre"
        }]);
  
    return (
      <UTIBedsContext.Provider value={{ utisBeds, setUtisBeds }}>
        {children}
      </UTIBedsContext.Provider>
    );
}

export const utiBedsContext = () => {
    return useContext(UTIBedsContext);
}