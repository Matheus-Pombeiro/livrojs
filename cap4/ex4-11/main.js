// Cria a referência para os elementos do 'form' e da 'resposta'
const frm = document.querySelector("form");
const respSitucao = document.querySelector(".resposta__situacao");

// Cria um 'ouvinte' para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria a referência para os inputs do 'form'
    const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
    const velocidadeDoCondutor = Number(frm.inVelocidadeDoCondutor.value);

    const multaLeve = velocidadePermitida + (velocidadePermitida * 20 / 100);


    // Cria uma condição para as possibilidades de multas
    if (velocidadeDoCondutor <= velocidadePermitida) {

        respSitucao.innerText = "Sem Multa";

    } else if (velocidadeDoCondutor > velocidadePermitida && velocidadeDoCondutor <= multaLeve) {
    
        respSitucao.innerText = "Multa Leve";

    } else if (velocidadeDoCondutor > multaLeve) {

        respSitucao.innerText = "Multa Grave";

    }
})

// Limpa o campo da resposta
frm.addEventListener("reset", () => {
    respSitucao.innerText = "";
})