// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre seu método 'forEach()'!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Somando Valores de um Array:");

// Declara e inicializa o array 'numeros' e a var 'soma'
const numeros = [5, 10, 15, 20];
let soma = 0;

// Exibe o vetor 'numeros' para o usuário
console.log(numeros);

// Processamento e apresentação do conteúdo do vetor 'numeros' usando o 'forEach()'
numeros.forEach(num => soma += num);
console.log(`Soma dos Números: ${soma}`);