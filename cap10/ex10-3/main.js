// Obtém os elementos da página
const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

// Declara a função 'inserirLinha'
const inserirLinha = (titulo, genero) => {

    const linha = tbFilmes.insertRow(-1);       // Adiciona uma linha na tabela

    // Adiciona colunas à linha inserida
    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    // Insere o titulo e o gênero do filme na tabela (cols: 1 e 2), e adiciona o botão excluir com um símbolo (col: 3)
    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
    
}

// Declara a função 'gravarFilme'...
const gravarFilme = (titulo, genero) => {

    // Se houver dados salvos em 'localStorage'
    if (localStorage.getItem("filmesTitulo")) {

        // Obtém os dados e acrescenta ";" e o titulo/genero informado pelo usuário
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

        // Grava os dados em 'localStorage'
        localStorage.setItem("filmesTitulo", filmesTitulo);
        localStorage.setItem("filmesGenero", filmesGenero);
        
    } else {        // Senão, é a primeira inclusão (salva sem delimitador ";")...
        
        localStorage.setItem("filmesTitulo", titulo);
        localStorage.setItem("filmesGenero", genero);

    }

}

// 'Escuta' quando o botão 'submit' é clickado
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const titulo = frm.inTitulo.value;      // Obtém o título do filme
    const genero = frm.inGenero.value;      // Obtém o gênero do filme

    inserirLinha(titulo, genero);       // Chama a função que insere linhas na tabela
    gravarFilme(titulo, genero);        // Chama a função que grava os filmes em 'localStorage'

    frm.submit.disabled = true;     // Desabilita o botão (resposta já foi inserida)
    frm.reset();                // Limpa o 'form'
    frm.inTitulo.focus();       // Posiciona o cursor

})

// 'Escuta' o carregemento da página
window.addEventListener("load", () => {

    // Se houver dados salvos em 'localStorage'
    if (localStorage.getItem("filmesTitulo")) {

        // Obtém o conteúdo e converte em elementos de vetor
        const titulos = localStorage.getItem("filmesTitulo").split(";");
        const generos = localStorage.getItem("filmesGenero").split(";");

        // Percorre os elementos do vetor e os insere na tabela
        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i]);
        }

    }

})

// 'Escuta' o click no botão 'tbFilmes'
tbFilmes.addEventListener("click", (e) => {

    // Se a classe do elemento alvo clickado contém 'exlcui'...
    if (e.target.classList.contains("exclui")) {

        // Acessa o 'pai do pai' do elemento alvo, e obtém o texto do 1º filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText;
        
        // Se confirmada a exlusão do título...
        if (confirm(`Confirma a Exclusão do Filme "${titulo}"?`)) {

            // Remove a linha da tabela, correspondente ao símbolo de exluir clickado
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("filmesTitulo");
            localStorage.removeItem("filmesGenero");

            // Salva novamente (se existir), acessando o conteúdo da tabela
            for (let i = 1; i < tbFilmes.rows.length; i++) {

                // Obtém o conteúdo da tabela (coluna 0: titulo; coluna 1: gênero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                
                gravarFilme(auxTitulo, auxGenero);      // Chama a função 'gravarFilme' com passagem de parâmetro

            }

        }

    }

})