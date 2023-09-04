// Lendo os valores de destino e tempo da viagem do usuário (entrada)
const destino = prompt("Para onde você deseja viajar?");
const dias = Number(prompt("Quantos dias vai levar para você chegar à(ao) " + destino));
const horas = Number(prompt("E quantas horas vai levar para você chegar à(ao) " + destino));

// Calculando os valores da viagem (processamento)
const diasConvert = dias * 24;
const somaDiasHoras = diasConvert + horas;

// Mostrando o resultado para o usuário (saída)
alert(`Você levará um total de ${somaDiasHoras.toFixed(2)} horas para chegar à(ao) ${destino}`);