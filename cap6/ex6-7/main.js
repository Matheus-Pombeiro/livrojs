// Obtém os elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

const candidatos = [];                  // Declara um vetor vazio de escopo global

// 'Escuta' o click em 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                             // Evita o envio automático do form
    const nome = frm.inNome.value;                  // Obtém o nome do candidato
    const acertos = Number(frm.inAcertos.value);    // Obtém o número de acertos do candidato
    candidatos.push({ nome, acertos });             // Adiciona dados ao vetor
    frm.reset();                                    // Limpa os campo dos 'form'
    frm.inNome.focus();                             // Posiciona o cursor
    frm.btListar.dispatchEvent(new Event("click")); // Dispara um evento de 'click' em 'btListar'
    
});

// 'Escuta' o click em 'btListar'
frm.btListar.addEventListener("click", () => {

    if (candidatos.length == 0) {                   // Se o vetor estiver vazio
        alert("Por favor, insira um candidato");    // Exibe um alerta
        frm.inNome.focus();                         // Posiciona o cursor
        return;                                     // Retorna
    }

    let lista = "";                                 // Declara uma var com uma string vazia para concatenar os candidatos

    for (const candidato of candidatos) {                       // Percorre o vetor
        const { nome, acertos } = candidato;                    // Desestrutura o objeto
        lista += nome + " - " + acertos + " acertos\n";         // Concatena os valores em 'lista'
    }

    respDados.innerText = lista;                                // Exibe a lista para o usuário

});

// 'Escuta' o click em 'btAprovados'
frm.btAprovados.addEventListener("click", () => {

    if (candidatos.length == 0) {                   // Se o vetor estiver vazio
        alert("Por favor, insira um candidato");    // Exibe um alerta
        frm.inNome.focus();                         // Posiciona o cursor
        return;                                     // Retorna
    }

    const notaMinima = Number(prompt("Número de acertos para a aprovação?"));       // Obtém o a nota mínima necessária
    
    if (notaMinima == 0 || isNaN(notaMinima)) {     // Se o valor inserido for inválido
        alert("Número Inválido");                   // Exibe um alerta
        return;                                     // Retorna
    }
    
    const copiaCandidatos = candidatos.slice();     // Cria uma cópia do vetor
    copiaCandidatos.sort((a, b) => a.acertos - b.acertos);      // Ordena o vetor pelos acertos
    copiaCandidatos.reverse();                      // Inverte a ordem 

    let colocacao = "";                           // Declara uma var com uma string vazia para concatenar os aprovados
    
    for (const candidato of copiaCandidatos) {      // Percorre o vetor
        if (candidato.acertos >= notaMinima) {      // Se o acerto do candidato for maior do que a nota mínima
            colocacao += candidato.nome + " - " + candidato.acertos + " acertos\n";     // Concatena os dados    
        }
    }

    if (colocacao == "") {                                          // Se a var 'colocacao' estiver vazia
        respDados.innerText = "Não há candidato aprovado..."        // Exibe mensagem negativa
    } else {                                                        // Senão
        respDados.innerText = colocacao;                            // Exibe mensagem positiva
    }

})