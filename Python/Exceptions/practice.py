a=[2,3,-1,8,8,-1,8,8,-6,7,8]
strt=-1
end=-1
for i in range(len(a)):
    if a[i]<0 and strt==-1:
        strt=i
    elif a[i]<0 and i>=strt:
        end=i

idx=end-1
i=end
while i>=strt:
    if a[idx]>0:
        tmp=a[idx]
        a[idx]=a[i]
        a[i]=tmp
        i=idx
        idx=i-1
    else:
        i=idx
        idx=idx-1
        
    if(idx<0):break

print(a)