// Cria a referência para os elementos 'form' e 'resposta'
const frm = document.querySelector("form");
const respPrimo = document.querySelector(".resposta__primo");

// Cria um 'ouvinte' para quando o elemento 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Cria a referência para o input
    const numero = Number(frm.inNumero.value);

    /* 
    
    Essa é a versão mais fácil de entender, porém é a mais pesada, pois imagine que o número digitado pelo usuário seja '1000', isso vai consumir muita memória de processamento.

    // Declara e inicializa a variável 'numDivisores'
    let numDivisores = 0;

    // Percorre os possíveis divisores de 'numero'
    for (let i = 0; i <= numero; i++) {

        if (numero % i == 0) {      // Verifica se 'i' (1, 2, 3...) é divisor de 'numero'

            numDivisores++;         // Se é, incrementa contador

        }
    }

    // Se possui apenas 2 divisores, é primo
    if (numDivisores == 2) {

        respPrimo.innerText = `${numero} é primo`;

    } else {

        respPrimo.innerText = `${numero} não é primo`;

    }

    Confira logo a baixo deste comentário a versão mais adequada para a solução deste problema.

    */

    // Declara e inicializa a variável 'temDivisor' para servir como uma flag
    let temDivisor = 0;

    // Percorre os possíveis divisores de 'numero'
    for (let i = 2; i <= numero / 2; i++) {

        if (numero % i == 0) {      // Se tem um divisor

            temDivisor = 1;         // Muda o flag
            break;                  // Sai da repetição

        }
    }

    // Se 'numero' > 1 e não possui divisor
    if (numero > 1 && !temDivisor) {

        respPrimo.innerText = `${numero} é Primo`;

    } else {

        respPrimo.innerText = `${numero} não é Primo`;

    }
})

// Limpa o campo da resposta
frm.addEventListener("reset", () => {
    respPrimo.innerText = "";
})