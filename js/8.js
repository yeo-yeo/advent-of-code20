const input = require('./input/8')

// part 1
const visitedIndexes = [];

const doCommand = (accumulator = 0, index = 0) => {

    visitedIndexes.push(index)

    if (input[index][0] === "acc") {
        accumulator += input[index][1];
        index++
    }

    if (input[index][0] === "jmp") {
        index += input[index][1]
    }

     if (input[index][0] === "nop") {
        index++
    }

    if (!visitedIndexes.includes(index)) {
         return doCommand(accumulator,index)
    } else {
        return accumulator
    }
}

console.log(doCommand())

// part 2

const doCommand2 = (input, visitedIndexes2, accumulator = 0, index = 0) => {

    visitedIndexes2.push(index)

    if (input[index] && input[index][0] === "acc") {
        accumulator += input[index][1];
        index++
    }

    if (input[index] && input[index][0] === "jmp") {
        index += input[index][1]
    }

     if (input[index] && input[index][0] === "nop") {
        index++
    }

    if (index === input.length) {
        console.log('winner')
        return accumulator
    }

  if (!visitedIndexes2.includes(index)) {
         return doCommand2(input,visitedIndexes2,accumulator,index)
    } else {
        return 'not this one'
    }
}

let ans2;

for (let i = 0; i < input.length; i++) {

    const instructionClone = JSON.parse(JSON.stringify(input))
    const visitedIndexes2 = [];

    if (input[i][0] === 'nop') {
        instructionClone[i][0] = 'jmp' 
    }
     if (input[i][0] === 'jmp') {
        instructionClone[i][0] = 'nop' 
    }
    
    const result = doCommand2(instructionClone,visitedIndexes2)

    if (result !== 'not this one') {
        ans2 = [i, result]
    }
}

console.log(ans2)