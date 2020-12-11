const input = require('./2-input')

let ans1 = [];

for (let i = 0; i < input.length; i++) {
    const regex = new RegExp(input[i][2],"g");
    const count = (input[i][3].match(regex) || []).length;

    if (count >= Number(input[i][0]) && count <= Number(input[i][1])) {
        ans1.push(input[i])
    }
}

console.log(ans.length)

let ans2 = [];

for (let i = 0; i < input.length; i++) {
    const pos1 = input[i][0]
    const pos2 = input[i][1]

    let matches = 0

    if (input[i][3][pos1 - 1] === input[i][2]) {
matches++
    }

    if (input[i][3][pos2 - 1] === input[i][2]) {
        matches++
            }
        if (matches === 1) {
            ans2.push(input[i])
        }
}

console.log(ans2.length)