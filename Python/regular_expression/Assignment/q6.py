import re
n=int(input("Enter the number of data:: "))
sum=0
for i in range(n):
    str=input("Enter the transaction:: ")
    trnx=re.search(r'\w',str).group()
    amount=re.search(r'\d+',str).group()  
    # sometimes this \d+ is not supporting in this version of python
    if trnx=='D': sum+=int(amount)
    else: sum-=int(amount)
print(sum)

