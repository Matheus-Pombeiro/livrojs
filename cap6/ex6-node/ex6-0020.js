// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x

// Declara e inicializa o vetor 'numeros'
const numeros = [10, 8, 7, 9];

// Declara e processa a var 'maior' com o método Reduce()
const maior = numeros.reduce((a, b) => Math.max(a, b), 0);

// Exibe o vetor 'numeros' e a var 'maior' para o usuário
console.log(`Números: ${numeros}`);
console.log(`Maior valor dentre os números: ${maior}`);