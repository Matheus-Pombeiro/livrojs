// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre seus métodos 'for...of' e 'forEach()'!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Cidades:");

// Declara e define o conteúdo inicial do vetor e exibe o vetor
const cidades = ["Terra Boa", "Nova York", "Tóquio", "Lisboa"];

// Apresentação do conteúdo do vetor 'cidades' usando o 'for...of'
console.log("Usando o 'for...of':")
for (const cidade of cidades) {

    console.log(cidade);

}

// Apresentação do conteúdo do vetor 'cidades' usando o 'forEach()'
console.log("Usando o 'forEach()':")
cidades.forEach((cidade, i) => {

    console.log(`${i+1}ª Cidade: ${cidade}`);
    
})