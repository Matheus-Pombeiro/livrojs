// Cria a referência para o 'form' e as 'respostas'
const frm = document.querySelector("form");
const respTempo = document.querySelector(".resposta__tempo");
const respTroco = document.querySelector(".resposta__troco");

// Cria um 'ouvinte' para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do form
    e.preventDefault();

    // Cria referência para o input 'valor'
    const valor = Number(frm.inValor.value);

    // Declara a variável 'troco'
    let troco;

    // Condição para valores e tempo no parquímetro
    if (valor < 1) {

        respTempo.innerText = "Tempo Insuficiente";
        respTroco.innerText = "";
        return;

    } else if (valor >= 1 && valor < 1.75) {

        respTempo.innerText = "Tempo: 30 min";
        respTroco.innerText = "";

        if(valor > 1) {

            troco = valor - 1;
            respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;

        }
    } else if (valor >= 1.75 && valor < 3) {

        respTempo.innerText = "Tempo: 60 min";
        respTroco.innerText = "";

        if (valor > 1.75) {

            troco = valor - 1.75;
            respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;

        }
    } else if (valor >= 3) {

        respTempo.innerText = "Tempo: 120 min";
        respTroco.innerText = "";

        if (valor > 3) {

            troco = valor - 3;
            respTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
        }
    }
})

// Limpa os campos das respostas
frm.addEventListener("reset", () => {
    respTempo.innerText = "";
    respTroco.innerText = "";
})