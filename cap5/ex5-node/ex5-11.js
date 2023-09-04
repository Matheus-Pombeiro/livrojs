// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem de entrada
console.log("Programa Repete Fruta");

// Lê a fruta digitada e o número de vezes que o usuário deseja exibi-le
const fruta = prompt("Fruta: ");
const numeroDeRepeticoes = Number(prompt("Número de Repetições: "));

// Declara e inicializa a variável 'frutasRepeticoes'
let frutaRepeticoes = "";

// Cria um loop para exibir as reptições da fruta digitada
for (let i = 1; i < numeroDeRepeticoes; i++) {
    frutaRepeticoes = frutaRepeticoes + fruta + " * " 
}

// Exibe a repetição da fruta para o usuário
console.log(frutaRepeticoes + fruta);