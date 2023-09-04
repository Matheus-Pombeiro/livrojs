// Mensagem de entrada
console.log("Estou aprendendo sobre vetores (arrays) e sobre inserção de objetos!");
console.log("-".repeat(40));        // Repete a string "." 40x
console.log("Carros:");

// Declara o vetor 'carros'
const carros = [];

// Adiciona atributos ao vetor
carros.push({modelo: "Sandero", preco: 46500});
carros.push({modelo: "Palio", preco: 37800});

// Declara e inicializa as var 'modelo' e 'preco' que serão atribuídas ao vetor 'carros'
const modelo = "Fiesta";
const preco = 46800;
carros.push({modelo, preco});       // Ou carros.push({modelo: modelo, preco: preco})

// Percorre o vetor 'carros' e apresenta o seu conteúdo para o usuário
for (const carro of carros) {

    console.log(`${carro.modelo} - R$: ${carro.preco}`);
    
}