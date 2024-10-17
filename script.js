/* Nim Trainer by Yakov Would
Chart Being Utilized: https://lucid.app/lucidchart/483f701d-ec02-406b-8970-7f9253ecd4e8 */

// Global
var count = 0;
var trainer = false;

/** 
 * Main, calls the other functions.  * 
 * @param none
 * @return none
 */

function main(){
    let again = false;
    alert("Trainer - Always wins to help the user detect a pattern and get better at beating simple.\nSimple - Truly random Nim game, use your skills that you've learnt from versing the Trainer.")
    trainer = confirm("Now, which will it be?\nSelect OK for Trainer\nSelect Cancel for Simple.")
    playNim();
    count = 0;
    again = confirm("Would you like to play again?")
    if (again == true) main();
    // else alert("You've played a total of " + plays + " times, with a total of " + wins + " wins and " + losses + " losses with a " + WLR + "WLR and a " + wr + "% Win Rate.")
}

/** 
 * playNim, Runs nim with player first and specifies the winner.  * 
 * @param none
 * @return none
 */

function playNim(){
    if (trainer == false){ 
        var whoFirst = Math.floor(Math.random()*2);
        if (whoFirst == 1){
            alert("You get to go first!")
            playerTurn();
        }
        else {
            alert("The computer goes first.")
            CPUTurn();
        }
    }
    else var whoFirst = playerTurn();
    while (count < 21){
        if (count < 21) {
            if (whoFirst == 1) CPUTurn();
            else playerTurn();
        }
        if (count < 21) {
            if (whoFirst == 1) playerTurn();
            else CPUTurn();
        }
    }
    if (whoFirst == 1){
        if (count > 20) alert("You won!");
        else alert("You lost...")
    }
    else{
        if (count > 20) alert("You lost...");
        else alert("You won!")
    }
}
/** 
 * playerTurn, does player turn, with a recursive anticheat.
 * @param none
 * @return none
 */

function playerTurn(){
    let turn = parseInt(prompt("Input a number, 1-3."))
    if (turn >= 1 && turn < 4) {
        count += turn;
        alert("The count is now " + count + ".")
    }
    else { 
        alert("Invalid input, try again.")
        playerTurn();
    }
}

/** 
 * CPUTurn, does pc turn without intentional loss (turns vary based on modes) * 
 * @param none
 * @return none
 */

function CPUTurn(){
    alert(count)
    switch (count){
        case 20:
        case 19:
            alert("hi, 19 or 20")
            turn = 1;
            break;
        case 18:
            alert("hi, 18")
            turn = 2;
        case 17:
            alert("hi, 17")
            turn = 3;
        default:
            alert("hi, not 20, 19, 18, or 17")
            if (trainer == true){
                turn = 4 - count % 4
            }
            else {
                turn = Math.floor(Math.random()+1*3)
            }
    }
    count += turn;
    alert("I counted " + turn + ", the count is now " + count + ".")
}