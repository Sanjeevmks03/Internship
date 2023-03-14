import cmath
import math
print("Let Cofficient of:: \nx^2=a\nx=b\nconst=c")
a=int(input("Enter a :: "))
b=int(input("Enter b :: "))
c=int(input("Enter c :: "))
d=(b**2)-4*a*c
if d<0:
    print("This equation is having complex roots")
    root1=(-b +cmath.sqrt(d))/(2*a)
    root2=(-b -cmath.sqrt(d))/(2*a)
else:
    root1=(-b +math.sqrt(d))/(2*a)
    root2=(-b -math.sqrt(d))/(2*a)

print("root1 is ",root1)
print("root2 is ",root2)