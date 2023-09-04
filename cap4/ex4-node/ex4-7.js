// Adiciona pacote ao programa
const prompt = require('prompt-sync')();

// Mensagem de entrada
console.log("Bem vindo(a) ao Clube de Pesca");

// Lê o número de pessoas que contém a família e quantos peixes elas pescaram
const numeroDePessoas = Number(prompt("Quantas pessoas foram ao clube? "));
let numeroDePeixes = Number(prompt("Quantos peixes foram pescados? "));

// Calcula a variável 'entrada'
const entrada = numeroDePessoas * 20;

// Declara as variáveis 'valorDosPeixes' e 'valorAPagar'
let valorDosPeixes;
let valorAPagar;

// Condição para a quantidade extra de peixes pescados
if (numeroDePeixes > numeroDePessoas) {

    numeroDePeixes -= numeroDePessoas;
    valorDosPeixes = numeroDePeixes * 12;

    valorAPagar = entrada + valorDosPeixes;

    console.log(`O valor a pagar é R$: ${valorAPagar.toFixed(2)}`);

} else {

    console.log(`O valor a pagar é R$: ${entrada.toFixed(2)}`);

}