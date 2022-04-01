
// Dividir
module.exports = 
    function(firstNumber, secondNumber){
        if(firstNumber && secondNumber != 0){
            return firstNumber / secondNumber;
        }else {
            console.log("'0' nao e um numero divisivel");
        };
    };