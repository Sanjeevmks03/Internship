import point
class quad:
    __x=-1
    __y=-1
    
    def points(self,__x,__y):
        return point.point(__x,__y)
    
    def areaofTriangle(self,p1,p2,p3):
        print(p1.x,p1.y)
        print(p2.x,p2.y)
        print(p3.x,p3.y)

        area = abs(float((p1.x * (p2.y - p3.y)+ p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) /2.0))
        print("area:: ",area)
        return area