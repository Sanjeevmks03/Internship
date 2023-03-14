import re
str="Hello, have a good day"
new_str=re.sub(r'[^aeiouAEIOU]','',str)
print(new_str)