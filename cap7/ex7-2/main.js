// Obtém o elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respDados = document.querySelector(".entre-letras");

// 'Escuta' quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    e.preventDefault();                                     // Evita o envio automático do formulário
    const fruta = frm.inFruta.value.toUpperCase();          // Obtém o elemento 'fruta' e o transforma em letras maiúsculas
    let resposta = "";                                      // Declara uma var com uma string vazia para concatenar a resposta

    for (const letra of fruta) {            // Percorre a string
        if (letra == fruta.charAt(0)) {     // Se 'letra' for igual ao caractere inicial da string
            resposta += fruta.charAt(0);    // Adiciona o caractere inicial
        } else {                            // Senão...
            resposta += "_";                // Adiciona um sublinhado
        }
    }

    respDados.innerText = resposta;                     // Exibe a resposta
    frm.inFruta.value = "*".repeat(fruta.length);       // Preenche com '*' conforme o tamanho da string
});