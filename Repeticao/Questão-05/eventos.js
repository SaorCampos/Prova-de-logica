let numeros = [18, 29, 30, 52, 17, 28, 33, 43, 51];
let pares = 0, impares = 0, somaPares = 0, somaTotal = 0;
for (n = 0; n < numeros.length; n++) {
    if (numeros[n] === 0) {
        break;
    }else if (numeros[n] % 2 === 0){
        pares ++;
        somaPares += numeros[n];
    }else {
        impares ++;
    }
}
let mediaPares = somaPares / pares;
let mediaTotal = somaTotal / numeros.length;
document.write('Quantidade de números pares =', pares, '<br>');
document.write('Quantidade de números impares =', impares, '<br>');
document.write('O valor da média dos números pares =', mediaPares, '<br>');
document.write('O valor da média de todos os números =', mediaTotal, '<br>');
console.log('Quantidade de números pares =', pares);
console.log('Quantidade de números impares =', impares,);
console.log('O valor da média dos números pares =', mediaPares,);
console.log('O valor da média de todos os números =', mediaTotal,);