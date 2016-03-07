// Models

function Game(boardString) {
  this.grid = this.stringToGrid(boardString);
  this.nextGrid = "something";
}



Board.prototype.nextLifeCycle = function() {

}

function Cell() {

}

// Controller

// View

// Tests
var testGame = new Game;
var testInputString1 = "0000000010000100011011101"

console.log(testGame1.stringToGrid(testInputString1)[4][4] === 1)
console.log(testGame1.stringToGrid(testInputString1)[0][0] === 0)
console.log(testGame1.stringToGrid(testInputString1)[4][0] === 1)

var testGame2 = new Game("1010001000000000000000000")

console.log("nextLifeCycle changes the current board's grid into whatever")
testGame2.nextLifeCycle()

console.log(testGame2.grid[0][0] === 0)
console.log(testGame2.grid[0][1] === 1)
