// Cria uma referência para os elementos do 'form' e da 'resposta'
const frm = document.querySelector("form");
const respTabuada = document.querySelector(".resposta__tabuada");

// Cria um 'ouvinte' quando o elemento 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria uma referência para o input
    const numero = Number(frm.inNumero.value);

    // Declara a variável tabuada
    let tabuada = "";

    // Cria um laço de repetição do tipo 'for'
    for (i = 1; i <= 10; i++) {

        tabuada = tabuada + numero + " x " + i + " = " + (numero * i) + "\n";    // Calcula a tabuada

    }

    // Exibe a tabuada para o usuário
    respTabuada.innerText = tabuada; 
           
})

// Limpa o campo da resposta
frm.addEventListener("reset", () => {
    respTabuada.innerText = "";
})