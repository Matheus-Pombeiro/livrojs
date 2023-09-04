// Obtém os elementos da página
const frm = document.querySelector("form");
const respPacienteEmAtendimento = document.querySelector(".resposta__paciente-em-atendimento");
const respListaDosPacientes = document.querySelector(".resposta__lista-dos-pacientes");

// Declara o vetor de escopo global 'pacientes'
const pacientes = [];

// Cria um 'ouvinte' para quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Obtém o nome do paciente
    const nome = frm.inPaciente.value;

    // Adiciona o nome ao final do vetor
    pacientes.push(nome);

    // Declara a var 'lista' com uma string vazia para concatenar os pacientes
    let lista = "";

    // Cria um loop 'for' tradicional (inicia em 0, enquanto menor que o tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {

        lista += `${i + 1}. ${pacientes[i]}\n`;

    }

    // Exibe a lista de pacientes na página, limpa o conteúdo do 'form' e posiciona o cursor no campo
    respListaDosPacientes.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

// Cria um 'ouvinte' para quando o botão 'btUrgencia' for clicado
frm.btUrgencia.addEventListener("click", () => {

    // Verifica se as validações do 'form' estão ok (no caso, paciente is required)
    if (!frm.checkValidity()) {

        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();     // Posiciona o cursor no campo inPaciente
        return;                     // Retorna ao 'form'

    }

    // Obtém o nome do paciente e o adiciona ao início do vetor
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);

    // Declara a var 'lista' com uma string vazia "" para concatenar os pacientes
    let lista = "";

    // Método 'forEach()' aplicado ao vetor 'pacientes'
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    // Exibe a lista de pacientes na página, limpa o conteúdo do 'form' e posiciona o cursor no campo
    respListaDosPacientes.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

// Cria um 'ouvinte' para quando o botão 'btAtender' for clicado
frm.btAtender.addEventListener("click", () => {

    // Se o tamanho do vetor for == 0
    if (pacientes.length == 0) {

        alert("Não há pacientes na lista de espera...");
        frm.inPaciente.focus();     // Posiciona o cursor no campo inPaciente
        return;                     // Retorna ao 'form'

    }

    // Remove do início da fila e obtém o nome
    const atender = pacientes.shift();

    // Exibe o nome do paciente em atendimento
    respPacienteEmAtendimento.innerText = atender;

    // Declara a var 'lista' com uma string vazia ""
    let lista = "";

    // Método 'forEach()' aplicado ao vetor 'pacientes'
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    // Exibe a lista de pacientes na página
    respListaDosPacientes.innerText = lista;
})