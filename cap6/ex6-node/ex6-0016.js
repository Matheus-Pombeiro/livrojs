// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x

// Declara e inicializa o vetor 'numeros'
const numeros = [10, 8, 7, 9, 11, 3, 4, 22, 5, 13, 19];

// Declara e processa o vetor 'pares' com Filter
const pares = numeros.filter(num => num % 2 == 0)           // Adiciona uma condição para o filtro

// Exibe os vetores para os usuários
console.log(`Números: ${numeros.join(", ")}`);
console.log(`Pares: ${pares.join(", ")}`);