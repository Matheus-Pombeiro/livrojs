// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Strings e Datas em JS");        // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const formula = prompt("Fórmula: ");                // Lê uma fórmula matemática
const erros = [];                                   // Declara um vetor de escopo global
const abreParenteses = formula.split("(");          // Divide a fórmula em partes que começam com '('
const fechaParenteses = formula.split(")");         // Divide a fórmula em partes que começam com ')'
const abreParenteses2 = formula.indexOf("(");       // Localiza a primeira ocorrência de '('
const fechaParenteses2 = formula.indexOf(")");      // Localiza a primeira ocorrência de ')'

if (formula.length == 0) {                          // Se a fórmula for inválida                      
    console.log("Erro... Fórmula inválida");        // Exibe alerta
}

// Se o número de '(' for igual ao número de ')' && se a posição de '(' for menor do que a de ')'
if (abreParenteses.length == fechaParenteses.length && abreParenteses2 < fechaParenteses2) {
    console.log("A Fórmula é válida (em realção aos parenteses)!")      // Mensagem positiva
} else {                                                                // Senão
    console.log("Erro... Fórmula inválida!")                            // Mensagem negativa
}