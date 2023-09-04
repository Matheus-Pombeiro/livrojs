// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem de entrada
console.log("Programa Criação de Chinchilas");

// Lê o número inicial de chinchilas
let chinchilasInicial = Number(prompt("Nº de Chinchilas: "));

// O Nº de chinchilas deve ser maior ou igual a 2
while (chinchilasInicial < 2) {

    console.log("O Nº de chinchilas deve ser maior ou igual a 2...");
    chinchilasInicial = Number(prompt("Nº de Chinchilas: "));

}

// Lê o número de anos
const numeroDeAnos = Number(prompt("Nº de Anos: "));

// Exibe o número de chinchilas no 1º ano
console.log(`1º ano: ${chinchilasInicial} Chinchilas`);

// Processamento de dados caso o Nº de anos for maior do que 1
if (numeroDeAnos > 1) {

    // Declara e inicializa uma variável para a contagem da reprodução de chinchilas 
    let reproducaoDeChinchilas = chinchilasInicial;

    // Cria um loop para o processamento e exibição dos dados
    for (let i = 2; i <= numeroDeAnos; i++) {
    
        reproducaoDeChinchilas = reproducaoDeChinchilas * 3;
        console.log(`${i}º ano: ${reproducaoDeChinchilas} Chinchilas`);

    }
}