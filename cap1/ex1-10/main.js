// Lendo os valores do jantar na pizzaria (entrada)
const total = Number(prompt("Qual foi o valor total das pizzas? R$ "));
const clientes = Number(prompt("Quantos clientes vão pagar a conta?"));

// Calculando os valores a pagar por cliente (processamento)
const valorPorCliente = total / clientes;

// Mostrando os valores para o usuário (saída)
alert(`Valor das Pizzas: R$ ${total.toFixed(2)}\nNúmero de Clientes: ${clientes}\nValor a Pagar por Cliente: R$ ${valorPorCliente.toFixed(2)}`);