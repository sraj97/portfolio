//AIM: do not click on any mines
// 10 by 10 grid black grid with red lines
    // computer randomly selects locations to put 10 bombs in grid
    // as player clicks each small square 
        // if no bomb then green
        // if bomb then alert pops up for GAME OVER! 
            // user given option as pop up
                // Yes to restart 
                    // this will restart the game
                // No to return to main webpage

const gameArea = document.getElementById("gameArea");

const cellsNodeList = document.querySelectorAll(".cell");
const cells = Array.from(cellsNodeList);

const randomBombGenerator = () => cells[Math.floor(Math.random() * 9)];
let randomBombLocation = [];



for (let i = 0; i < 3; i++){
    randomBombLocation.push(randomBombGenerator());
    console.log(randomBombLocation);
}


cells.forEach (cell => {
    cell.addEventListener("click", (event) => {

        for (let i = 0; i < randomBombLocation.length; i++) {

            if(event.target.getAttribute("id") === randomBombLocation[i].getAttribute("id")){
                
                for (let i = 0; i < randomBombLocation.length; i++) {
                    randomBombLocation[i].classList.add("bomb");
                }
                return;

            }
            
        }
        cell.style.background = "green";

    })
}); 












    
 




