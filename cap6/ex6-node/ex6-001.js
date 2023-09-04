// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays)!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Cidades:");

// Declara e define o conteúdo inicial do vetor e exibe o vetor
const cidades = ["Terra Boa"];
console.log(cidades);

// Adiciona uma cidade ao final do vetor e exibe o vetor
cidades.push("Nova York");
console.log(cidades);

// Adiciona uma cidade no início do vetor deslocando os elementos já existentes para posições posteriores, e exibe o vetor
cidades.unshift("Tóquio");
console.log(cidades);

// Remove o último elemento do vetor e exibe o vetor
const ultima = cidades.pop();
console.log(cidades);

// Remove o primeiro elemento do vetor deslocando os elementos já existentes para posições anteriores, e exibe o vetor
const primeira = cidades.shift();
console.log(cidades);