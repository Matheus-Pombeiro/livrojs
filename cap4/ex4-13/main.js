// Cria a referência para o 'form' e para as 'respostas'
const frm = document.querySelector("form");
const respETriangulo = document.querySelector(".resposta__e-trinagulo");
const respTipoTriangulo = document.querySelector(".resposta__tipo-do-triangulo");

// Cria um 'ouvinte' para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria a referência para os inputs
    const ladoA = Number(frm.inLadoA.value);    
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    // Condição para verificar se os lados podem formar um triângulo
    if (ladoA <= ladoB + ladoC && ladoB <= ladoA + ladoC & ladoC <= ladoA + ladoB) {

        respETriangulo.innerText = "Os lados podem formar um triângulo";

        // Triângulo Equilátero
        if (ladoA == ladoB && ladoB == ladoC) {

            respTipoTriangulo.innerText = "Tipo: Equilátero";

        // Triângulo Isósceles
        } else if (ladoA == ladoB && ladoB != ladoC || ladoB == ladoC && ladoC != ladoA || ladoA == ladoC && ladoC!= ladoB) {   

            respTipoTriangulo.innerText = "Tipo: Isósceles";

        // Triângulo Escaleno
        } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {    

            respTipoTriangulo.innerText = "Tipo: Escaleno";

        }
    
    } else {

        respETriangulo.innerText = "Os lados não podem formar um triângulo";
        respTipoTriangulo.innerText = "";
        return;

    }
})

// Limpa os campos de 'respostas'
frm.addEventListener("reset", () => {
    respETriangulo.innerText = "";
    respTipoTriangulo.innerText = "";
})