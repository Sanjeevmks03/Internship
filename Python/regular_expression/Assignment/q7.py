from operator import itemgetter, attrgetter
data=[]
n=int(input("Enter number of inputs:: "))
for i in range(n):
    str=input("Enter detail:: ")
    split=str.split(",")
    data.append(split)
data.sort()

print(data)