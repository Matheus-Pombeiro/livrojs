// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Funções e Eventos em JS");      // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

// Declara uma arrow function com passagem de parâmetro
const situacao = (nota, media) => {
    if (nota >= media) {
        console.log("Aprovado(a)!");
    } else {
        console.log("Reprovado(a)...");
    }
}

const nome = prompt("Nome do Aluno: ");     // Lê o nome do aluno
const prova = Number(prompt("Nota: "));     // Lê a nota do aluno

situacao(prova, 7);     // Chama a função 'situação' com passagem de parâmetros (nota = prova && media = 7)