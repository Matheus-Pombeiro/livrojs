// Obtém os elementos da página
const frm = document.querySelector("form");
const dvIdade = document.querySelector("#divIdade");

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const idade = Number(frm.inIdade.value);        // Obtém a idade do usuário

    const strIdade = idade.toString();      // Converte a idade em string

    for (const num of strIdade) {       // Percorre os caracteres da string
        
        const img = document.createElement("img");      // Cria uma imagem no HTML
        img.src = `img/${num}.jpg`;                     // Atribui uma imagem ao elemento 'img'
        img.alt = `Vela de ${num} anos`;                // Atribui um texto alternativo (acessibilidade) para o elemento 'img'
        dvIdade.appendChild(img);                       // Define 'img' como filha de 'dvIdade'

    }

    frm.btExibir.disabled = true;       // Desabilita o botão 'btExibir'

})

// 'Escuta' o click no botão 'reset'
frm.addEventListener("reset", () => {

    window.location.reload();       // Recarrega a página e consequentemente as velas

})