// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê o valor total da compra
const valorTotalDaCompra = Number(prompt("Qual foi o valor da compra? R$ "));

// Processa a variável auxiliar
const aux = Math.floor(valorTotalDaCompra / 20);

// Declara a variável parcelas
let parcelas;

// Condição para calcular o número de parcelas
if (aux == 0) {

    parcelas = 1;

} else if (aux > 6) {

    parcelas = 6;

} else {

    parcelas = aux;

}

// Processa a variável 'valorDasParcelas'
const valorDasParcelas = valorTotalDaCompra / parcelas;

// Saída de dados
console.log(`Você pode pagar em ${parcelas}x de R$ ${valorDasParcelas.toFixed(2)}`);