const cellsNodeList = document.querySelectorAll(".cell");
const cells = Array.from(cellsNodeList);

let randomBombLocation = [];

const randomBombGenerator = () => {
    const cell = cells[Math.floor(Math.random() * 100)];

    if (cell.classList.contains("badCell")){
        return randomBombGenerator();
    }else{
        cell.classList.add("badCell");
        return cell;
    }
}

for (let i = 0; i < 20; i++){
    randomBombLocation.push(randomBombGenerator());
}

cells.forEach (cell => {
    cell.addEventListener("click", (event) => {
        for (let i = 0; i < randomBombLocation.length; i++) {
            if(event.target.getAttribute("id") === randomBombLocation[i].getAttribute("id")){
                alert("Whoops you click me!")
                for (let i = 0; i < randomBombLocation.length; i++) {
                    randomBombLocation[i].classList.add("bomb");
                }
                return;
            }
        }
        cell.style.background = "#E3B505";
    })
}); 
