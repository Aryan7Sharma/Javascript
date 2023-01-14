'''number = int(input("Enter your number : "))
n = 1
while number>0:
    if n == number:
        print(n * "*")
        n = number-1
        number = n
    else:
        print(n * "*")
        n+=1'''

number = int(input("Please Enter only odd Number : "))
n = 1
temp_num = number
while n>0:
    if n == temp_num:
        space = (number-n)//2
        print(" "*space + n*"*")
        n-=2
        temp_num=n
    else:
        space = (number-n)//2 
        print(" "*space + n*"*")
        n+=26