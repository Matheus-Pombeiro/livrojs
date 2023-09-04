// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

console.log("Estou aprendendo sobre Strings e Datas em JS");        // Mensagem inicial
console.log("-".repeat(40));                                        // Exibe 40 traços na tela
const anuncio = prompt("Anúncie uma casa à venda: ");               // Lê o anúncio

let numPalavras = 0;                // Declara e inicializa a var contadora
const tam = anuncio.length;         // Obtém o tamanho do anúncio

for (let i = 0; i < tam; i++) {     // Enquanto 'i' for menor que 'tam'
    if (anuncio.charAt(i) == " ") { // Se encontrou um espaço na string
        numPalavras++;              // Acrescenta contador
    }
}

// Exibe o anúncio e o número de palavras (que é o nº de espaços + 1)
console.log(`Anúncio: ${anuncio}\nNº de Palavras: ${(numPalavras + 1)}`);