function calculadoraImc(peso, altura){
    alturaAoQuadrado = altura * altura;

    return peso/alturaAoQuadrado;
}

console.log(calculadoraImc(80, 1.70))