// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre Map, Filter e Reduce!");
console.log("-".repeat(40));            // Repete a string "." 40x
console.log("Amigos: ")

// Declara e inicializa o vetor 'amigos'
const amigos = [{nome: "Ana", idade: 22},
                {nome: "Marcos", idade: 7},
                {nome: "Matheus", idade: 22},
                {nome: "Magda", idade: 18},
                {nome: "Carla", idade: 34},
                {nome: "Bruna", idade: 20}];

// Declara e processa o vetor 'amigos2' com Filter
const amigos2 = amigos.filter(aux => aux.idade >= 21 || aux.nome.includes("B"));        // Faz um filtro que percorre todo o vetor 'amigos'

// Percorre o vetor 'amigos2' com o 'for...of' e exibe a mensagem para o usuário
for (const amigo of amigos2) {

    console.log(`${amigo.nome} - Idade: ${amigo.idade}`);

}

// Condição para a possibilidade do vetor 'amigos2' estar vazio
if (amigos2.length == 0) {

    console.log("Não há nenhum amigo com idade maior ou igual a 21 anos ou com a letra 'B' no nome...")
    
} 