// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays)!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Cidades:");

// Declara e define o conteúdo inicial do vetor e exibe o vetor
const cidades = ["Terra Boa", "Nova York", "Tóquio", "Lisboa"];

// Cria uma estrutura de repetição (loop) para a contagem e exibição dos elementos do vetor 'cidades'
for (let i = 0; i < cidades.length; i++) {

    console.log(cidades[i]);        // Exibe o elemento na posição 'i'

}

console.log("-".repeat(40));        // Repete a string '-' 40x
console.log(cidades.toString());    // Converte o conteúdo do vetor 'cidades' em uma string
console.log(cidades.join(" - "));   // Converte o conteúdo do vetor 'cidades' em uma string e adiciona os caracteres ' - '