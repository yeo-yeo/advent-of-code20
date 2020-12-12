const input = require('./input/12')

// part 1

// north/south, east/west
const position = [0,0]
const directions = ['E','S','W','N']

const directionEffects = {
    'E': [0,1],
    'S': [-1,0],
    'W': [0,-1],
    'N': [1,0]
}

let direction = 'E'

for (let i = 0; i < input.length; i++) {

    const command = input[i][0]
    const size = input[i][1]

    // add on NSEW movements
    if (directions.includes(command)) {
        position[0] += (size * directionEffects[command][0])
        position[1] += (size * directionEffects[command][1])
    }

   if (command === "L") {
        const currentDirection = directions.findIndex(x => x === direction)
        const directionsToMove = size / 90
        const newDirectionIndex = (currentDirection - directionsToMove) >= 0 ? 
            currentDirection - directionsToMove :
            (currentDirection - directionsToMove + directions.length)
        direction = directions[newDirectionIndex]
    }   
    if (command === "R") {
        const currentDirection = directions.findIndex(x => x === direction)
        const directionsToMove = size / 90
        const newDirectionIndex = (currentDirection + directionsToMove) >= directions.length ? 
            currentDirection + directionsToMove - directions.length :
            currentDirection + directionsToMove
        direction = directions[newDirectionIndex]
    } 
    // move forward in the current direction
    if (command === "F") {
        position[0] += (size * directionEffects[direction][0])
        position[1] += (size * directionEffects[direction][1])
    }      
}

console.log(Math.abs(position[0]) + Math.abs(position[1]))

// part 2

let waypointPosition = [1,10]
let shipPosition = [0, 0]
let difference = [waypointPosition[0] - shipPosition[0], waypointPosition[1] - shipPosition[1]]

for (let i = 0; i < input.length; i++) {

    let newWaypointPosition = [...waypointPosition]
    let newShipPosition = [...shipPosition]

    const command = input[i][0]
    const size = input[i][1]

    // moving waypoint with NSEW commands
    if (directions.includes(command)) {
        newWaypointPosition.forEach((pos, i) => newWaypointPosition[i] = pos += (size * directionEffects[command][i]))
    }

    if (command === "L") {
        const directionsToMove = size / 90

        for (let l = 0; l < directionsToMove; l++) {
            newWaypointPosition[0] = shipPosition[0] + difference[1]
            newWaypointPosition[1] = shipPosition[1] - difference[0]
            difference = [newWaypointPosition[0] - shipPosition[0], newWaypointPosition[1] - shipPosition[1]]
        }

    } 
      
    if (command === "R") {
        const directionsToMove = size / 90

        for (let r = 0; r < directionsToMove; r++) {
            newWaypointPosition[0] = shipPosition[0] - difference[1]
            newWaypointPosition[1] = shipPosition[1] + difference[0]
            difference = [newWaypointPosition[0] - shipPosition[0], newWaypointPosition[1] - shipPosition[1]]
        }

    } 

    if (command === "F") {
            newWaypointPosition.forEach((pos, i) => newWaypointPosition[i] = pos += (size * difference[i]))
            newShipPosition.forEach((pos, i) => newShipPosition[i] = pos += (size * difference[i]))
    }

    waypointPosition = newWaypointPosition
    shipPosition = newShipPosition
    difference = [newWaypointPosition[0] - shipPosition[0], newWaypointPosition[1] - shipPosition[1]]

}

console.log(Math.abs(shipPosition[0]) + Math.abs(shipPosition[1]))