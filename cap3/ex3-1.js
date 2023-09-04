// Adiciona pacote para entrada de dados
const prompt = require("prompt-sync")();

// Lê os números
const num1 = Number(prompt("1º número: "));
const num2 = Number(prompt("2º número: "));

// Soma os números
const soma = num1 + num2;

// Exibe s resultado
console.log(`A soma entre os números é ${soma}`);