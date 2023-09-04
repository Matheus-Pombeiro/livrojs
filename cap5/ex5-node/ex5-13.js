// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem de entrada
console.log("Programa Números Perfeitos");

// Lê um número
const numero = Number(prompt("Número: "));

// Declara as vairiáveis de apoio para o processamento
let divisores = "";
let soma = 0;

// Cria um loop para o processamento e a exibição dos dados
for (let i = 1; i <= numero / 2; i++) {

    if (numero % i == 0 && i < numero / 2) {                // Se o número for divisível pelo contador e se o contador for menor que o número / 2...

        divisores = divisores + i + ", ";
        soma = soma + i;
        

    } else if (numero % i == 0 && i == numero / 2) {        // Se o número for divisível pelo contador e se o contador for igual ao número / 2...

        divisores = divisores + i;
        soma = soma + i;

    }
}

// Exibe os divisores e a soma dos divisores para o usuário
console.log(`Divisores de ${numero}: ${divisores} (Soma: ${soma})`);

// Exibe se o número digitado é ou não perfeito
if (numero == soma) {           // Se o número for igual a soma dos seus divisores...

    console.log(`${numero} é um Número Perfeito`);

} else {                        // Se o número for diferente a soma dos seus divisores...

    console.log(`${numero} não é um Número Perfeito...`)

}