const alicia = [23,69,32];
const bob = [12,67,43];

function encontrarGanhador(a, b){
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    
    for(let i = 0 ; i < 2 ;  i++){
        if(a[i] > b[i]){
            let soma1 = pontosPrimeiroParticipante+1;
            console.log("1 "+soma1);
        }else{
            let soma2 = pontosSegundoParticipante+1;
            console.log("2 "+soma2);
        }
    }
    return pontosSegundoParticipante;
}
