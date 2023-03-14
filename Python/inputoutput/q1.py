flag=True
while flag:
    print("Conversions::- \n1. F to C\n2. C to F")
    n=int(input("Which conversion do you want:: "))
    match n:
        case 1:
            f=int(input("Please enter temperature in farenheit:: "))
            c=(f-32)*(5/9)
            print(f"{f} F in celcius is :: %.3f"%c)
            flag=False
        case 2: 
            c=int(input("Please enter temperature in celcius:: "))
            f=(9/5)*c + 32
            print(f"{c} C in farenheit is :: %.3f"%f)
            flag=False
        case _:
            print("Please enter a valid input !!!")
        