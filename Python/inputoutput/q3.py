f1=open("file1.txt",'w')
f2=open("file2.txt","w")

f1.write("hii\ni am sanjeev\ni am from bihar")
f2.write("sir\nSDE beehyv soft soln\n East champaran")

f1=open("file1.txt","r")
f2=open("file2.txt","r")

for item1,item2 in zip(f1,f2):
    print(item1+item2)