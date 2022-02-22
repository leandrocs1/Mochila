let hamburgMenu = document.querySelector(".menuHamburg");
let openningMenu = document.querySelector(".openning-menu");

hamburgMenu.addEventListener("click",()=>{

    if(openningMenu.style.marginRight != "-18px"){
        /* É necessário colocar != e não == pois
            se não no primeiro click o html vai aplicar o == 
            e só no segundo click vai executar a função.
        */
        openningMenu.style.marginRight = "-18px";
    }else{
        openningMenu.style.marginRight = "-305px";
    }
    
});



