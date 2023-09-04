// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre desestruração de objetos!");
console.log("-".repeat(40));            // Repete a string "." 40x
console.log("Idades:");

// Declara e inicializa o vetor 'idades'
const idades = [12, 16, 15, 17, 14];

// Declara uma variável de controle
let maiores = false;

// Declara um loop para percorrer o vetor
for (const idade of idades) {

    if (idade >= 18) {                  // Se a idade for maior que 18

        console.log(idade);
        maiores = true;

    }
}

if (!maiores) {                         // Se não houver idades maiores que 18

    console.log("Não há idades maiores que 18 na lista");
    
}