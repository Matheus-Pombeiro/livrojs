// Obtém valores de elementos HTML
const frm = document.querySelector("form");
const respPesoIdeal = document.querySelector(".resposta__peso-ideal");

// Cria 'ouvinte' de evento quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do formulário
    e.preventDefault();

    // Obtém valores do formulário
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const feminino = frm.inFeminino.checked;
    const altura = Number(frm.inAltura.value);

    // Declara a variável peso
    let peso;

    // (Se 'masculino' || se 'masculino == true') && (senão se 'feminino' || senão se 'feminino == true') 
    if (masculino) {

        peso = 22 * Math.pow(altura, 2); // 'Math.pow()' eleva ao quadrado

    } else if (feminino) {

        peso = 21 * Math.pow(altura, 2);

    }

    // Apresenta a resposta para o usuário
    respPesoIdeal.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;

})

frm.addEventListener("reset", ()  => {

    // Limpa o conteúdo do elemento 'h3' que exibe a resposta
    respPesoIdeal.innerText = "";
    
})