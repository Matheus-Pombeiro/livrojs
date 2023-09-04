// Obtém as referências do formulário e dos h3
const frm = document.querySelector("form");
const respValorPromocao = document.querySelector(".resposta__valor-promocao");
const respValorTerceiroProduto = document.querySelector(".resposta__valor-terceiro-produto");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    // Obtém as referências dos inputs produto e preco respectivamente
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    // Calculando o valor promocional
    const valorTerceiroProduto = preco * 0.5;
    const leveTres = (preco * 2) + valorTerceiroProduto;

    // Retornando as respostas para o usuário
    respValorPromocao.innerText = `${produto} - Promoção: Leve 3 por apenas R$: ${leveTres.toFixed(2)}`;
    respValorTerceiroProduto.innerText = `O 3º produto custa apenas R$: ${valorTerceiroProduto.toFixed(2)}`;

    e.preventDefault();    
});