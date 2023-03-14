total=100
max=5
while total>0:
    flag=0
    while flag==0 and total>0:
        print("Piles left are:: ",total)
        n1=int(input("Player 1, Please enter your choice:: "))
        if n1<1 or n1>max or n1>total:
            print("please enter a valid number...")
        else:
            total-=n1
            flag=1
            if total==0:
                print("Player 1 wins !!!")
                
    flag=0
    while flag==0 and total>0:
        print("Piles left are:: ",total)
        n2=int(input("Player 2, Please enter your choice:: "))
        if n2<1 or n2>max or n2>total:
            print("please enter a valid number...")
        else:
            total-=n2
            flag=1
            if total==0:
                print("Player 2 wins !!!")
    