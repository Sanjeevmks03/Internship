import numpy
import statistics


def avg(l):
    sum=0
    for i in l:
        sum+=i
    return sum/len(l)
def mean(l):
    return statistics.mean(l)

def median(l):
    return statistics.median(l)

def mode(l):
    return statistics.mode(l)

l=[]
n=int(input("Enter nummber of data you want to enter:: "))
for i in range(n):
    l.append(int(input("Enter data:: ")))

print("Average is:: ",avg(l))
print("mean is:: ",mean(l))
print("median is:: ",median(l))
print("mode is:: ",mode(l))