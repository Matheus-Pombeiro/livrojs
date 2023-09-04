// Recebe os elementos do 'form' e do 'h3'
const frm = document.querySelector("form");
const respRaizQuadrada = document.querySelector(".resposta__raiz-quadrada");

// Processa os dados
frm.addEventListener("submit", (e) => {

    // Evita o envio automático do formulário
    e.preventDefault();

    // Recebe os valor do input 'Raíz Quadrada'
    const numero = Number(frm.inNumero.value);

    // Calcula a raíz quadrada
    let raizQuadrada = Math.sqrt(numero);

    // Condição para a exibição da raíz quadrada
    if (Number.isInteger(raizQuadrada)) { // Para esse cálculo também é possível usar a operação: 'raizQuadrada % 1 == 0'

        respRaizQuadrada.innerText = `Raíz: ${raizQuadrada}`;

    } else {

        respRaizQuadrada.innerText = `Não há raíz exata para ${numero}`;

    }

})

// Limpa os campos de 'form' e 'h3'
frm.addEventListener("reset", () => {
    respRaizQuadrada.innerText = "";
})