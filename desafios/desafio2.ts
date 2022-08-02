// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Atriz,
    Padeiro
}

interface Pessoa2 {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: Pessoa2 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2: Pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa2 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa2 = { 
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}