import json

with open('2-input.json') as input:
    data = json.load(input)

def subsplit(line):
    spaceDelineated = line.split(' ')
    [minFreq,maxFreq] = spaceDelineated[0].split('-')
    return [minFreq, maxFreq, spaceDelineated[1][0], spaceDelineated[2]]

listForm = list(map(subsplit, data["input"].split('\n')))

# Part 1:

def getMatch(input):
    for x in input:
       if (x[3].count(x[2]) >= int(x[0])):
           return x

ans1 = getMatch(listForm)
# print(ans1)

# Part 2:

def getRealMatch(input):
    for x in input:
        pos1 = int(x[0])
        pos2 = int(x[1])

        count = 0

        if x[3][pos1 - 1] == x[2]:
            count += 1
        if x[3][pos2 - 1] == x[2]:
            count += 1
        if count == 1:
            return x


ans2 = getRealMatch(listForm)
print(ans2)
