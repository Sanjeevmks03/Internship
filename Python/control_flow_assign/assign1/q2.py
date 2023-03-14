list=["Soup and salad","Pasta with meat sauce","Chef's special"]
flag=1
def order(n):
    match n:
        case 1:
            print("one "+list[0]+ " coming right up!")
            return 0
        case 2:
            print("one "+list[1]+ " coming right up!")
            return 0
        case 3:
            print("one "+list[2]+ " coming right up!")
            return 0
        case _:
            return 1


while(flag==1):
    print("Menu is:: \n1. Soup and salad,\n2. Pasta with meat sauce,\n3. Chef's special")
    n=int(input("Which number would you like to order? "))
    flag=order(n)
    if flag==1:
        print("Sorry, that is not a valid choice")
        select=int(input("Enter '1' if you want to enter again else '0' :: "))
        if select==0:
            flag=0

