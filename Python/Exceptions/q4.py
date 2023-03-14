def func(x,y):
    try:
        x/y
    except ArithmeticError as e:
        print("Exception occured is::",e)
    else:
        print("No exceptions occured, that's why else block is executing...")
    finally:
        print("This is finally block")

func(10,2)
func(10,0)