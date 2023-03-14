def func1(x,y):
    return list(filter(lambda x:x%2==0,range(x,y)))

print(func1(9,23))