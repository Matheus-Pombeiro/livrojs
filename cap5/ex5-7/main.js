// Cria a referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respSimbolos = document.querySelector(".resposta__simbolos");

// Cria um 'ouvinte' para o elemento form quando ele for clicado
frm.addEventListener("submit", (q) => {

    // Evita o envio automático do 'form'
    q.preventDefault();

    // Cria a referência para o input
    const numeroDeSimbolos = Number(frm.inSimbolos.value);

    // Declara e inicializa a variável 'estrelas' que irá concatenar estrelas e traços
    let estrelas = "";

    // Cria um loop de 1 até numeroDeEstrelas
    for (let i = 1; i <= numeroDeSimbolos; i++) {

        if (i % 2 == 1) {                       // Na posição ímpar do i: *

            estrelas = estrelas + "*";

        } else if (i % 2 == 0) {                // Na posição par do i: -

            estrelas = estrelas + "-";

        }
    }

    // Escreve os símbolos na tela (saída)
    respSimbolos.innerText = estrelas;

})

// Limpa o campo de saída
frm.addEventListener("reset", () => {
    respSimbolos.innerText = "";
})