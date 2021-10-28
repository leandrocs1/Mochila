function adicionar(x,y){
    return x+y;
};

function subtrair(x,y){
    return x-y;
};

function multiplicar(x,y){
    return x*y;
};

function dividir(x,y){
    return x/y;
};

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(2,2));
console.log(subtrair(10,5));
console.log(multiplicar(2,5));
console.log(dividir(10,0));

function quadradoDoNumero(x){
    return x*x
};

console.log(quadradoDoNumero(10));

////////////////MEDIA DE 3 NUMEROS////////////////////

function mediaDeTresNumeros(x,y,z){
    return x+y+z/3
};

console.log(mediaDeTresNumeros(2,5,10));

/////////////////PORCENTAGEM///////////////////

function calculaPorcentagem(x, y){
    return x*dividir(y,100)
};

console.log(calculaPorcentagem(100,30));

/////////////////PORCENTAGEM INVERTIDA///////////////////

function geradorDePorcentagem(x, y){
    return multiplicar(x,100)/y
};

console.log(geradorDePorcentagem(100,200));