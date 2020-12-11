import json

with open('1-input.json') as input:
    data = json.load(input)

def findPair(data):
    for x in data["input"]:
        for y in data["input"]:
            if x + y == 2020:
                return [x, y]


ans1 = findPair(data)
# print(ans1, ans1[0] * ans1[1])


def findThree(data):
    for x in data["input"]:
        for y in data["input"]:
            for z in data["input"]:
                if x + y + z == 2020:
                    return [x,y,z]

ans2 = findThree(data)
print(ans2, ans2[0] * ans2[1] * ans2[2])