// Obtendo as referências do formulário e dos h3
const frm = document.querySelector("form");
const respModeloVeiculo = document.querySelector(".resposta__modelo-veiculo");
const respEntrada = document.querySelector(".resposta__entrada");
const respParcelas = document.querySelector(".resposta__parcelas");

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value; // Obtém o valor do input do Veículo
    const preco = Number(frm.inPreco.value); // Obtém o valor do input do Preço

    const calcEntrada = preco * 0.5; // Descobre 50% do valor do preço
    const calcParcelas = (preco - calcEntrada) / 12; // Descobre o valor de 12 parcelas do valor restante do carro, isto é, após ter sido paga a entrada

    // Exibe as respostas
    respModeloVeiculo.innerText = `Promoção: ${veiculo}`;
    respEntrada.innerText = `Entrada de R$: ${calcEntrada.toFixed(2)}`;
    respParcelas.innerText = `+12x de R$${calcParcelas.toFixed(2)}`;

    e.preventDefault(); // Evita o envio automático do formulário
});