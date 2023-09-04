// Obtém os elementos da página
const frm = document.querySelector("form");
const imgClube = document.querySelector("#imgClube");
const divTitulo = document.querySelector("#divTitulo");

// Declara uma função para receber a troca de clube
const trocarClube = () => {

    let clube;      // Declara uma var que irá receber o nome do clube

    if (frm.rbBrasil.checked) {                 // Se a opção 'Brasil' estivar marcada...
        clube = "Brasil";                       // A var 'clube' recebe 'Brasil'
    } else if (frm.rbPelotas.checked) {         // Se a opção 'Pelotas' estivar marcada...
        clube = "Pelotas";                      // A var 'clube' recebe 'Pelotas'
    } else if (frm.rbFarroupilha.checked) {     // Se a opção 'Farroupilha' estivar marcada...
        clube = "Farroupilha";                  // A var 'clube' recebe 'Farroupilha'
    }

    divTitulo.className = `row cores-${clube}`;     // Define as classes de divTitulo: row e cores do clube

    imgClube.src = `img/${clube.toLowerCase()}.png`;    // Modifica a imagem de acordo com a seleção do usuário
    imgClube.className = "img-fluid";                   // Muda o estilo para exibir a imagem
    imgClube.alt = `Símbolo do ${clube}`;               // Muda o atributo 'alt' de 'texto alternativo' para fins de acessibilidade

    localStorage.setItem("clube", clube);       // Salva no navegador a escolha do usuário

}

// Associa ao evento 'change' de cada botão do 'form' a função 'trocarClube()'
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube);

// Declara uma função para verificar se o usuário já havia escolhido um clube em sua última visita ao site
const verificarClube = () => {

    if (localStorage.getItem("clube")) {        // Se já tiver sido salvo algum clube no navegador
    
        const clube = localStorage.getItem("clube");        // Obtém o nome do clube

        // Conforme o clube, marca 'checked'
        if (clube == "Brasil") {
            frm.rbBrasil.checked = true;
        } else if (clube == "Pelotas") {
            frm.rbPelotas.checked = true;
        } else if (clube == "Farroupilha") {
            frm.rbFarroupilha.checked = true;
        }

        trocarClube();      // Chama a função 'trocarClube' para trocar a imagem e as cores do site

    }

}

// Ao carregar a página, verifica se o cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);