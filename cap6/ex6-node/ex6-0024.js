// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem inicial
console.log("Informe o valor dos saques ou '0' para sair.");

const saques = [];                          // Decalara um vetor de escopo global

do {                                        // Cria um loop

    const valor = Number(prompt("Saque R$: "));         // Lê o valor do saque

    if (valor == 0) {

        break;                              // Sai da repetição

    }

    saques.push(valor);                     // Adiciona dados ao vetor

    if (valor % 10 == 0) {                  // Se o valor do saque for divisível por 10

        console.log("Saque Realizado com Sucesso!");            // Mensagem de apoio

    } else {

        console.log("Valor Inválido... (deve ser múltiplo de 10)");    // Mensagem de apoio

    }

} while(true);                              // Enquanto verdadeiro

console.log("\nSaques Válidos");            // Mensagem de apoio
console.log("-".repeat(40));                // Exibe 40 traços na tela

const saquesValidos = saques.filter(saque => saque % 10 == 0);            // Filtra os saques válidos (múltiplos de 10)

for (const saque of saquesValidos) {        // Percorre o vetor

    console.log(saque.toFixed(2));          // Exibe o saque

}

const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);           // Soma o total de saques válidos
console.log(`Total Sacado R$: ${totalSacado.toFixed(2)}`);                              // Exibe o total sacado

const saquesInvalidos = saques.length - saquesValidos.length;                   // Processa o Nº de saques inválidos
console.log(`\nNº de Saques Inválidos: ${saquesInvalidos}`);                    // Exibe o Nº de saques inválidos