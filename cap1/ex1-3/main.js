// Recebendo os valores
const primeiroValor = Number(prompt("Digite o 1º valor:"));
const segundoValor = Number(prompt("Digite o 2º valor:"));
const terceiroValor = Number(prompt("Digite o 3º valor:"));
const quartoValor = Number(prompt("Digite o 4º valor:"));
const quintoValor = Number(prompt("Digite o 5º valor:"));

// Calculando os valores
const soma = primeiroValor + segundoValor;
const subtracao = primeiroValor - terceiroValor;
const multiplicacao = primeiroValor * quartoValor;
const divisao = primeiroValor / quintoValor;

// Mostrando os valores
alert(`A soma dos 1º e 2º valores é = ${soma}`);
alert(`A subtração dos 1º e 3º valores é = ${subtracao}`);
alert(`A multiplicação dos 1º e 4º valores é = ${multiplicacao}`);
alert(`A divisão dos 1º e 5º valores é = ${divisao}`);