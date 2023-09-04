// Obtendo a referência dos elementos de formulário e resposta
const frm = document.querySelector("form");
const respTitulo = document.querySelector(".resposta__titulo");
const respDuracao = document.querySelector(".resposta__duracao");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value; // Obtém o valor do input titulo
    const duracao = Number(frm.inDuracao.value); // Obtém o valor do input duração

    const horas = Math.floor(duracao / 60); // Divide a duracao por 60 e arredonda para baixo
    const minutos = duracao % 60; // Por meio do resto da divisão é possível obter os minutos

    // Exibe as respostas
    respTitulo.innerText = titulo;
    respDuracao.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault(); // Evita o envio automático do formulário
});