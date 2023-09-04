// Obtém os elementos 'form' e saída
const frm = document.querySelector("form");
const respErros = document.querySelector(".outErros");
const respChances = document.querySelector(".outChances");
const respDica = document.querySelector(".outDica");

// Declara o array 'erros' de escopo global para conter os números já apostados
const erros = [];

// Declara uma var para conter um número sorteado entre 1 e 100
const sorteado = Math.floor(Math.random() * 100) + 1;

// Declara uma var com o número máximo de chances do usuário
const chances = 6;

// Cria um 'ouvinte' para quando o evento 'submit' for clicado
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do 'form'
    e.preventDefault();

    // Obtém o número digitado pelo usuário
    const numero = Number(frm.inNumero.value);

    // Se acertou
    if (numero == sorteado) {
        
        respDica.innerText = `Parabéns: Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true;                           // Troca o status do botão
        frm.btNovo.className = "exibe";                         // Troca o status do botão

    } else {                                                    // Se errou

        // Se o número existe no vetor 'erros' (já apostou) 
        if (erros.includes(numero)) {

            alert(`Você já apostou o número: ${numero}. Tente outro...`);

        } else {                                                // Se o número não existe o vetor 'erros'

            erros.push(numero);                                 // Adiciona o número ao vetor
            const numErros = erros.length;                      // Obtém o tamanho do vetor
            const numChances = chances - numErros;              // Calcula o número de chances restantes

            // Exibe o nº de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;

            // Se as chances tiverem acabdo
            if (numChances == 0) {

                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over! Número Sorteado: ${sorteado}`;

            } else {                                            // Caso as chances não tiverem acabado

                // Usa o operador ternário para a mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;

            }
        }
    }

    // Limpa o campo de entrada e posiciona o cursor nesse campo
    frm.inNumero.value = "";
    frm.inNumero.focus();

})

// Cria um 'ouvinte' para quando o botão 'Jogar Novamente' for clicado
frm.btNovo.addEventListener("click", () => {

    // Recarrega a página
    location.reload();
    
})