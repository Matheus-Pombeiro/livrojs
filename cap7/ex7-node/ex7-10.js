// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Strings e Datas em JS");        // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const altura = Number(prompt("Altura da Árvore: "));                // Lê o tamanho da Árvore
console.log();                                                      // Deixa uma linha em branco

// Cria um loop para a exibição das linhas da Árvore
for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - i);                      // Calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(i*2));     // Exibe cada linha
}