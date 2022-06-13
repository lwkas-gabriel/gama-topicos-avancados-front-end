//boolean
const contaPaga: boolean = false;

//number

const idade: number = 4;

const avaliacao: number = 5.5;

//string

const nome: string = "lucas";

//array

const lista2: number[] = [1, 2, 3]
//ou
const lista: Array<number> = [1, 2, 3];


//tuple = voce define os tipos e posições - e pode mesclar os tipos que tem dentro da tupla

let jogadores: [string, string, string];
jogadores = ['teste', 'teste', 'teste',]

//enum

enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003",
}

const estadoAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//any

const retornoAPI: any[] = [123, "teste", false]
const retornoDaAPI: any = {
    ///qualquer coisa
}

//void

function printarTela(mensagem: String): void {
    console.log(mensagem);
}

//null e undefined

const u: undefined = undefined;

const n: null = null;

// object

function criar(objeto: object) {
    //...
}

criar({ algo: "", algo2: 123 });

//never

function loop(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro("teste")
}

//union types

const nota: string | number = 6;
function exibirNota(nota: number | string) {
    console.log(`a sua nota eh ${nota}`);
}

//alias 
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionarios: Funcionario[] = [
    {
        nome: "lucas",
        sobrenome: "gabriel",
        dataNascimento: new Date()
    },
    {
        nome: "joão",
        sobrenome: "felipe",
        dataNascimento: new Date()
    }
];

function teste(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log(funcionario.nome);
    }
}

// valores nulos ou opcionais

let altura: number | null = 1.6
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'victor',
    telefone1: '1393483',
}

//Type Assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);