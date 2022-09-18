const titleElem = document.querySelector("#board")
console.log("board" , titleElem);

let wonText = document.getElementById('wonText')

let restartButton = document.getElementById('restartBtn')
console.log(restartButton);

let tiles = Array.from(document.getElementsByClassName('tile'))
console.log(tiles);

const spaces = [null, null, null, null, null, null, null, null, null];
const playerOne = 'O';
const playerTwo = 'X';
let currentPlayer = playerTwo

function gameStart(){
    tiles.forEach(tile => tile.addEventListener('click', tileClicked))
}
console.log(tileClicked)

function tileClicked(e){
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerWon()!==false){
            wonText = `${currentPlayer} won!!`
            let winningTiles = playerWon()
            


        }

        currentPlayer = currentPlayer == playerTwo ? playerOne : playerTwo
    }
}
// all winning combinations to determine winner
const win = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]

]

function playerWon(){
    for (const condition of win) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
        
    }
    return false

}

restartButton.addEventListener('click', restart)

function restart(){
    spaces.fill(null)
    tiles.forEach(tile => {
        tile.innerText = ''
    })
    
    wonText = 'Tic Tac Toe'

    currentPlayer = playerTwo
}

gameStart()