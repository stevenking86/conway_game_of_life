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

var future_grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

function print_future_board() {
    console.log(future_grid)
}


function is_upper(outer){
    if (outer === 0){
        return true
    }
    else {
        return false
    }
}

function is_downer(outer){
    if (outer == 10){
        return true
    }
    else {
        return false
    }
}

function is_righty(inner){
    if (inner == 19){
        return true
    }
    else {
        return false
    }
}

function is_lefty(inner){
    if (inner === 0){
        return true
    }
    else {
        return false
    }
}




function check_neighbors (grid,outer,inner) {
    var live_neighbor_count = 0
    if (is_upper(outer) === false && is_lefty(inner)=== false){
        if (grid[outer - 1][inner-1] === 1){
            live_neighbor_count += 1
        }
    }
    if (is_upper(outer)===false){
        if (grid[outer - 1][inner] === 1){
            live_neighbor_count += 1
        }
    }
    if (is_upper(outer) === false && is_righty(inner) === false){
        if (grid[outer - 1][inner+1] === 1){
            live_neighbor_count += 1
        }
    }

    if (is_lefty(inner)===false){
        if (grid[outer][inner-1] === 1){
            live_neighbor_count += 1
        }
    }

    if (is_righty(inner)===false){
        if (grid[outer][inner+1] === 1){
            live_neighbor_count += 1
        }
    }

    if (is_downer(outer)===false && is_lefty(inner) === false){
        if (grid[outer + 1][inner-1] === 1){
            live_neighbor_count += 1
        }
    }
    if (is_downer(outer)===false){
        if (grid[outer + 1][inner] === 1){
            live_neighbor_count += 1
        }
    }
    if (is_downer(outer)===false && is_righty(inner)===false){
        if (grid[outer + 1][inner+1] === 1){
            live_neighbor_count += 1
        }
    }
    return live_neighbor_count
}

function live_or_die(grid, outer, inner) {
    if (check_neighbors(grid,outer,inner) >= 3) {
       future_grid[outer][inner] = 1
       console.log("LIVE")
    }
    else {
        future_grid[outer][inner] = 0
        console.log("DEAD")
    }

}

function check_all_cells (grid){
    var new_grid
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++){
            live_or_die(grid, i, j)
        }
    }
}

//DRIVER TEST CODE
seed_board()
print_board()
// console.log(check_neighbors(grid, 1,2))
// live_or_die(grid,1,2)
check_all_cells(grid)
print_future_board