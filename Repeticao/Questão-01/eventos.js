// resolução caso se for pra fazer a  variavel "n" ir de 1 a 500;
// let soma = 0;
// for (let n = 1; n <= 500; n ++) {
    // if (n % 2 !== 0 && n % 3 === 0) {
        // soma += n;
    // }
// }
let numeros = [9, -9, 12, 15, 11, 600];

let soma = 0;

for (let n = 0; n < numeros.length; n++) {
    if (
        numeros[n] >= 1 && numeros[n] <= 500
        && numeros[n] % 2 !== 0
        && numeros[n] % 3 === 0 //testando se é multiplo de 3
    ) {
        soma += numeros[n];
    }
}

document.write(soma);