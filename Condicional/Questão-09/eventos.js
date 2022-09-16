let h = 1.75;
const PesoM = ((72.7 * h) - 58).toFixed(2);
const PesoF = ((62.1 * h) - 44.7).toFixed(2);
let sexo = 'feminino';
if (sexo !== 'feminino') {
    document.write('Peso ideal(homem)=', PesoM);
    console.log(PesoM);
}else {
    document.write('Peso  ideal(mulher)=', PesoF);
    console.log(PesoF);
}