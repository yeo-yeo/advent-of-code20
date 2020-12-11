const input = require('./input/4')

// part 1

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

let validPassports = 0;
const results = [];

for (const passport of input) {
    let matches = 0;
    const presentFields = Object.keys(passport)
    requiredFields.forEach(field => {
        presentFields.includes(field) && matches++
    })
    if (matches === requiredFields.length) {
        validPassports++
        results.push(passport)
    }
}

console.log(validPassports)

// part 2

let veryValidPassports = 0;

for (const passport of results) {

    const hgtNum = passport['hgt'].substr(0, passport['hgt'].length - 2)
    const hgtUnit = passport['hgt'].substr(passport['hgt'].length - 2, passport['hgt'].length)
    const validHgtUnits = ['cm','in']
    const hairCode = passport['hcl'].substr(1,passport['hcl'].length);
    const validEyes = ['amb','blu','brn','gry','grn','hzl','oth'];
   
    (passport['byr'] >= 1920 && passport['byr'] <= 2002) &&
    (passport['iyr'] >= 2010 && passport['iyr'] <= 2020) &&
    (passport['eyr'] >= 2020 && passport['eyr'] <= 2030) &&
    hgtNum.match(/^[0-9]+$/) &&
    validHgtUnits.includes(hgtUnit) &&
    ((hgtUnit === 'cm' && hgtNum >= 150 && hgtNum <= 193) || (hgtUnit === 'in' && hgtNum >= 59 && hgtNum <= 76)) &&
    (passport['hcl'][0] === '#' && hairCode.match(/^[a-f0-9]{6}$/)) &&
    (validEyes.includes(passport['ecl'])) &&
    (passport['pid'].match(/^[0-9]{9}$/)) &&
    veryValidPassports++

}

console.log(veryValidPassports)