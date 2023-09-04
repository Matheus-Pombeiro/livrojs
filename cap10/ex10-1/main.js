// Obtém os elementos da página
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const tarefa = frm.inTarefa.value;      // Obtém a tarefa inserida pelo usuário

    const h5 = document.createElement("h5");            // Cria uma elemento 'h5' no HTML
    const texto = document.createTextNode(tarefa);      // Cria um texto
    h5.appendChild(texto);                              // Define que 'texto' será filho de 'h5'
    dvQuadro.appendChild(h5);                           // E que 'h5' será filho de 'divQuadro'

    frm.inTarefa.value = "";        // Limpa o campo do formulário
    frm.inTarefa.focus();           // Posiciona o cursor do mouse
    
})

// 'Escuta' quando o botão 'btSelecionar' é clickado
frm.btSelecionar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5");        // Obtém as tags 'h5' da página

    if (tarefas.length == 0) {                          // Se a quantidade de tarefas inseridas até o momento for 0...
        alert("Não há tarefas para selecionar");        // Exibe um alerta
        return;                                         // Retorna
    }

    let aux = -1;       // Declara uma var auxiliar para indicar a linha selecionada

    // Percorre a lista de elementos 'h5' inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) {

        // Se a tag é da class 'tarefa-selecionada' (está selecionada)...
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal";             // Troca para 'normal'
            aux = i;                                            // Muda o valor da var auxiliar
            break;                                              // Sai da repetição
        }

    }

    // Se a linha que está selecionada é a última, irá voltar para a primeira...
    if (aux == tarefas.length - 1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada";      // Muda o estilo da próxima linha

})

// 'Escuta' quando o botão 'btRetirar' é clickado
frm.btRetirar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5");        // Obtém as tags 'h5' da página

    let aux = -1;      // Declara uma var auxiliar para indicar a linha selecionada

    // Percorre a lista das tarefas inseridas na página (elementos 'h5')
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {     // Se é da class 'tarefa-selecionada'
            aux = i;                                        // Muda o valor da var auxiliar
        }
    })

    if (aux == -1) {                                       // Se não há tarefa selecionada ou se a lista está vazia...
        alert("Selecione uma tarefa para removê-la");       // Exibe um alerta
        return;                                             // Retorna
    }

    // Solicita a confirmação (exibindo o conteúdo da tag 'h5' selecionada)
    if (confirm(`Confirma a Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]);     // Remove um dos filhos de 'divQuadro' na posição 'aux'
    }

})

// 'Escuta' quando o botão 'btGravar' é clickado
frm.btGravar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5");        // Obtém as tags 'h5' da página

    if (tarefas.length == 0) {                          // Se nenhuma tarefa tiver sido cadastrada...
        alert("Não há tarefas para serem salvas");      // Exibe um alerta
        return;                                         // Retorna
    }

    let dados = "";                             // Declara uma var para acumular os dados a serem salvos
    tarefas.forEach(tarefa => {                 // Percorre a lista de tarefas
        dados += tarefa.innerText + ";";        // Acumula conteúdo de cada 'h5'
    })

    // Grava os dados em 'localStorage', removendo o último item
    localStorage.setItem("tarefasDia", dados.slice(0, -1));

    // Confere se os dados foram gravados em 'localStorage'
    if (localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas Salvas");
    }

})

// 'Escuta' quando a página é carregda
window.addEventListener("load", () => {

    // Verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")) {

        // Cria um vetor com a lista de tarefas (separadas pelo split(";"))
        const dados = localStorage.getItem("tarefasDia").split(";");

        // Percorre os dados armazenados em 'localStorage'
        dados.forEach(dado => {
            const h5 = document.createElement("h5");        // Cria elementos 'h5'
            const texto = document.createTextNode(dado);    // Cria uma texto
            h5.appendChild(texto);                          // Define 'texto' como filho de 'h5'
            dvQuadro.appendChild(h5);                       // E 'h5' como filho de 'divQuadro'
        })

    }

})