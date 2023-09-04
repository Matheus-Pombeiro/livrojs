// Obtém elementos do formulário
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

const clubes = [];                          // Declara um vetor de escopo global

// 'Escuta' o botão 'submit' no formulário
frm.addEventListener("submit", (e) => {

    e.preventDefault();                         // Evita o envio automático do 'form'

    const nome = frm.inClube.value;             // Obtém os clubes enviados pelo usuário

    clubes.push(nome);                          // Adiciona clube oa vetor

    frm.reset();                                // Limpa os campos do 'form'
    frm.inClube.focus();                        // Posiciona o cursor

    frm.btListar.dispatchEvent(new Event("click"));         // Dispara um evento 'click' no botão 'btListar'

});

frm.btListar.addEventListener("click", () => {              // 'Escuta' o 'click' em 'btListar'

    if (clubes.length == 0) {                             // Se o vetor estiver vazio

        alert("Nenhum clube foi cadastrado ainda...");          // Exibe um alerta
        inClube.focus();                                        // Posiciona o cursor
        return;                                                 // Retorna

    }

    let lista = "";                             // Declara a var 'lista' com uma string vaziapara concatenar os clubes
    
    for (const clube of clubes) {        // Percorre o vetor

        lista += clube + "\n";                  // Atribui dados a var 'lista'

    }

    respDados.innerText = lista;                // Exibe a lista para o usuário

});

frm.btTabela.addEventListener("click", () => {              // 'Escuta' o 'click' em 'btListar'

    const tam = clubes.length;                  // Declara e inicializa a var 'tam'
    const ultimo = tam - 1;                     // Declara e processa a var 'ultimo'

    if (tam == 0 || (tam % 2 == 1)) {             // Se o nº de itens do vetor estiver vazio ou for ímpar

        alert("O número de clubes deve ser par");           // Exibe um alerta
        inClube.focus();                        // Posiciona o cursor
        return;                                 // Retorna

    }

    let tabela = "";                            // Declara a var 'tabela' com uma string vaziapara concatenar os jogos
    
    for (i = 0; i < tam / 2; i++) {

        tabela += clubes[i] + " X " + clubes[ultimo - i] + "\n";        // Adiciona dados a var 'tabela'

    }


    respDados.innerText = tabela;               // Exibe a tabela para o usuário

});