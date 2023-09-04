// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem inicial
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair.");

// Declara o vetor de escopo global
const alunos = [];

// Cria um loop
do {

    const nome = prompt("Nome: ");                  // Lê o nome do aluno

    if (nome == "Fim" || nome == "fim") {

        break;                                      // Sai da repetição

    }

    const nota = Number(prompt("Nota: "))           // Lê a nota do aluno

    alunos.push({nome, nota});                      // Adiciona os dados ao vetor

    console.log("Ok! Aluno(a) cadastrado(a).");     // Mensagem de confirmação

} while(true);

console.log("-".repeat(40));                        // Exibe 40 traços na tela

// Obtém a maior nota do vetor
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);

console.log(`Maior Nota: ${maior}`);                // Exibe a maior nota

// Verifica se tem destaques na turma
if (maior >= 7) {

    const destaques = alunos.filter(aluno => aluno.nota == maior);          // Filtro

    for (const destaque of destaques) {                                     // Percorre os alunos em destaque

        console.log(` - ${destaque.nome}`);                                 // Exibe os nomes precedidos por '-'

    }

} else {

    console.log("Não há alunos em destaque na turma...");

}