// Cria referência aos elementos 'form' e 'h3'
const frm = document.querySelector("form");
const respHoraFranca = document.querySelector(".resposta__hora-franca");

// Processa os dados
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do form
    e.preventDefault();

    // Recebe o valor do input 'Hora Brasil'
    const horaBrasil = Number(frm.inHoraBrasil.value);

    // Calcula o fuso horário
    let horaFranca = horaBrasil + 5;

    // Condição para ajuste do fuso horário
    if (horaFranca > 24) {
        horaFranca -= 24;
    }

    // Saída dos dados
    respHoraFranca.innerText = `Hora na França: ${horaFranca.toFixed(2)}`;

})

// Limpa os campos de entrada e saída
frm.addEventListener("reset", () => {
    respHoraFranca.innerText = ""
})