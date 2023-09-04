// Mensagens de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre seus métodos 'indexOf()', 'lastIndexOf()' e 'includes()'!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Idades: ");

// Declara e inicializa o vetor 'idades'
const idades = [5, 6, 8, 3, 6, 9];

// Exibe as idades
console.log(idades);

// Exibe as idades de acordo com os métodos usados
console.log(idades.indexOf(6));         // Retorna 1 (posição)
console.log(idades.lastIndexOf(6));     // Retorna 4 (posição)
console.log(idades.indexOf(7));         // Retorna -1 (conteúdo inexistente)
console.log(idades.includes(3));        // retorna true (conteúdo existente)