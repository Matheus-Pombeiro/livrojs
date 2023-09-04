// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem inicial
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair.");

const clientes = [];                            // Declara o vetor de escopo global

do {                                            // Cria um loop

    const nome = prompt("Nome: ");              // Lê o nome do cliente

    if (nome == "Fim" || nome == "fim") {

        break;                                  // Sai da repetição 

    }

    const idade = Number(prompt("Idade: "));    // Lê a idade do cliente

    clientes.push({nome, idade});               // Adiciona dados ao vetor

    console.log("Ok! Cliente inserido(a) na fila.");                // Mensagem de confirmação

} while(true);                                  // Enquanto verdadeiro

console.log("\nFila Preferencial");             // Mensagem de apoio
console.log("-".repeat(40));                    // Exibe 40 traços na tela

const filaPreferencial = clientes.filter(cliente => cliente.idade >= 60);           // Filtra os clientes com 60 anos ou mais

filaPreferencial.forEach((fila, i) => {         // Percorre o vetor 

    console.log(`${i + 1}. ${fila.nome}`);      // Exibe o nome da fila na posição 'i' + 1
    
});

console.log("\nFila Normal");                   // Mensagem de apoio
console.log("-".repeat(40));                    // Exibe 40 traços na tela

const filaNormal = clientes.filter(cliente => cliente.idade < 60);                  // Filtra os clientes com menos de 60 anos

filaNormal.forEach((fila, i) => {               // Percorre o vetor

    console.log(`${i + 1}. ${fila.nome}`);      // Exibe o nome da fila na posição 'i' + 1

});