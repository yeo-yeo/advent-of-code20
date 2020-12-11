const input = require('./input/6')

// part 1

const trues = input.map(group => new Set(group.join("").split("")))
const sum = trues.reduce((acc,el) => acc + el.size, 0)

console.log(sum)

// part 2

const letterCounts = input.map(group => 
    group.join("").split("").reduce((acc,el) => {
    if (acc[el]) {
        acc[el]++
    } else {
        acc[el] = 1
    }
    return acc
   },{})
)

const groupSize = input.map(group => group.length)

const unanimousTrues = letterCounts.map((group, index) => {
    return Object.values(group).filter(val => val === groupSize[index]).length

})

const sum2 = unanimousTrues.reduce((acc,el) => acc + el, 0)
console.log(sum2)
