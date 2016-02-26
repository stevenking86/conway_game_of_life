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



function seed_board () {
    for (var i = 0; i < STARTING_LIFE; i ++) {
        grid[Math.floor(Math.random()*11)][Math.floor(Math.random()*20)] = 1
    }
}

function print_board () {
  console.log(grid)
}

x y
[1][1]
[0,0] x-1, y-1
[0,1] x-1, y
[0,2] x-1, y+1
[1][0] x, y-1
[1][2]x, y+1
[2][0]x+1, y-1
[2][1]x+1, y
[2][2]x+1, y+1

function check_neighbors (grid,outer, inner) {
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

