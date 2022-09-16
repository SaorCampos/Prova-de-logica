let numeros = [10, 9, 8, 7, -5];

let soma = 0;
let qtd_positivos = 0;
let qtd_negativos = 0;

for (let n = 0; n < numeros.length; n++){
    soma += numeros[n];
    if (numeros[n] > 0) {
        qtd_positivos ++;
    }
}
qtd_negativos = numeros.length - qtd_positivos;

document.write("Media:", soma/numeros.length, '<br>');
document.write("Quantidade de Números Positivos:", qtd_positivos, '<br>');
document.write("Quantidade de Números Negativos:", qtd_negativos, '<br>');