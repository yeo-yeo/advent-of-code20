const input = require('./1-input.js')

let ans1;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if ((input[i] + input[j]) === 2020) {
            ans1 = [i, j]
        }
    }
}
console.log(input[ans1[0]], input[ans1[1]])
console.log(input[ans1[0]] * input[ans1[1]])

let ans2;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        for (let k = 0; k < input.length; k++) {
            if ((input[i] + input[j] + input[k]) === 2020) {
                ans2 = [i, j, k]
            }
        }
    }
}
console.log(input[ans2[0]], input[ans2[1]], input[ans2[2]])
console.log(input[ans2[0]] * input[ans2[1]] * input[ans2[2]])