// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre os métodos Sort() e Reverse()!");
console.log("-".repeat(40));            // Repete a string "." 40x

// Declara e inicializa o vetor 'nomes'
const nomes = ["Pedro", "Maria", "Ana"]

// Uso do método sort() em 'nomes' e exibe o vetor para o usuário
nomes.sort();
console.log(nomes.join(", "));          // Ana, Maria, Pedro

// Uso do método reverse() em 'nomes' e exibe o vetor para o usuário
nomes.reverse();
console.log(nomes.join(", "));          // Pedro, Maria, Ana

// Declara e inicializa o vetor 'numeros'
const numeros = [50, 100, 2];

// Uso do método sort() em 'numeros' e exibe o vetor para o usuário
numeros.sort();
console.log(numeros.join(", "));        // 100, 2, 50

// Corrige o problema com o ordenamento com uma função e exibe o resultado para o usuário
numeros.sort((a, b) => a - b);
console.log(numeros.join(", "));        // 2, 50, 100