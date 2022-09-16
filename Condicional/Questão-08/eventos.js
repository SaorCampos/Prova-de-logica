//usei sort() e uma função personalizada para comparar os números e ordena-los em ordem decrescente
let numeros = [2, 8, 18, 99, 5];
numeros.sort((a, b) => b - a);
console.log(numeros);
document.write('Ordem decrescente: ', numeros);