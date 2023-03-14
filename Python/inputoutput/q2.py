import re
f=open("file.txt","w")
f.write("hii, i am sanjeev kumar\nworking in beehyv,hello software soln. ")
a=[]

f=open("file.txt","r")
str=f.read()
a=re.split(r' ,|, | |,|\n',str)
print(a)
print(len(a))


