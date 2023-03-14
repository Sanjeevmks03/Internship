class exceppt(Exception):
    pass

def func():
    str=input("Please enter your full name:: ")
    a=[]
    a=str.split(" ")
    if len(str)==0:
        raise exceppt("please enter valid input !!!")
    elif len(a)==1:
        print(f"{a[0]}")
    elif len(a)==2:
        print(f"{a[0][0]}.{a[1]}")
    elif len(a)==3:  
        print(f"{a[0][0]}.{a[1][0]}.{a[2]}")
    else:
        raise exceppt("please enter valid input !!!")

flag=True
while flag:
    try:
        func()
        flag=False
    except exceppt as msg:
        print(msg)
    