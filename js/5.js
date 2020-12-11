const input = require('./input/5')

// part 1

const getPosition = (code, char = 0, min = 0, max = 0) => {

    // set the initial max
    
    if (char === 0 && ['F','B'].includes(code[0])) {
        max = 127
    }
    if (char === 0 && ['L','R'].includes(code[0])) {
        max = 7
    }

    // find the updated max for the next character
    if (code[char] === 'F' || code[char] === 'L') {
        // min stays the same
        max = (((max - 1) - min) / 2) + min
    }

    if (code[char] === 'B' || code[char] === 'R') {
        min = (((max + 1) - min) / 2) + min
        // max stays the same
    }

    char++

    if (['F','B'].includes(code[0]) && char > 6) {
        return min // or max - should be equal
    }

    if (['L','R'].includes(code[0]) && char > 2) {
        return min // or max - should be equal
    }

    return getPosition(code, char, min, max)
}

const scores = input.map(ticket => {
    const rowCode = getPosition(ticket[0]);
    const columnCode = getPosition(ticket[1]);
    return (Number(rowCode * 8)) + Number(columnCode)
})

console.log(Math.max(...scores))

// part 2

const allSeats = []

for (let i = 100; i < 1025; i++) {
    allSeats.push(i)
}

const missingTickets = allSeats.filter(allSeat => !scores.includes(allSeat))
const myTicket = missingTickets.filter(possibility => 
    !missingTickets.includes(possibility + 1) &&
    !missingTickets.includes(possibility - 1)
    )

console.log(myTicket)