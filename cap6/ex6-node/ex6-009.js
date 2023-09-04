// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre desestruração de objetos!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Pacientes:");

// Declara e inicializa o vetor 'pacientes'
const pacientes = ["Ana", "Carlos", "Sofia"];

// Desetrutura os pacientes
const [a, b, c] = pacientes;

// Exibe os pacientes de acordo com a desetruturação feita
console.log(a);     // Ana
console.log(b);     // Carlos
console.log(c);     // Sofia