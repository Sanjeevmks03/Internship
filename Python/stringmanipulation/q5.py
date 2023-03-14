str1=input("Enter first string:: ")
str2=input("Enter second string:: ")
n=int(len(str1)/2)
str=str1[:n]+str2+str1[n:]
print(str)