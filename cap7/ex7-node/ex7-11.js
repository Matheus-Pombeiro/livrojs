// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Strings e Datas em JS");        // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela

const parcelas = Number(prompt("Nº de Parcelas: "));    // Lê o nº de parcelas de uma compra
const hoje = new Date();                                // Obtém a data de atual


if (parcelas == 0 || isNaN(parcelas)) {                 // Se o valor inserido for inválido
    console.log("Erro... Nº de Parcelas Inválido!");    // Exibe mensagem negativa
} else {
    for (let i = 1; i <= parcelas; i++) {                           // Senão
        hoje.setMonth(hoje.getMonth() + 1);                         // Soma 1 mês a cada iteração (repetição)
        const dia = hoje.getDate();                                 // Obtém o dia
        const mes = hoje.getMonth() + 1;                            // Obtém o mês (o 1º mês em JS começa com 0 e vai até 11)
        const ano = hoje.getFullYear();                             // Obtém o ano

        const diaZero = dia < 10 ? "0" + dia : dia;                 // Ajusta a casa decimal no dia
        const mesZero = mes < 10 ? "0" + mes : mes;                 // Ajusta a casa decimal no mês

        console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`);     // Exibe as parcelas
    }
}