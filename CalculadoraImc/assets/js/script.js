let botao = document.querySelector('.botaoAparecer');
let botaoZerar = document.querySelector(".botaoZerar");


botao.addEventListener("click",()=>{
    let peso = document.querySelector(".peso").value;
    let altura = document.querySelector(".altura").value;
    let alturaAoQuadrado = (altura/100) * (altura/100);

    function calcular(peso, altura){
        return peso / altura;
    };

    let resultado = calcular(peso,alturaAoQuadrado)

    document.querySelector(".divHidden").innerHTML = `Seu IMC é de ${resultado.toFixed(2)}`;

    let classificacao = document.querySelector(".class");
    if(resultado < 18.5){
        classificacao.innerHTML = "MAGREZA"
        classificacao.style.backgroundColor = "red"
    }if(resultado >= 18.5 && resultado <= 24.9){
        classificacao.innerHTML = "NORMAL";
        classificacao.style.color = "blue"
    }if(resultado >= 25 && resultado <= 29.9){
        classificacao.innerHTML = "SOBREPESO";
        classificacao.style.color = "orange"
    }if(resultado >= 30 && resultado <= 39.9){
        classificacao.innerHTML = "OBESIDADE";
        classificacao.style.color = "red"
    }if(resultado >= 40){
        classificacao.innerHTML = "OBESIDADE GRAVE";
        classificacao.style.backgroundColor = "red"
    }
});

botaoZerar.addEventListener("click", ()=>{
    location.reload();
    document.querySelector(".peso").value = "";
    document.querySelector(".altura").value = "";
});


// let botao = document.querySelector('.botaoAparecer');
// let aside = document.querySelector('.divHidden');


// botao.addEventListener("click",()=>{
//     if(aside.style.visibility == "visible"){
//         aside.style.visibility = "hidden";
//     }else{
//         aside.style.visibility = "visible";
//     }
// });