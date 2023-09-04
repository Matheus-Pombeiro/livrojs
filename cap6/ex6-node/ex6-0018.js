// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x

// Declara e inicializa o vetor 'numeros'
const numeros = [10, 8, 7, 9];

// Declara e processa a var 'soma' com o método Reduce()
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);      // Note que o parâmetro '0' ao final da declaração serve como um valor a ser iniciado no acumulador, buscando assim evitar erros caso o vetor estaja vazio

// Exibe o vetor 'numeros' e a var 'soma' para o usuário 
console.log(`Números: ${numeros}`);
console.log(`Soma dos valores: ${soma}`);