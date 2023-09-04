// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays)!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Letras:");

// Declara e define o conteúdo inicial do vetor
const letras = ["A", "B", "C", "D"];

// Obtém os 2 últimos elementos
const letras2 = letras.slice(-2);

// Obtém os elementos do início até o fim, exceto o último
const letras3 = letras.slice(0, -1);

// Exibes as letras
console.log(letras);        // ['A', 'B', 'C', 'D']
console.log(letras2);       // ['C', 'D']
console.log(letras3);       // ['A', 'B', 'C']

// Remove 1 elemento a partir da posição 2 e exibe o vetor
const retira = letras.splice(2, 1);
console.log(retira);        // ['C']

// O método 'slice' não modifica o conteúdo do vetor original, enquanto que o método 'splice' sim