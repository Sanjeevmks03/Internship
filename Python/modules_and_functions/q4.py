def addition(*para):
    sum=0
    for i in para:
        sum+=i
    return sum

print(addition(1,3,5))
print(addition(34,76))
print(addition(342,4365,766,7,7))