// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Strings e Datas em JS");        // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela
const palavra = prompt("Palavra: ");                                // Lê uma palavra
const tam = palavra.length;                                         // Obtém o tamanho de 'palavra'

// A var 'inverso' inicia com a última letra da palavra em caixa alta
let inverso = palavra.charAt(tam - 1).toUpperCase(); 

// Cria um loop decrescente que percorre as demais letras da palavra
for (let i = tam - 2; i >= 0; i--) {
    inverso += palavra.charAt(i).toLowerCase();         // Converte as letras em minúsculas
}

// Exibe a palavra original e a invertida
console.log(`Palavra: ${palavra}\nInvertida: ${inverso}`);