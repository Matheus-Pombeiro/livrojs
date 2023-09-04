// Cria referência ao form e às respostas do programa
const frm = document.querySelector("form");
const respMedia = document.querySelector(".resposta__media-das-notas");
const respSituacao = document.querySelector(".resposta__situacao");

// Cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    
    // Evita o envio automático do formulário
    e.preventDefault();

    // Obtém valores de elementos HTML
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    // Calcula a média das notas
    const media = (nota1 + nota2) / 2;

    // Exibe a média das notas
    respMedia.innerText = `Média das notas: ${media.toFixed(2)}`;

    // Altera o texto e o estilo da cor do elemento respSituacao
    if (media >= 7) {

        respSituacao.innerText = `Parabéns, ${nome}! Você foi aprovado(a)`;
        respSituacao.style.color = "blue";

   } else if (media >= 4) {

        respSituacao.innerText = `Atenção, ${nome}! Você está em exame.`;
        respSituacao.style.color = "green";

   } else {

        respSituacao.innerText = `Ops, ${nome}... Você foi reprovado(a).`;
        respSituacao.style.color = "red";

   }
})