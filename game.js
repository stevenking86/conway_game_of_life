var STARTING_LIFE = 78



var grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

var future_grid = []

function seed_board () {
    for (var i = 0; i < STARTING_LIFE; i ++) {
        grid[Math.floor(Math.random()*11)][Math.floor(Math.random()*20)] = 1
    }
}

function print_board () {
  console.log(grid)
}




function check_neighbors (grid,outer,inner) {
    var live_neighbor_count = 0
    if (grid[outer - 1][inner-1] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer - 1][inner] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer - 1][inner+1] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer][inner-1] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer][inner+1] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer + 1][inner-1] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer + 1][inner] == 1){
        live_neighbor_count += 1
    }
    if (grid[outer + 1][inner+1] == 1){
        live_neighbor_count += 1
    }
    return live_neighbor_count
}

function live_or_die(grid, outer, inner) {
    if (check_neighbors(grid,[outer][inner]) >= 3) {
       future_grid[outer][inner] == 1
    }
}

//DRIVER TEST CODE
seed_board()
print_board()
console.log(check_neighbors(grid, 1,2))


