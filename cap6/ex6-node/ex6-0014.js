// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x

// Declara e inicializa o vetor 'numeros'
const numeros = [10, 5, 20, 30, 25];

// Declara e processa o vetor 'dobros' com Map
const dobros = numeros.map(num => num * 2);

// Exibe os vetores para o usuário
console.log(`Números: ${numeros.join(", ")}`);
console.log(`Dobros: ${dobros.join(", ")}`);