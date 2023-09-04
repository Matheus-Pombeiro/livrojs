// Obtém elementos da página
const frm = document.querySelector("form");
const dvJogos = document.querySelector("#divJogos");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const clube = frm.inClube.value;        // Obtém o clube inserido pelo usuário

    const h5 = document.createElement("h5");        // Cria um elemento 'h5' na página
    h5.className = "text-end me-2";                 // Atribui uma classe em 'h5' para estilização
    h5.style.fontStyle = "italic";                  // Aplica o estilo itálico à fonte do 'h5'

    const texto = document.createTextNode(clube);   // Cria um elemento texto a partir do clube
    
    h5.appendChild(texto);                          // Define 'texto' como filho de 'h5'
    dvJogos.appendChild(h5);                        // Define 'h5' como filho de 'dvJogos'

    frm.reset();                // Limpa o 'form'
    frm.inClube.focus();        // Posiciona o cursor
    
})

// 'Escuta' o click no botão 'btMontar'
frm.btMontar.addEventListener("click", () => {

    const clubes = dvJogos.querySelectorAll("h5");     // Obtém os clubes inseridos pelo usuário

    // Se a quantidade de clubes for ímpar, exibe um alerta de advertência e retorna o programa
    if (clubes.length % 2 == 1 || clubes.length == 0) {
        alert("Erro... Só é possível montar a tabela com uma quantidade par de clubes");
        frm.inClube.focus()
        return;
    }

    const h3 = document.createElement("h3");                        // Cria um elemento 'h3' na página
    const texto = document.createTextNode("Tabela de Jogos");       // Cria um elemento texto
    h3.appendChild(texto);                                          // Define 'texto' com filho de 'h3'
    dvJogos.appendChild(h3);                                        // Define 'h3' como filho de 'dvJogos'

   
    const tabela = document.createElement("table");     // Cria uma tabela na página
    tabela.className = "table table-striped";           // Atirbui estilo à tabela
    dvJogos.appendChild(tabela);                        // Define 'tabela' como filha de 'dvJogos'

    let linha;      // Declara uma var para auxiliar no desenvolvimento da tabela

    // Declara um loop para o desenvolvimento da tabela
    for (let i = 0; i < clubes.length; i++) {
        if (i % 2 == 0) {                               // Se a 'i' for par...
            linha = tabela.insertRow(-1);               // Adiciona uma nova linha ao fim da tabela
            const col1 = linha.insertCell(0);           // Insere uma nova célula na 1º coluna
            col1.textContent = clubes[i].innerText;     // Insere um clube em 'col1'
        } else {                                        // Senão, se for ímpar...
            const col2 = linha.insertCell(1);           // Insere uma nova célula na 2º coluna
            col2.textContent = clubes[i].innerText;     // Insere um clube em 'col2'
        }
   }
 
   btAdd.disabled = true;           // Desabilita o botão 'btAdd'
   btMontar.disabled = true;        // Desabilita o botão 'btMontar'

})

// 'Escuta' o click no botão 'btReset'
frm.btReset.addEventListener("click", () => { 
    location.reload()
})