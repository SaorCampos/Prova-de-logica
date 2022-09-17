 let altura = [1.5, 1.6, 1.8, 2, 2.1, 1.7, 1.3, 1.9, 1.55, 1.75, 1.85, 1.65, 1.95, 2.05, 1.73];
const Menor = Math.min(...altura);
const Maior = Math.max(...altura);
menor.innerHTML += `Menor altura = ${Menor}`;
maior.innerHTML += `Maior altura = ${Maior}`;

// Tive que usar a função Math pra isolar os vaalores desejados dentro de altura.