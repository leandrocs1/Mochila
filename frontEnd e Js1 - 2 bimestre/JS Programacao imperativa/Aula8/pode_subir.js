function podeSubir(alturaDaPessoa, estaAcompanhada){
    let podeSubirSozinha = alturaDaPessoa >= 1.40 && alturaDaPessoa <= 2.00?true:false;
    let podeSubirAcompanhada = alturaDaPessoa < 1.40 && estaAcompanhada == true || alturaDaPessoa >= 1.20 && estaAcompanhada == true ?true:false;
    let naoPodeSubir = alturaDaPessoa < 1.20 && estaAcompanhada == true?console.log("Acesso bloqueado"):"";
    

    switch(podeSubir){
        case podeSubirSozinha == true:
            console.log("Acesso autorizado")
        break;
        case podeSubirAcompanhada == true:
            console.log("Acesso autorizado apenas com acompanhante")
        break;
        default:
            naoPodeSubir;
    }

};

podeSubir(1.20, true)