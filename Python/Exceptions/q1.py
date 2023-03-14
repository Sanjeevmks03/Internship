def func(x,y):
    return 5/0

try:
    func(5,0)
except ZeroDivisionError as e:
    print("Exception occured is:: ",e)
