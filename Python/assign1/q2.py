# method 1st
subject=[]
grades=[]

n=int(input("How many classes did you take? "))
for i in range(n):
    subject.append(input("What is the name of this class? "))
    grades.append(int(input("What was your grade? ")))
sum=0
for i in range(n):
    print(subject[i],' - ',grades[i])
    sum+=grades[i]
print('Overall GPA',' - ',float(sum/n))


# method 2::using dictionary

# d={}
# n=int(input("How many classes did you take? "))
# for i in range(n):
#     sub=(input("What is the name of this class? "))
#     grade=(int(input("What was your grade? ")))
#     d[sub]=grade
# sum=0
# for i in d:
#     print(i,' - ',d[i])
#     sum+=d[i]
# print('Overall GPA',' - ',float(sum/n))