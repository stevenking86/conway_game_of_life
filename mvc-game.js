// Models

function Game(boardString) {
  this.grid = this.stringToGrid(boardString);
  this.nextGrid = "something";
}

Game.prototype.stringToGrid= function(boardString){
  grid = []
  board_arr = boardString.split("")
  grid = [board_arr.slice(0,5),board_arr.slice(5,10),board_arr.slice(10,15),board_arr.slice(15,20),board_arr.slice(20,25)]
  console.log(grid)
  return grid
}

Game.prototype.nextLifeCycle = function() {

}

function Cell() {

}

// Controller

// View

// Tests

// hypothetical board: [[0,0,0,0,0],
//                     [0,0,0,0,0],
//                     [0,0,0,0,0],
//                     [0,0,0,0,0],
//                     [0,0,0,0,0]
