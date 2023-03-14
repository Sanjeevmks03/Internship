
def unique_list(l):
    st=set(l)
    return list(st)
def takelist():
    lst=[]
    n=int(input("Enter the number of data you want to enter:: "))
    for i in range(n):
        lst.append(input("Enter the data:: "))
    return lst

l=[]
l=takelist()
print(unique_list(l))