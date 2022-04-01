    
    //armazenar os pontos
    let pointsBot = 0;
    let pointsPlayer = 0;

    let rock = 1;
    let paper = 2;
    let scissors = 3;

    function game(playerOption){

        let bot = parseInt(Math.random()*3+1);
        let result = "";

        if(playerOption === rock && bot === paper){
            pointsBot++;
            result = bot;
        }if(playerOption === rock && bot === scissors){
            pointsPlayer++;
            result = playerOption;
        }if(playerOption === scissors && bot === rock){
            pointsBot++;
            result = bot;
        }if(playerOption === paper && bot === scissors){
            pointsBot++
            result = bot;
        }if(playerOption === bot){
            result = "empate";
        }if(playerOption === paper && bot === rock){
            pointsPlayer++
            result = playerOption;
        }if(playerOption === scissors && bot === paper){
            pointsPlayer++
            result = playerOption;
        };

        function transform(){
            if(bot === 1){
                bot = "Rock"
            }if(bot === 2){
                bot = "Paper"
            }if(bot === 3){
                bot = "Scissors"
            };
        
            if(playerOption === 1){
                playerOption = "Rock"
            }if(playerOption === 2){
                playerOption = "Paper"
            }if(playerOption === 3){
                playerOption = "Scissors"
            };
        };
        

        switch (result) {
            case bot :
                transform(bot, playerOption)
                console.log(`bot jogou: ${bot} // player jogou: ${playerOption}`)
                console.log(`bot ${pointsBot} x player ${pointsPlayer}`);
                console.log("O bot venceu")
            break;
            case playerOption :
                transform(bot, playerOption)
                console.log(`bot jogou: ${bot} // player jogou: ${playerOption}`)
                console.log(`bot ${pointsBot} x player ${pointsPlayer}`);
                console.log("Você venceu")
            break;
            case "empate" :
                transform(bot, playerOption)
                console.log(`bot jogou: ${bot} // player jogou: ${playerOption}`)
                console.log(`bot ${pointsBot} x player ${pointsPlayer}`);
                console.log("Empatou")
            break;
        };


    }; //Closed function

   
    ///////DIGITE UMA DAS OPÇÕES//////// 
                /// rock
                /// paper
                /// scissors

    game(rock);

    game(paper);

<<<<<<< HEAD:FrontEnd2/AulaA2S/rock-paper-scissors.js
    game(scissors);
=======
    game(scissors);
>>>>>>> 75301a9913371a9939556cd899a74b2d8ef607d1:3 bimestre - frontEnd2Js e infraestrutura/FrontEnd2/AulaA2S/rock-paper-scissors.js
