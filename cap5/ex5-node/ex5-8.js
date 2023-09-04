// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Mensagem de entrada
console.log("Programa anos de Copa do Mundo. Digite 0 para sair.");
console.log("---------------------------------------------------");

// Cria o loop para a verificação do ano em relação à copa do mundo
do {

    const ano = Number(prompt("Ano: "));        // Lê o ano

    if (ano == 0) {                             // Se o ano for igual a 0, sai da repetição
        
        break;

    } else if (ano == 1942 || ano == 1946) {    // Nesse período histórico não houve copa do mundo devido à guerra

        console.log(`Não houve Copa do Mundo em ${ano} (Segunda Guerra Mundial).`);

    } else if (ano >= 1930 && ano % 4 == 2) {   // A 1ª copa do mundo foi 1930. E em relação à 2ª operação nessa declaração, ela é necessária para verificar se é ano de copa, pois esse evento só ocorre a cada 4 anos

        console.log(`Sim! ${ano} é ano de Copa do Mundo!`);

    } else {                                    // Caso não seja ano de copa do mundo

        console.log(`Não... ${ano} não é ano de Copa do Mundo.`);

    }
} while (true);