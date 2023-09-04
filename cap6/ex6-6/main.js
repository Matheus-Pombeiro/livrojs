// Obtém elementos do formulário e da saída de dados
const frm = document.querySelector("form");
const respLista = document.querySelector(".outLista");
const respOrdem = document.querySelector(".outOrdem");

const numeros = [];                 // Declara um vetor vazio e de escopo global

// 'Escuta' quando o botão 'submit' é clicado
frm.addEventListener("submit", (e) => {

    e.preventDefault();                                                     // Evita o envio automático do 'form'
    const numero = frm.inNumero.value;                                      // Obtém o número inserido pelo usuário
    if (numeros.includes(numero)) {                                         // Se o número inserido já existir no vetor
        alert("Esse número já foi adicionado...");                          // Exibe um alerta
        frm.inNumero.focus();                                               // Posiciona o cursor
        return;                                                             // Retorna
    } else {
        numeros.push(numero);                                               // Adiciona dados ao vetor
    }
    frm.reset();                                                            // Limpa o 'form'
    frm.inNumero.focus();                                                   // Posiciona o cursor
    respLista.innerText = "Números: " + numeros.join(", ");                 // Exibe os números para o usuário

});

// 'Escuta' o 'click' no botão 'Verificar Ordem'
frm.btVerificar.addEventListener("click", () => {

    if (numeros.length == 0) {                                              // Se o vetor estiver vazio
        alert("Não há números na lista...");                                // Exibe um alerta
        frm.inNumero.focus();                                               // Posiciona o vetor
        return;                                                             // Retorna
    }
    let ordem = true;                                                     // Declara uma flag indicativa
    for (let i = 0; i < numeros.length - 1; i++) {                          // Enquanto 'i' for menor que o número de elementos do vetor
        if (numeros[i] > numeros[i + 1]) {                                  // Se o número atual for menor que o número posterior
            ordem = false;                                                  // A flag muda para 'false'
            break;                                                          // Para o processo
        }
    }

    respOrdem.innerText = ordem ? "Yeah! Os números estão em ordem crescente" : "Atenção... Os números não estão em ordem crescente";   // Exibe mensagem de acordo com o valor da var 'ordem'
});