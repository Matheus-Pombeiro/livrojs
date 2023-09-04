// Obtém os elementos do formulário e da saída de resposta
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                 // Evita o envio automático do 'form'
    const senha = frm.inSenha.value;    // Obtém a senha informada pelo usuário
    const erros = [];                   // Declara um vetor de escopo local

    // Verifica se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");      // Adiciona dados ao vetor
    }

    // Verifica se não possui números
    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo, 1");        // Adiciona dados ao vetor
    }

    // Verifica se não possui letras minúsculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo, 1");      // Adiciona dados ao vetor
    }

    // Verifica se não possui letras maiúsculas ou se possui apenas 1
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir letras maiúsculas (no mínimo, 2)");     // Adiciona dados ao vetor
    }

    // Verifica se não possui símbolos ou "_"
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)");       // Adiciona dados ao vetor
    }

    // Se o vetor está vazio (segnifica que não foram encontrados erros)
    if (erros.length == 0) {
        respDados.innerText = "Ok! Senha Válida";                               // Exibe mensagem positiva
    } else {                                                                    // Senão
        respDados.innerText = `Erro... A senha deve ${erros.join(", ")}`;       // Exibe mensagem negativa
    }

});