export interface AuthLogin {
    medical_register: string
    password: string
    role: string
}

export interface AuthRaw {
    token: string
}

export interface AuthCreate {
    name: string
    register: string
    medical_register: string
    role: string
    email: string
    password: string
}