// Obtém os elementos da pagina
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const poltronas = 240;      // Declara uma var com o nº de poltronas do teatro

const reservadas = [];      // Declara um vetor para armazenar as poltronas reservadas

// 'Escuta' o carregamento da página
window.addEventListener("load", () => {

    // Operador ternário: se houver dados salvos em 'localStorage', faz um 'split(";")'
    // E atribui esses dados ao vetor, caso o contrário o vetor é iniciado vazio
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    // Declara um loop para montar o nº total de poltronas (definida na constante)
    for (let i = 1; i <= poltronas; i++) {

        const figure = document.createElement("figure");    // Cria uma tag 'figure' no HTML
        const imgStatus = document.createElement("img");    // Cria uma tag 'img' no HTML

        // Se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
        imgStatus.src = ocupadas.includes(i.toString()) ? "img/ocupada.jpg" : "img/disponivel.jpg";

        imgStatus.className = "poltrona";       // Determina a classe de 'imgStatus' como 'poltrona'

        const figureCap = document.createElement("figcaption");     // Cria uma tag 'figcaption' no HTML

        // Quantidade de zeros antes do nº da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        const num = document.createTextNode(`[${zeros}${i}]`);      // Cria um texto com as vars 'zeros' e 'i' 

        // Determina os pais de cada tag criada
        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        // Se 'i' módulo 24 == 12 (é o corredor: define margem direita de 60px)
        if (i % 24 == 12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure);

        // Se 'i' módulo 24 == 0: o comando após && será executado (insere quebra de linha)
        (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));

    }

});

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do 'form'

    const poltrona = Number(frm.inPoltrona.value);      // Obtém o nº da poltrona inserido pelo usuário

    // Valida o preenchimento do campo de entrada... não pode ser maior que o nº de elementos do vetor
    if (poltrona > poltronas) {
        alert("Informe um número de poltrona válido");      // Exibe um alerta
        frm.inPoltrona.focus();                             // Posiciona o cursor
        return;                                             // Retorna
    }

    // Operador ternário: se houver dados salvos em 'localStorage', faz um 'split(";")'
    // E atribui esses dados ao vetor, caso o contrário o vetor é iniciado vazio
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    // Se poltrona escolhida já está ocupada (existe em 'localStorage')
    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada`);      // Exibe um alerta
        frm.inPoltrona.value = "";                          // Limpa o campo
        frm.inPoltrona.focus();                             // Posiciona o cursor
        return;                                             // Retorna
    }

    // Captura imagem da poltrona, filha de 'divPalco'. É - 1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];

    imgPoltrona.src = "img/reservada.jpg";      // Modifica o atributo da imagem

    reservadas.push(poltrona);      // Adiciona 'poltrona' ao vetor reservadas

    frm.inPoltrona.value = "";      // Limpa o campo do 'form'
    frm.inPoltrona.focus();         // Posiciona o cursor

});

// 'Escuta' o click no botão 'btConfirmar'
frm.btConfirmar.addEventListener("click", () => {

    if (reservadas.length == 0) {                   // Se o vetor estiver vazio...
        alert("Não há poltronas reservadas");       // Exibe um alerta
        frm.inPoltrona.focus();                     // Posiciona o cursor
        return;                                     // retorna
    }

    // Operador ternário: se houver dados salvos em 'localStorage', faz um 'split(";")'
    // E atribui esses dados ao vetor, caso o contrário o vetor é iniciado vazio
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    // Declara um loop decrescente, pois as reservas vão sendo removidas a cada alteração da imagem
    for (let i = reservadas.length - 1; i >= 0; i--) {

        ocupadas.push(reservadas[i]);       // Adiciona o nº da poltrona reservada na posição 'i' no vetor

        // Captura imagem da poltrona, filha de 'divPalco'. É - 1 pois começa em 0
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];

        imgPoltrona.src = "img/ocupada.jpg";        // Modifica o atributo da imagem

        reservadas.pop();       // Remove do vetor a reserva já alterada

    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));

});