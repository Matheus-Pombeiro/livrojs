// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê os dados do programa
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));

// Calcula o valor de entrada e o valor da parcela
const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;

// Exibe as respostas
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`12x de R$ ${parcela.toFixed(2)}`);