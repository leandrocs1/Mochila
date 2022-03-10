/*Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos
tempos pré-definidos.
 1 - Pipoca – 10 segundos (padrão);
 2 - Macarrão – 8 segundos (padrão);
 3 - Carne – 15 segundos (padrão);
 4 - Feijão – 12 segundos (padrão);
 5 - Brigadeiro – 8 segundos (padrão);
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for
maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabum”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

function menuPrato(nomeDoPrato, tempo){
   
    //Pesquisei e utilizei o indexOf no lugar desse método abaixo.
    /* if   (nomeDoPrato == "pipoca"
        ||nomeDoPrato == "macarrao"
        ||nomeDoPrato == "carne"
        ||nomeDoPrato == "feijao"
        ||nomeDoPrato == "brigadeiro"){
            0
    }else{console.log("Prato inexistente")};
    */

    let tempo1 = 0;

    let comidas = [
        "pipoca",
        "macarrao",
        "carne",
        "feijao",
        "brigadeiro",
    ]
    
    if(comidas.indexOf(nomeDoPrato) != -1){

        if(nomeDoPrato == "pipoca"){
            tempo1 = 10;
        }else if(nomeDoPrato == "macarrao"){
            tempo1 = 8;
        }else if(nomeDoPrato == "carne"){
            tempo1 = 15;
        }else if(nomeDoPrato == "feijao"){
            tempo1 = 12;
        }else if(nomeDoPrato == "brigadeiro"){
            tempo1 = 8;
        }
                
    
        if(tempo == tempo1){
            console.log("Prato pronto, bom apetite!!!")
        }else if(tempo >= tempo1 * 2 && tempo < tempo1 * 3 ){
            console.log("A comida queimou!!!");
        }else if(tempo >= tempo1 * 3){
            console.log("Kabum!");
        }else if(tempo < tempo1){
            console.log("tempo insuficiente")
        }

    }else{
        console.log("Prato inexistente")
    };

    
};

        //digite oque deseja fazer no microondas:
        menuPrato("pipoca", 20);
