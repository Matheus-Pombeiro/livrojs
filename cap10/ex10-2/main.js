// Obtém os elementos da página
const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

// Declara uma 'arrow function' para 'criarMoedas'
const criarMoedas = (num, moeda, textoAlt, classe) => {

    // Declara um loop para inserir várias imagens de moedas na página
    for (let i = 1; i <= num; i++) {
        const novaMoeda = document.createElement("img");        // Cria um elemento 'img' na página
        novaMoeda.src = "img/" + moeda;                         // Atribui referência à 'img'
        novaMoeda.textAlt = textoAlt;                           // Atribui um texto alternativo para a 'img'
        novaMoeda.className = classe;                           // Atribui uma classe css para a 'img'
        dvMoedas.appendChild(novaMoeda);                        // Define 'novaMoeda' como filha de 'dvMoedas'
    }

    const br = document.createElement("br");        // Cria uma quebra de linha na página
    dvMoedas.appendChild(br);                       // Define 'br' como filha de 'dvMoedas'

}

// 'Escuta' quando a página for carregada
window.addEventListener("load", () => {

    // Gera números aleatórios, entre 1 e 5, para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    // Define texto alternativo para as imagens (acessibilidade)
    const alt1_00 = "Moedas de Um Real";
    const alt0_50 = "Moedas de Cinquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";

    // Chama o método 'criarMoedas' passando os argumentos
    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");

})

// 'Escuta' o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();     // Evita o envio automático do form

    const soma = Number(frm.inSoma.value);                  // Obtém a resposta do usuário
    const moedas = dvMoedas.querySelectorAll("img");        // Obtém referência às 'img' filhas de 'dvMoedas'
    let totalMoedas = 0;                                    // Declara e inicializa o acumulador

    // Percorre as tags 'img' em 'moedas' e verifica a propriedade 'className'
    for (const moeda of moedas) {

        if (moeda.className == "moeda1-00") {               // Se a 'img' tiver a classe 'moeda1-00'...
            totalMoedas += 1;                               // Acumula 1 para moedas de 1 real
        } else if (moeda.className == "moeda0-50") {        // Se a 'img' tiver a classe 'moeda0-50'...
            totalMoedas += 0.5;                             // Acumula 0.5 para moedas de 50 centavos
        } else if (moeda.className == "moeda0-25") {        // Se a 'img' tiver a classe 'moeda0-25'...
            totalMoedas += 0.25;                            // Acumula 0.25 para moedas de 25 centavos
        } else if (moeda.className == "moeda0-10") {        // Se a 'img' tiver a classe 'moeda0-10'...
            totalMoedas += 0.1;                             // Acumula 0.1 para moedas de 10 centavos
        }

    }

    const div = document.createElement("div");      // Cria uma elemento 'div' na página
    const h3 = document.createElement("h3");        // Cria um elemento 'h3' na página

    let mensagem;       // Declara uma var vazia
    
    // Verifica se o valor informado pelo usuário é igual ao total de moedas exibido
    if (soma == totalMoedas.toFixed(2)) {
        div.className = "alert alert-success";                                  // Define uma classe positiva para 'div'
        mensagem = "Parabéns! Você acertou!";                                   // Atribui uma mensagem positiva a var 'mensagem'
    } else {                                                                    // Senão...
        div.className = "alert alert-danger";                                   // Define uma classe negativa para 'div'
        mensagem = `Ops... a resposta correta é ${totalMoedas.toFixed(2)}`;     // Atribui uma mensagem negativa a var 'mensagem' 
    }

    const texto = document.createTextNode(mensagem);        // Cria um elemento texto com a 'mensagem'
    h3.appendChild(texto);                                  // Define que 'texto' será filho de 'h3'
    div.appendChild(h3);                                    // Define que 'h3' será filha de 'div'
    dvMoedas.appendChild(div);                              // Define que 'div' será filha de 'dvMoedas'
    
    frm.submit.disabled = true;     // Desativa o botão 'submit'

})

// 'Escuta' o click no botão 'reset'
frm.addEventListener("reset", () => {

    window.location.reload();       // Recarrega a página e consequentemente as moedas

})