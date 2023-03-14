import Trapezoid
import Parallelogram
import Rectangle
import Square
class main:
    def __init__(self):
        
        flag=True
        while flag==True:
            print("Select the figure::\n1. Trapezoid\n2. Parallelogram\n3. Rectangle\n4. Square")
            n=int(input("Enter your choice:: "))
            match n:
                case 1:
                    print("Area of Trapezoid is:: ",Trapezoid.trapezoid.areaTrapezoid())
                    flag=False
                case 2:
                    print("Area of parallelogram is:: ",Parallelogram.para.areapara())
                    flag=False
                case 3:
                    print("Area of Rectangle is:: ",Rectangle.rec.areaRec())
                    flag=False
                case 4:
                    print("Area of Square is:: ",Square.square.areasquare())
                    flag=False
                case _:
                    print("Invalid input... Please enter again")
    
main_object=main()