// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê o número
const numero = Number(prompt("Digite um número (centena): "));

// Condição para a possibilidade do número ser menor que 100 e maior ou igual a 1000
if (numero < 100 || numero >= 1000) {
    console.log("Erro... deve ser uma centena.");
    return;
}

// Processa o número
const num1 = Math.floor(numero / 100);      // Obtém o 1º número
const sobra = numero % 100;                 // O que sobra (dezena)
const num2 = Math.floor(sobra / 10);        // Obtém o 2º número
const num3 = sobra % 10;                    // Obtém o 3º número

// Saída de dados (Exibe o número invertido)
console.log(`Invertido: ${num3}${num2}${num1}`);