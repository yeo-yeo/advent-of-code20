const input = require("./input/11")

// part 1

const movements = [[-1,-1,],[-1,0,],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

const getEmptyAdjacents = (y,x,input, directions = movements) => {

    let empty = 0;

    for (let i = 0; i < directions.length; i++) {
        try {
        const adjacent = input[y + directions[i][0]][x + directions[i][1]]
        if (adjacent !== '#') {
            empty++
        }
    }
    catch(e){
        // position is over the edge - therefore empty
        empty++
    }
    }
   return empty
}

const countOccupiedSeats = (newConfig) => {
    return newConfig.reduce((acc,line) => {
            const lineSum = line.reduce((acc,el) => {
                    if (el === "#") {
                        acc++
                    }
                    return acc
                },0)
                return acc + lineSum
            },0)
}

const getStableSeatingPlan = (lastConfig, minEmpties, getEmpties) => {

    const length = lastConfig.length
    const width = lastConfig[0].length

    const newConfig = JSON.parse(JSON.stringify(lastConfig))

    for (let y = 0; y < length; y++) {
        for (let x = 0; x < width; x++) {

            const empties = getEmpties(y,x,lastConfig)

            // if all neighbouring seats are empty, it gets filled
            if (lastConfig[y][x] === "L" && empties === 8) {
                newConfig[y][x] = "#"
            }

            // If a seat is occupied (#) and four or more seats adjacent to it
            // are also occupied, the seat becomes empty.
            if (lastConfig[y][x] === "#" && empties <= minEmpties) {
                newConfig[y][x] = "L"
            }

        }
    }

    // if the plan hasn't changed, return the count of #s
    // or, go through it all again
    if (JSON.stringify(lastConfig) === JSON.stringify(newConfig)) {
        return countOccupiedSeats(newConfig)
    } else {
        return getStableSeatingPlan(newConfig, minEmpties, getEmpties)
    }
    }

console.log(getStableSeatingPlan(input, 4, getEmptyAdjacents))

// Part 2

const increment = (movement) => {

    if (movement === 0) {
        return 0;
    }
    if (movement > 0) {
        return  movement += 1
    }
    if (movement < 0) {
        return movement -= 1
    }

}

const getEmptyLineOfSights = (y, x, input, newMovements = movements, empty = 0) => {

    let newEmpty = empty

    const nextMovements = []

     for (let i = 0; i < newMovements.length; i++) {

            try {
                const adjacent = input[y + newMovements[i][0]][x + newMovements[i][1]]
                if (!adjacent) {
                    newEmpty++
                }
                if (adjacent === 'L') {
                    newEmpty++
                }
                // nothing here - need to check the next point
                if (adjacent === ".") {
                    nextMovements.push(newMovements[i].map(increment))
                }
        }
        catch(e){
            // position is over the edge - i.e. empty
            newEmpty++
        }
         }
            
            // if theres still somewhere to go, go again
            if (nextMovements.length > 0) {
                return getEmptyLineOfSights(y, x, input, nextMovements, newEmpty)
            } else {
                // or if you've hit something everywhere, return
                return newEmpty
            }

}

console.log(getStableSeatingPlan(input, 3, getEmptyLineOfSights))