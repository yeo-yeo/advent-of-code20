const input = require('./input/10');

// part 1

const sorted = [...input].sort((a, b) => a - b)

sorted.unshift(0)
sorted.push(sorted[sorted.length - 1] + 3)

const differences = sorted.reduce((acc, el, i) => {
    if (i + 1 < sorted.length) {
   const diff =  sorted[i + 1] - el;
        acc[diff]++
    }
   return acc
}, {1: 0, 2: 0, 3: 0})

console.log(differences["1"] * differences["3"])

// part 2

// number of permutations under that number
// e.g. 3 has 4 paths to get to 0: [0] (one step), [1,0] (two steps), [2,0] (two steps), [2,1,0] (three steps)
const map = {
    0: 0,
    1: 1,
    2: 2,
    3: 4
}

// build up the other ones progressively
for (let i = 4; i < sorted.length; i++) {
    let perms = 0;

    if (map[sorted[i] - 1]) {
        perms += map[sorted[i] - 1]
    }
        if (map[sorted[i] - 2]) {
        perms += map[sorted[i] - 2]
    }
        if (map[sorted[i] - 3]) {
        perms += map[sorted[i] - 3]
    }
   
   if (sorted.includes(sorted[i])) {
       map[sorted[i]] = perms
    }
}

console.log(map[Math.max(...sorted)])