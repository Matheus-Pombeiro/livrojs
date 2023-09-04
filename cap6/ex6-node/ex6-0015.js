// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x
console.log("Amigos: ")

// Declara e inicializa o vetor 'amigos'
const amigos = [{nome: "Ana", idade: 22},
                {nome: "Marcos", idade: 60},
                {nome: "Matheus", idade: 22},
                {nome: "Magda", idade: 46},
                {nome: "Carla", idade: 34},
                {nome: "Rafael", idade: 38}];

// Declara e processa o vetor 'amigos' com Map
const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2023 - aux.idade}));

// Cria um loop 'for...of' para percorrer o vetor 'amigos2'
for (const amigo of amigos2) {

    console.log(`${amigo.nome} - Nasceu em: ${amigo.nasc}`);

}