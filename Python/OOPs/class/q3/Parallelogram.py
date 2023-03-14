import Quadrilateral
class para(Quadrilateral.quad):
    def areapara():
        obj=Quadrilateral.quad()
        print("please enter point 1...")
        x1=int(input("Please enter value of x:: "))
        y1=int(input("Please enter value of y: "))

        print("please enter point 2...")
        x2=int(input("Please enter value of x:: "))
        y2=int(input("Please enter value of y: "))

        print("please enter point 3...")
        x3=int(input("Please enter value of x:: "))
        y3=int(input("Please enter value of y: "))

        print("please enter point 4...")
        x4=int(input("Please enter value of x:: "))
        y4=int(input("Please enter value of y: "))

        p1=obj.points(x1,y1)
        p2=obj.points(x2,y2)
        p3=obj.points(x3,y3)
        p4=obj.points(x4,y4)
        half1=obj.areaofTriangle(p1,p2,p3)
        half2=obj.areaofTriangle(p1,p3,p4)
        return half1+half2