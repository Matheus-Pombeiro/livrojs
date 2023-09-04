// Obtém os elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                             // Evita o envio automático do 'form'
    const funcionario = frm.inNome.value;           // Obtém o nome do funcionário

    // Divide o nome em itens de vetor, criados a cada ocorrência do espaço
    const partes = funcionario.split(" ");

    let email = "";                                 // Declara uma var com uma string vazia para concatenar as letras
    const tam = partes.length;                      // Obtém o nº de itens do vetor partes

    for (let i = 0; i < tam - 1; i++) {             // Percorre itens do vetor (exceto o último)
        email += partes[i].charAt(0);               // Obtém a letra inicial de cada item
    }

    // Concatena as letras iniciais com a última parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br";

    respDados.innerText = `Email: ${email.toLowerCase()}`;      // Exibe o email (em minúsculas) para o usuário

})