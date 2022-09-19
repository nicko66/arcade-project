const titleElem = document.querySelector("#board")
console.log("board" , titleElem);

let wonText = document.getElementById('wonText')

let restartButton = document.getElementById('restartBtn')

// array.from converts the html collection into an array
let tiles = Array.from(document.getElementsByClassName('tile'))

// create 9 'null' or empty spaces to be filled in
const spaces = [null, null, null, null, null, null, null, null, null];
const playerOne = 'O';
const playerTwo = 'X';
let currentPlayer = playerTwo

function gameStart(){
    tiles.forEach(tile => tile.addEventListener('click', tileClicked))
}

// create a function that allows user to input X or O within gameboard
function tileClicked(e){
    const id = e.target.id // targets the id within the gameboard
    
    
    if(!spaces[id]){ //allows space to be filled if it doesn't contain an id
        spaces[id] = currentPlayer // if index is empty it will be filled with currentPlayer which is 'x' or 'o'
        e.target.innerText = currentPlayer        
     }

        currentPlayer = currentPlayer == playerTwo ? playerOne : playerTwo // if currentPlayer is = to playerOne, change to playerTwo, if playerTwo, change to playerOne
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

// create a function that checks for a winner
function playerWon(){
    // loops through the win variable 
    for (const condition of win) {
        let [a, b, c] = condition 
        // checks all spaces for a winning combination, if none is found, return false, or no winner
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
        
    }
    return false

}

restartButton.addEventListener('click', restart)

// create a function that restarts the game and clears the board.
function restart(){
    spaces.fill(null) // clears spaces and fills with null
    tiles.forEach(tile => {
        tile.innerText = '' // when box is cleared, this fills it with an empty space
    })
    
    wonText = 'Tic Tac Toe'

    currentPlayer = playerTwo
}

gameStart()