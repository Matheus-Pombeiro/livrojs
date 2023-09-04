// Obtém as referências do formulário e do h3
const frm = document.querySelector("form");
const respValorAPagar = document.querySelector(".resposta__valor-a-pagar");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    // Obtém as referências dos inputs de preço e tempo de uso respectivamente
    const preco = Number(frm.inPreco.value);
    const tempoDeUso = Number(frm.inTempo.value);

    // Calcula o valor a ser pago pelo uso do computador
    const valorAPagar = Math.ceil(tempoDeUso / 15) * preco;

    // Restorna as respostas para o usuário
    respValorAPagar.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)}`;

    e.preventDefault();
})