// Obtém a referência do formulário e dos h3
const frm = document.querySelector("form");
const respPromocao = document.querySelector(".resposta__promocao");
const respValorAPagar = document.querySelector(".resposta__valor-a-pagar");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado 
frm.addEventListener("submit", (e) => {
    // Obtém a referência dos inputs medicamento e preço respectivamente
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    // Calcula o valor do produto de acordo com a promoção
    const precoPromocao = Math.floor(preco) * 2;

    // Retorna a resposta sobre o valor do medicamento com a promoção
    respPromocao.innerText = `Promoção de ${medicamento}`;
    respValorAPagar.innerText = `Leve 2 por apenas R$: ${precoPromocao.toFixed(2)}`;

    e.preventDefault();
})