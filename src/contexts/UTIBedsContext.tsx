import { RequestsUTIs } from "@/@types/paciente";
import { UTIBed, UTIBeds } from "@/@types/utiBeds";
import router from "next/router";
import { createContext, useState, useContext } from "react";

interface ContextUTIBeds {
  utisBeds: UTIBed[];
  setUtisBeds: (utiBeds: UTIBed[]) => void;
  requestOpen: boolean;
  setRequestOpen: (requestOpen: boolean) => void;
  selectedUtisBeds: UTIBed;
  setSelectedUtisBeds: (utiBed: UTIBed) => void;
  requestsUTIs: RequestsUTIs[];
  setRequestsUTIs: (requestsUTIs: RequestsUTIs[]) => void;
  selectedRequestsUTI: RequestsUTIs;
  setSelectedRequestsUTI: (requestsUTIs: RequestsUTIs) => void;
}

const UTIBedsContext = createContext<ContextUTIBeds>({} as ContextUTIBeds);

interface ContextProps {
  children: React.ReactNode;
}

export function UTIBedsProvider({ children }: ContextProps) {
  const [utisBeds, setUtisBeds] = useState<UTIBed[]>([]);
  const [selectedUtisBeds, setSelectedUtisBeds] = useState<UTIBed>(
    {} as UTIBed
  );
  const [requestOpen, setRequestOpen] = useState<boolean>(false);
  const [selectedRequestsUTI, setSelectedRequestsUTI] = useState<RequestsUTIs>(
    {
      id: "4596f311-a9f6-43cc-9bc2-01f6c1880188",
      priority: 5,
      status: "Pendente",
      created_at: "2023-07-14T12:04:23.349Z",
      collaborator_id: "1b6bf63d-60df-4ac4-bb1c-9817fe5c118e",
      patient_infos: {
          id: "33d9ec8b-99d5-4aeb-9ea3-86517faa4dc9",
          main_deseases: 'doença',
          precaution: "Padrao",
          antecedents_comorbidities: "comorbidade",
          suport_needed: "suporte",
          patient_id: "340163ef-ccfd-499a-8182-4690b91e4bb9",
          solicitation_id: "4596f311-a9f6-43cc-9bc2-01f6c1880188"
      },
      uti_bed: [
          {
              uti_bed_id: "77733bbd-c4f7-4094-94bf-6c3bde9a8439",
              solicitation_id: "4596f311-a9f6-43cc-9bc2-01f6c1880188"
          }
      ],
      collaborator: {
          user: {
              name: "Camila"
          }
      }
  }
  );
  const [requestsUTIs, setRequestsUTIs] = useState<RequestsUTIs[]>([selectedRequestsUTI, selectedRequestsUTI]);

  return (
    <UTIBedsContext.Provider
      value={{
        utisBeds,
        setUtisBeds,
        selectedUtisBeds,
        setSelectedUtisBeds,
        requestsUTIs,
        setRequestsUTIs,
        selectedRequestsUTI,
        setSelectedRequestsUTI,
        requestOpen,
        setRequestOpen,
      }}
    >
      {children}
    </UTIBedsContext.Provider>
  );
}

export const utiBedsContext = () => {
  return useContext(UTIBedsContext);
};
