function Cadastro(idade, opniao){
    this.idade = idade,
    this.opniao = opniao
};

let cadastro = [
    new Cadastro(18, 2),
    new Cadastro(50, 1),
    new Cadastro(32, 1),
    new Cadastro(20, 3),
    new Cadastro(12, 3),
    new Cadastro(58, 3),
    new Cadastro(78, 2),
    new Cadastro(101, 2),
    new Cadastro(25, 1),
    new Cadastro(36, 2),
    new Cadastro(35, 3),
    new Cadastro(21, 3),
    new Cadastro(28, 2),
    new Cadastro(86, 1),
    new Cadastro(10, 2),
];

// a média das idades das pessoas que responderam ótimo;
function mediaIdadeOtimo(array){
    let opniaoOtimo = array.filter((val, index)=>{
        if(val.opniao === 3){
            return val.idade;
        };
    });

    let soma = opniaoOtimo.map((val, index)=>{
        return val.idade;
    });

    let somaIdade = soma.reduce((acm, itemAtual)=>{
        return acm + itemAtual;
    });

    console.log(`A média da idade é: ${somaIdade/opniaoOtimo.length}.`)
};
mediaIdadeOtimo(cadastro);


// a quantidade de pessoas que responderam regular;

function qntRegular(array){
    let regular = array.filter((val, index)=>{
        if(val.opniao === 1){
            return val
        };
    });

    console.log(`${regular.length} pessoas acharam o filme regurar.`)
}
qntRegular(cadastro);

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados;

function porcentagemBom(array){
    let quinzePorcento = array.filter((val, i)=>{
        if(val.opniao === 2){
            return val;
        }
    });
    mult = quinzePorcento.length * 100;
    multTotal = mult / array.length;

    console.log(`${multTotal}% achou o filme bom`);

};
porcentagemBom(cadastro);

