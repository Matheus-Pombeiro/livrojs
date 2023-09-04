// Cria uma referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respNumerosPares = document.querySelector(".resposta__numeros-pares");

// Cria um 'ouvinte' para quando o elemento 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria uma referência para o 'input'
    const numero = Number(frm.inNumero.value);

    // Declara as variáveis 'numerosPares' e 'resposta'
    let numerosPares = 2;
    let resposta = `Pares entre 1 e ${numero}: `;

    // Cria um loop 'do...while' para a contagem e exibição dos números pares
    do {

        if (numero == 0 || isNaN(numero)) {

            respNumerosPares.innerText = "É preciso digitar um número válido";
            return;

        } else if (numerosPares % 2 == 0) {

            resposta = resposta + numerosPares + ", ";
            respNumerosPares.innerText = resposta;
            numerosPares += 2;

        }

    } while (numerosPares < numero);
})

// Limpa o campo de resposta
frm.addEventListener("reset", () => {
    respNumerosPares.innerText = "";
})