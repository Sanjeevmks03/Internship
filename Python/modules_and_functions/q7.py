def getEvenNumbers():
    l=[1,435,43,22,66,878,434,576,9,990]
    return filter(lambda x:x%2==0,l)

print(list(getEvenNumbers()))