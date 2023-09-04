// Obtém referência ao 'form'
const frm = document.querySelector("form");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const palavra = frm.inPalavra.value.trim(); // Obtém a palavra inserida pelo usuário e remove os espaços inseridos no começo e no fim
    const dica = frm.inDica.value;              // Obtém a dica inserida pelo usuário

    if (palavra.includes(" ")) {                        // Se a palavra contém espaços...
        alert("Erro... Digite apenas uma palavra");     // Exibe um alerta
        frm.palavra.focus();                            // Posiciona o cursor
        return;                                         // Retorna
    }

    // Se já existem dados em 'localStorage()', grava conteúdo anterior + ";" + palavra / dica
    if (localStorage.getItem("jogoPalavra")) {        
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra")  + ";" + palavra);
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
    } else {    // Senão, é a primeira inclusão: grava apenas a palavra / dica
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }

    // Verifa se salvou
    if (localStorage.getItem("jogoPalavra")) {
        alert(`Ok! Palavra "${palavra}" Cadastrada com Sucesso`)
    }

    frm.reset();                // Limpa o 'form'
    frm.inPalavra.focus()       // posiciona o cursor

});