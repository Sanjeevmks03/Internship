class base:
    def basefunc(self,n=None):
        if(n==None):
            print("base function with 0 parameter called...")
        else:
            print("base function with 1 parameter called...")
    def __init__(self,a=None,b=None):
        if a!=None and b!=None:
            self.a=a 
            self.b=b

    def __add__(self,other):
        return self.a+other.a, self.b+other.b

class child(base):
    def basefunc(self,n=None):
        if(n==None):
            print("overrided function with 0 parameter called...")
        else:
            print("overrided function with 1 parameter called...")

#function overriding example
obj=child()
obj.basefunc()
obj.basefunc(3)

#function overloading example
obj1=base()
obj1.basefunc()
obj1.basefunc(1)

#operator overloading
sum1=base(2,4)
sum2=base(3,7)
print(sum1+sum2)
