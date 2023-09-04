// Obtém elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respPalindromo = document.querySelector(".outPalindromo");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                                 // Evita o envio automático do 'form'
    const frase = frm.inFrase.value.replace(/ /g, "").toUpperCase();   // Obtém a frase inserida pelo usuário e tira os espaços em branco da frase
    const tam = frase.length;                           // Obtém o tamanho da frase
    let fraseInversa = "";                              // Declara uma var com uma string vazia para concatenar dados

    for (let i = tam - 1; i >= 0; i--) {                // Cria um loop para obter a frase inversa
        fraseInversa += frase.charAt(i);                // Adiciona letras da frase de trás para frente à var à cada iteração
    }

    if (frase == fraseInversa) {                                    // Se for um palíndromo  
        respPalindromo.innerText = `${frase} é um Palíndromo`;      // Mensagem positiva  
    } else {                                                        // Senão
        respPalindromo.innerText = `${frase} não é um Palíndromo`;  // Mensagem negativa
    }

})