// Obtém elementos da página
const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");     // Essa é uma das formas de referenciar um 'checkbox'

// Declara uma função para montar a tabela
const montarTabela = () => {

    // Se houver dados salvos em 'localStorage()'...
    if (localStorage.getItem("jogoPalavra")) {

        // Obtém conteúdo e converte em elementos de vetor na ocorrência de ";"
        const palavra = localStorage.getItem("jogoPalavra").split(";");
        const dica = localStorage.getItem("jogoDica").split(";");

        // Percorre os elementos do vetor e os insere na tabela
        for (let i = 0; i < palavra.length; i++) {

            const linha = tbPalavras.insertRow(-1);     // Adiciona uma linha na tabela

            // Adiciona colunas na tabela
            const col1 = linha.insertCell(0);
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);
            
            col1.innerText = palavra[i];
            col2.innerText = dica[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";

        }

    }

};

// Ocorre quando o checkbox é alterado. Exibe a lista se marcado, senão, recarrega
ckMostrar.addEventListener("change", () => {

    ckMostrar.checked ? montarTabela() : window.location.reload();

});

// 'Escuta' o click no elemento 'e' de 'tbPalavras' (passagem de parâmetro)
tbPalavras.addEventListener("click", (e) => {

    // Se a classe do elemento alvo clicado contém 'exclui'...
    if (e.target.classList.contains("exclui")) {

        // Acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        // Solicita a confirmação da exclusão da palavra
        if (confirm(`Confirma a Exclusão da Palavra: "${palavra}"?`)) {

            // Remove a linha da tabela, correspondent ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove();

            // Exclui dados de 'localStorage()'
            localStorage.removeItem("jogoPalavra");
            localStorage.removeItem("jogoDica");
            
            // Declara vetores
            const palavras = [];
            const dicas = [];

            // Obtém dados da tabela, acrescentando-os ao vetores
            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            // Salva o conteúdo dos vetores em 'localStorage()' (sem a linha removida)
            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));

        }

    }

});