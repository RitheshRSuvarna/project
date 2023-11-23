import random
import itertools

nm=input("Enter your name")
print("Hello "+nm)

x=int(input("How many number you want in your password:"))
num=[i for i in range (10)]
a=random.sample(num,x)

y=int(input("How many letters you want in your password:"))
alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHJIJKLMNOPQRSTUVWXYZ"
b=random.sample(alpha,y)

z=int(input("How many special character you want in your password:"))
spl="!@#$%^&*<>?|\?/~"
c=random.sample(spl,z)

print("This is your password as per your requirement:")
var=list(itertools.chain(a,b,c))
final=random.sample(var,len(var))
for i in range(len(final)):
    print(final[i],end="")