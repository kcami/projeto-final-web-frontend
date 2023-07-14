export interface Paciente {
  nome: string;
  diagnosticos: string;
  precaucao: string;
  suporte: string;
  parecer: number;
}

export interface RequestsUTIs {
  id: string;
  priority: number;
  status: string;
  created_at: string;
  collaborator_id: string;
  patient_infos: PatientInfos;
  uti_bed: UtiBed[];
  collaborator: Collaborator;
}

export interface PatientInfos {
  id: string;
  main_deseases: string;
  precaution: string;
  antecedents_comorbidities: string;
  suport_needed: string;
  patient_id: string;
  solicitation_id: string;
}

export interface UtiBed {
  uti_bed_id: string;
  solicitation_id: string;
}

export interface Collaborator {
  user: User;
}

export interface User {
  name: string;
}
