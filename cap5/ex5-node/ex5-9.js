// Adiciona o pacote ao programa
const prompt = require("prompt-sync")();

// Lê o nome do produto e o número de etiquetas
const produto = prompt("Produto: ");
const numeroDeEtiquetas = Number(prompt("Nº de Etiquetas: "));

// Cria o loop para a exibição das etiquetas (saída)
for (let i = 1; i <= numeroDeEtiquetas / 2; i++) {

    // Exibe as etiquetas de 2 em 2 com espaço entre elas
    console.log(`${produto.padEnd(30)} ${produto}`);

}

// Se o nº de etiquetas for ímpar, imprime mais uma etiqueta
if (numeroDeEtiquetas % 2 == 1) {

    console.log(produto);

}