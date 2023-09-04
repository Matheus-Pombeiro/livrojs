// Obtém os elementos da página
const frm = document.querySelector("form");
const dvNome = document.querySelector("#divNome");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const nome = frm.inNome.value.trim();       // Obtém o nome iserido pelo usuário e remove os espaços em brancos no começo e no fim
    const partes = nome.split(" ");             // Divide o nome em partes

    if (partes.length == 1) {                           // Se o nome estiver incompleto...
        alert("Erro... insira o nome completo");        // Exibe um alerta
        frm.inNome.focus();                             // Posiciona o cursor
        return;                                         // Retorna
    }

    // Retira os 'h3' já existentes (se clicou uma segunda vez no botão)
    const listaH3 = document.querySelectorAll("h3");
    for (let i = listaH3.length - 1; i >= 0; i--) {
        dvNome.removeChild(listaH3[i]);
    }

    // Declara um vetor contendo 10 cores
    const cores = ["blue", "red", "yellow", "green", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"];

    for (const parte of partes) {                               // Percorre o vetor com as partes do nome 
        const h3 = document.createElement("h3");                // Cria elementos 'h3' na página
        const texto = document.createTextNode(parte);           // Cria um elemento texto
        h3.appendChild(texto);                                  // Define 'texto' como filho de 'h3'
        const corSorteada = Math.floor(Math.random() * 10);     // Processa um número aleatório para sortear uma cor
        h3.style.color = cores[corSorteada];                    // Atribui uma cor aleatória à 'h3'
        dvNome.appendChild(h3);                                 // Define 'h3' como filha de 'dvNome'
    }

})