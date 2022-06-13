"use strict";
//boolean
const contaPaga = false;
//number
const idade = 4;
const avaliacao = 5.5;
//string
const nome = "lucas";
//array
const lista2 = [1, 2, 3];
//ou
const lista = [1, 2, 3];
//tuple = voce define os tipos e posições - e pode mesclar os tipos que tem dentro da tupla
let jogadores;
jogadores = ['teste', 'teste', 'teste',];
//enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const estadoAprovacao = StatusAprovacao.Aprovado;
//any
const retornoAPI = [123, "teste", false];
const retornoDaAPI = {
///qualquer coisa
};
//void
function printarTela(mensagem) {
    console.log(mensagem);
}
//null e undefined
const u = undefined;
const n = null;
// object
function criar(objeto) {
    //...
}
criar({ algo: "", algo2: 123 });
//never
function loop() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("teste");
}
//union types
const nota = 6;
function exibirNota(nota) {
    console.log(`a sua nota eh ${nota}`);
}
const funcionarios = [
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
function teste(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log(funcionario.nome);
    }
}
teste(funcionarios);
