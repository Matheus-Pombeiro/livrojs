// Cria a referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respDecrescimento = document.querySelector(".resposta__decrescimento");

// Cria um ouvinte para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria a referência para o input
    const numero = Number(frm.inNumero.value);

    // Declara a variável 'decrescao'
    let decrescao = `Entre ${numero} e 1: `;

    // Cria um loop para o decrescimento do número
    for (i = numero; i > 1; i--) {

        decrescao = decrescao + i + ", ";

    }

    // Dentro do loop, a var vai de 'numero' até '2' com vírgula, e aqui foi acrescentado o número '1' à contagem,   mas desta vez com '.' no final. Isso corrige o problema da vírgula e impede que o programa fique muito pesado, pois se tivésse sido usado um 'if' para resolver tal problema aí sim o programa ficaria pesado.
    decrescao = decrescao + i + ".";

    // Exibe a resposta para o usuário
    respDecrescimento.innerText = decrescao;

})

// Limpa o campo 'resposta'
frm.addEventListener("reset", () => {
    respDecrescimento.innerText = "";
})