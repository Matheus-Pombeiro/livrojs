// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê o valor da compra e o nº de parcelas
const valorTotalDaCompra = Number(prompt("Valor R$: "));
const numeroDeParcelas = Number(prompt("Nº de Parcelas: "));

// Processa os dados
const valorParcelas = Math.floor(valorTotalDaCompra / numeroDeParcelas);            // Calcula o valor inteiro de cada paracela 
const valorFinal = valorParcelas + (valorTotalDaCompra % numeroDeParcelas);         // Calcula o valor da última parcela contando com os centavos que não haviam sido incluídos anteriormente

// Cria um loop para a saída das informações das parcelas para o usuário enquanto a variável 'i' for menor do que numero de parcelas
for (let i = 1; i < numeroDeParcelas; i++) { 
    console.log(`${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}`);
}

// Exibe s última parcela para o usuário
console.log(`${numeroDeParcelas}ª Parcela: R$ ${valorFinal.toFixed(2)}`);