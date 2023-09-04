// Mensagem de entrada
alert("Digite 0 para sair");

do {

    const numero = Number(prompt("Número: "));              // Lê o número

    if (numero == 0 || isNaN(numero)) {                     // Se o número digitado for 0 ou inválido

        const sair = confirm("Confirma saída?");            // Solicita confirmação do usuário

        if (sair) {
            
            break;                                          // Sai da repetição

        } else {

            continue;                                       // Volta ao início do loop

        }
    }

    if (numero % 2 == 0) {                                  // Se par

        alert(`O dobro de ${numero} é: ${numero * 2}`);     // Mostra o dobro        

    } else {                                                // Senão

        alert(`O triplo de ${numero} é: ${numero * 3}`);    // Mostra o triplo

    }
} while (true)                                              // Enquanto verdade, só sai do laço pelo break

alert("É isso aí! Nós conseguimos!");                       // Mensagem final