export interface UTIBed {
  id: string;
  type: string;
  status: string;
}

export interface UTIBeds {
    uti_beds: UTIBed[];
}

export interface RegisterRequestUTI {
  name: string
  register: string
  gender: string
  birth_date: string
  antecedents_comorbidities: string
  main_deseases: string
  precaution: string
  suport_needed: string
  priority: number
  collaborator_id: string
  uti_bed_id: string
}
export interface RegisterUTI {
  name: string
  register: string
  gender: string
  birth_date: string
  antecedents_comorbidities: string
  main_deseases: string
  precaution: string
  suport_needed: string
  priority: number
}