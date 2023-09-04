// Obtém os elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respMensagem = document.querySelector(".outMensagem");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                                         // Evita o envio automático do 'form'
    const mensagem = frm.inMensagem.value.toLowerCase();        // Obtém a mensagem inserida pelo usuário e a converte em minúscula

    let msg = "";                                               // Declara uma var com uma string vazia para concatenar a mensagem

    for (let i = 1; i <= mensagem.length; i += 2) {             // Cria um loop para as letras em posições ímpares
        msg += mensagem.charAt(i);                              // Cocatena a mensagem  
    }

    for (let i = 0; i <= mensagem.length; i += 2) {             // Cria um loop para as letras em posições pares
        msg += mensagem.charAt(i);                              // Concatena a mensagem
    }

    respMensagem.innerText = msg;                               // Criptografa a mensagem do usuário

});

// 'Escuta' o click no botão 'btDescriptografar'
frm.btDescriptografar.addEventListener("click", () => {

    const mensagem = frm.inMensagem.value;                      // Obtém a mensagem inserida pelo usuário
    respMensagem.innerText = mensagem;                          // Descriptografa a mensagem do usuário

});