// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x

// Declara e inicializa o vetor 'amigos'
const amigos = [{nome: "Ana", idade: 22},
                {nome: "Marcos", idade: 7},
                {nome: "Matheus", idade: 22},
                {nome: "Magda", idade: 18},
                {nome: "Carla", idade: 34},
                {nome: "Bruna", idade: 20}];

// Declara e processa os vetores 'soma' e 'todos' percorrendo o vetor 'amigos' com Reduce()
const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0);
const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + ", ", "");

// Exibe os vetores 'soma' e 'todos' para o usuário
console.log(`Amigos: ${todos}`);
console.log(`Soma das idades dos amigos: ${soma}`);