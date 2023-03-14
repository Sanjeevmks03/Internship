def solve(*a):
    num=0
    pos=11
    for i in range(len(a)):
        if(a[i]>num):
            num=a[i]
            pos=i
    return num
    
    

def main():
    a=[]
    print("please enter any 10 numbers::---")
    for i in range(0,10):
        x=int(input("Enter here:"))
        a.append(x)
    while(len(a)>0):
        ans=solve(*a)
        print(ans)
        a.remove(ans)


main()
solve()

