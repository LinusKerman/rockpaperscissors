let LoopVar = 1;
let UserInput = null;
let UserLoop = null;
let CPUHand = null;
while (LoopVar == 1){
    UserInput = window.prompt("Play your hand");        //0 = R, 1 = P, 2 = S
    CPUHand = Math.floor(Math.random() * 3);
    console.log(CPUHand);
    if (UserInput == "R"){
        if (CPUHand == 0){
            alert("You:Rock CPU:Rock. You Draw");
        }else if(CPUHand == 1){
            alert("You:Rock CPU:Paper. You Lose");
        }else if(CPUHand == 2){
            alert("You:Rock CPU:Scissors. You Win");
        }
    }else if (UserInput == "P"){
        if (CPUHand == 0){
            alert("You:Paper CPU:Rock. You Win");
        }else if(CPUHand == 1){
            alert("You:Paper CPU:Paper. You Draw");
        }else if(CPUHand == 2){
            alert("You:Paper CPU:Scissors. You Lose");
        }
    }else if (UserInput == "S"){
        if (CPUHand == 0){
            alert("You:Scissors CPU:Rock. You Lose");
        }else if(CPUHand == 1){
            alert("You:Scissors CPU:Paper. You Win");
        }else if(CPUHand == 2){
            alert("You:Scissors CPU:Scissors. You Draw");
        }
    }
    UserLoop = window.prompt("Do you want to play again? Y/N")
    if (UserLoop == "N"){
        LoopVar = 0;
        alert("Ok i guess the game is over now");
    }
}