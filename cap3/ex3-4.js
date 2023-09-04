// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê os dados de entrada
const peso = Number(prompt("Peso da ração (kg): "));
const consumoDiario = Number(prompt("Consumo diário (gr): "));
const duracao = Number(prompt("Duração (dias): "));

// Processa os dados (cálculos)
const sobra = ((peso * 1000) - (duracao * consumoDiario));

// Saída dos dados
console.log(`Sobra (gr): ${sobra.toFixed(2)}`);
