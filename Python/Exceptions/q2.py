def func():
    raise ArithmeticError("Exception occured")
    

def main():
    try:
        func()
    except ArithmeticError as e:
        print(e)
    print("statement after handling...")
    
if __name__=="__main__":
    main()
