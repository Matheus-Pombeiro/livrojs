// Cria referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respParOuImpar = document.querySelector(".resposta__par-ou-impar");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do form
    e.preventDefault();

    // Cria referência para o número
    const numero = frm.inNumero.value;

    // Condição para o número par ou ímpar
    if (numero % 2 == 0) {

        respParOuImpar.innerText = `O número ${numero} é par.`;

    } else if (numero % 2 == 1) {

        respParOuImpar.innerText = `O número ${numero} é ímpar.`;

    }
})

// Limpa os campo da resposta
frm.addEventListener("reset", () => {
    respParOuImpar.innerText = "";
})