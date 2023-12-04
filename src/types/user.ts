import {Anamnesis} from "./anamnesis"

export interface User {
    id: string,
    name: string,
    senha:string,
    cpf: string,
    rg:string,
    sexo: string,
    email: string,
    telefone: string,
    rua: string,
    numero: string,
    cidade: string,
    estado: string,
    pais: string,
    anamnese: Anamnesis | undefined
}