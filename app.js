const titleElem = document.querySelector("#board")
console.log("board" , titleElem);

let wonText = document.getElementById('wonText')

let restartButton = document.getElementById('restartBtn')

let playerTurn = document.getElementById('playerTurn')

function myFunction() {
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = "Hello, " + userInput.value;
}

// array.from converts the html collection into an array
let tiles = Array.from(document.getElementsByClassName('tile'))

let winnerOfGame = getComputedStyle(document.body).getPropertyValue('--winning-tiles')

// create 9 'null' or empty spaces to be filled in
let spaces = [null, null, null, null, null, null, null, null, null];
const playerO = 'O';
const playerX= 'X';
let currentPlayer = playerX
let gameWinner = false

function gameStart(){ 
    if (gameWinner !==true){
        for (let tile of tiles){ 
        console.log('gameWinner', gameWinner)
       tile.addEventListener('click', tileClicked)
       changePlayer()
    }
    
     } 
       return
    }


// create a function that allows user to input X or O within gameboard
function tileClicked(event){
    const id = event.target.id // targets the id within the gameboard
    
   

         if(!spaces[id] && !gameWinner){ //allows space to be filled if it doesn't contain an id
        spaces[id] = currentPlayer // if index is empty it will be filled with currentPlayer which is 'x' or 'o'
        event.target.innerText = currentPlayer 
        console.log(playerWon(), 'playerWon')
            
        if(playerWon() !==false){
              playerTurn.innerText = `${currentPlayer} has won!`
              gameWinner = true
              let winning_tiles = playerWon()
              console.log('here', gameWinner)

            
            winning_tiles.map( tile => tiles[tile].style.backgroundColor=winnerOfGame)
            return
        }
        changePlayer()
        if (!spaces.includes(null)){
            playerTurn.innerText = 'It is a draw!'
            return
        }
       
      } 
      return 
    } 
        
    function changePlayer(){
        if (gameWinner!==true) {
            if (currentPlayer ==='X') {
                currentPlayer = 'O'
                playerTurn.innerText = `It's ${playerO} turn`
            } else {
                currentPlayer = 'X'
                playerTurn.innerText = `It's ${playerX} turn`
            }
        } else {
            return
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
    tile.style.backgroundColor=''
    })
    

    currentPlayer = playerX

    gameWinner = false
}

gameStart()
