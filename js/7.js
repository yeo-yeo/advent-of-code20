const input = require('./7-input')

const outerBags = [];

const whatGoesOutside = (bagType) => {
    const filtered = input.filter(rule => {
        const bagTypes = rule[1].map(innerBags => innerBags[1])
        return bagTypes.includes(bagType)
    })
    filtered.forEach(answer => {
        if (!outerBags.includes(answer[0])) {
            outerBags.push(answer[0])
        }
    })
}

let prevAnsLength = 0

whatGoesOutside("shiny gold")

let newAnsLength = outerBags.length

while(newAnsLength > prevAnsLength) {
    prevAnsLength = newAnsLength
    outerBags.forEach(whatGoesOutside)
    newAnsLength = outerBags.length
}

console.log(outerBags.length)


const innerBags = [];

const whatGoesInside = (num, exteriorColour) => {
    const line = input.filter(rule => rule[0] === exteriorColour)

    // for each internal bag rule of that external bag
    line[0] && line[0][1].forEach(option => {
        if (option[0] !== 'no') {
            innerBags.push([num * option[0], option[1]])
        whatGoesInside(num * option[0], option[1])
        }
    })
} 

whatGoesInside(1, "shiny gold")

const sum = innerBags.reduce((acc,el) => acc + el[0],0)
console.log(sum)