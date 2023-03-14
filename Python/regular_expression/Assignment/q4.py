import math
l=[]
def func(strt,end):
    for i in range(strt,end+1):
        l.append(i**2)

func(1,20)
print(l[-5:])