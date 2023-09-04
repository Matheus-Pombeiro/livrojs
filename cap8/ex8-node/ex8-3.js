// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Funções e Eventos em JS");      // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const nome = prompt("Nome do(a) Aluno(a): ");   // Lê o nome do(a) aluno(a)

// Declara uma função com o operador rest para o vetor 'notas'
const calcularMedia = (...notas) => {

    const num = notas.length;       // A var 'num' recebe o tamanho do vetor 'notas'

    if  (num == 0) {
        console.log("Erro... é preciso informar as notas.");    // Mensagem de erro
        return;                                                 // Retorna
    }

    let soma = 0;           // Declara a var 'soma' com o valor inicial de '0' para acumular as notas

    for (const nota of notas) {         // Percorre o vetor
        soma += nota;                   // Soma o valor do argumento
    }

    const media = soma / num;                       // Calcula a média das notas
    console.log(`Média: ${media.toFixed(2)}`);      // Exibe a média do aluno para o usuário

}

console.log(nome);                  // Exibe o nome do(a) aluno(a)
console.log("-".repeat(20));        // Exibe 20 traços na tela
calcularMedia(8, 9);                // Exibe a média do(a) aluno(a)