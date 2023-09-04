// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre desestruração de objetos!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Carro:");

// Declara e inicializa o vetor 'carros'
const carro = { modelo: "Corsa", preco: 59500};
const carroAno = { ...carro, ano: 2020};

// Exibe o vetor 'carroAno'
console.log(carroAno);              // {modelo: "Corsa", preco: 59500, ano: 2020}