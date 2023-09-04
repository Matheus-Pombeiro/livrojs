// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Strings e Datas em JS");        // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const anoAtual = new Date().getFullYear();                                          // Obtém o ano atual
const idade = Number(prompt(`Quantos anos você comemora em ${anoAtual}? `));        // Lê a idade do usuário
const anoNasc = anoAtual - idade;                                                   // Cacula a data de nascimento do usuário
console.log(`Então você nasceu em ${anoNasc}`);                                     // Exibe o ano de nascimento do usuário