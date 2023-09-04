// Obtém elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("span");
const resp2 = document.querySelector("h4");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do form

    const servico = frm.inServico.value;        // Obtém o serviço inserido pelo usuário

    // Se já tiver sido cadastrado um serviço na memória...
    if (localStorage.getItem("herbieServico")) {

        // Incrementa a lista de serviços
        localStorage.setItem("herbieServico", localStorage.getItem("herbieServico") + ";" + servico);  

    } else {                                                // Senão

        localStorage.setItem("herbieServico", servico);     // Cria uma lista de serviços

    }

    mostrarPendentes();     // Chama a função 'mostrarPendentes'

    frm.reset();                // ou frm.inServico.value = ""
    frm.inServico.focus();      // Posiciona o cursor

})

// Declara a função 'mostrarPendentes' para mostrar a quantidade de serviços pendentes 
const mostrarPendentes = () => {

    let numPendentes;       // Declara a var 'numPendentes'

    // Se já tiver algum serviço cadastrado...
    if (localStorage.getItem("herbieServico")) {

        // A var obtém o tamnanho da lista de serviços
        numPendentes = localStorage.getItem("herbieServico").split(";").length;

    } else {                    // Senão...

        numPendentes = 0;       // A var recebe 0

    }

    resp1.innerText = numPendentes;     // Exibe a quantidade de serviços pendentes para o usuário

}

window.addEventListener("load", mostrarPendentes);      // Mostra a quantidade de serviços pendentes sempre que a página for carregada

// 'Escuta' o click no botão 'btExecutar'
frm.btExecutar.addEventListener("click", () => {

    if (!localStorage.getItem("herbieServico")) {               // Se nenhum (!) servico tiver sido cadastrado até o momento...
        alert("Não há serviços pendentes para executar");       // Exibe um alerta
        return;                                                 // Retorna
    }

    const servicos = localStorage.getItem("herbieServico").split(";");      // Obtém a lista de serviços

    const emExecucao = servicos.shift();        // Remove o primeiro item da lista e passa ele para a var 'emExecucao'

    resp2.innerText = emExecucao;       // Mostra o servico removido

    localStorage.setItem("herbieServico", servicos.join(";"));      // Salva a nova lista (sem o removido)

    mostrarPendentes();     // Chama a função 'mostrarPendentes'

})