export type Person = {
    id: number,
    nome: string,
    endereco: string,
    telefone: string,
    email: string,
    senha: string,
}

export type Category = {
    id: number,
    nome: string,
}

export type Service = {
    id?: number,
    categoria: number,
    experiencia: number,
    valor: number,
    cidade: number,
}