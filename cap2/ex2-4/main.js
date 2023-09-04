// Obtendo a referência do formulário e do h3
const frm = document.querySelector("form");
const respValorAPagar = document.querySelector("h3");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    // Obtém os valores (em número) dos inputs de preço e de peso respectivamente
    const preco = Number(frm.inPreco.value);
    const peso = Number(frm.inPeso.value);

    // Calcula o valor da comida, sendo que 1 quilo é equivalente à 1000 gramas
    const calcPreco = (preco / 1000) * peso;

    // Retorna a resposta sobre o valor a pagar
    respValorAPagar.innerText = `Valor a Pagar R$: ${calcPreco.toFixed(2)}`;

    e.preventDefault();
});