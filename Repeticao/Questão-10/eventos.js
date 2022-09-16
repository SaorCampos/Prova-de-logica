let a = 5;
let resultado = 1;
for (let n = a; n >= 1; n--) {
    resultado *= n;
    document.write(n, 'x')
}
document.write('=', resultado);