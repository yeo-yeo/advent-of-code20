const input = require('./input/9');

// part 1

let ans;

const isValid = (array, target) => {
    const combinations = [];
    
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length; y++) {
            const sum = array[x] + array[y]
            if (x !== y && sum === target) {
                combinations.push([x,y])
            }
        }
    }

    return combinations.length > 0 ? true : false
}

// start from 26th number
for (let i = 25; i < input.length; i++) {

    const index0 = i - 25
    const index24 = i - 1

    const result = isValid(input.slice(index0, index24 + 1), input[i])

    if (!result) {
        ans = input[i]
    }

}

console.log(ans)

// part 2

const sumUp = (i, runningTotal = 0) => {
    const sum = runningTotal + input[i]
   if (sum === ans) {
         return i // the last index of the run
   }
    if (sum > ans) {
        return 'invalid' // combination was too high
    } 
    i++
     if (sum < ans) {
         return sumUp(i, sum)
     }
}

let validRange;

for (let i = 0; i < input.length; i++) {
    const result = sumUp(i)
    if (result !== 'invalid' && i !== result) {
        validRange = ([i,result])
    }
}

const range = input.slice(validRange[0],(validRange[1] + 1))

console.log(Math.min(...range) + Math.max(...range))

