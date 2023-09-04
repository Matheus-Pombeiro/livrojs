// Lendo um número (entrada)
const num = Number(prompt("Digite um número:"));

// Calculando os vizinhos mais próximos desse número (processamento)
const vizinhoAnterior = num - 1;
const vizinhoPosterior = num + 1;

// Mostrando o resultado para o usuário (saída)
alert(`Número digitado: ${num}\nVizinho Anterior: ${vizinhoAnterior}\nVizinho Posterior: ${vizinhoPosterior}`);