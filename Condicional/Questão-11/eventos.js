let preço = 100;
let pagamento = '';
if (pagamento === 'dinheiroAvista' || pagamento === 'cheque') {
    preço = preço - (preço * 0.1);
    console.log(preço);
    document.write('Preço Final = ', preço);
}else if (pagamento === 'cartaoAvista') {
    preço = preço -(preço * 0.15);
    console.log(preço);
    document.write('Preço Final = ', preço);
}else if (pagamento === 'emDuasvezes') {
    console.log(preço);
    document.write('Preço Final = ', preço);
}else {
    preço = preço * 1.1;
    console.log(preço);
    document.write('Preço Final = ', preço);
}