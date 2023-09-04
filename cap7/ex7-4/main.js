// Obtém os elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respDados = document.querySelector(".outDados");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();                         // Evita o envio automático do 'form'
    const nome = frm.inNome.value.trim();       // Obtém o nome do participante

    if (!nome.includes(" ")) {                  // Se o nome não contém espaços
        alert("Informe o nome completo...");    // Exibe um alerta
        return;                                 // Retorna
    }

    const priEspaco = nome.indexOf(" ");        // Posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ");    // Posição do último espaço

    // Copia o 1º nome e o último sobrenome usando os parâmetros do 'substr()'
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    respDados.innerText = `Crachá: ${cracha}`;  // Exibe a resposta

})