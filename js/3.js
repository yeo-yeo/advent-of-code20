const input = require('./input/3')

// part 1

const singleWidth = input[0].length

const move = (xMove, yMove, x = 0, y = 0, trees = 0) => {
    let adjustedX = adjustX(x)

    if (input[y][adjustedX] === '#') {
        trees++
    }

    if (y < (input.length - 1)) {
        y += yMove;
        adjustedX += xMove;
        return move(xMove, yMove, adjustedX,y,trees)
    }
    return trees
}

const adjustX = (x) => {
    let multiple = 1;
    while (x >= (multiple * singleWidth)) {
        multiple++
    } 
    return x - ((multiple - 1) * singleWidth)
}

const ans1 = move(3,1)
console.log(ans1)

// part 2

const a = move(1,1)
const b = move(3,1)
const c = move(5,1)
const d = move(7,1)
const e = move(1,2)

const ans2 = a * b * c * d * e
console.log(ans2)