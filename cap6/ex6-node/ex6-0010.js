// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre desestruração de objetos!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Pacientes:");

// Declara e inicializa o vetor 'pacientes'
const pacientes = ["Ana", "Carlos", "Sofia", "João"];

// Desetrutura os pacientes
const [atender, proximo, ...outros] = pacientes;

// Exibe os pacientes de acordo com a desetruturação feita
console.log(atender);               // Ana
console.log(proximo);               // Carlos
console.log(outros);                // ["Sofia", "Joao"]