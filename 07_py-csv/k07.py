# Team Nintentoads (Stella Oh, Helena Williams, Jason Chan)
# SoftDev
# K07 - A Review of CSV Files
# 2020-09-30

'''
THE BIG BAD PLAN
0. Open up the CSV
1. Read the file, skipping the first line and last line
2. Put each job name as a dict key and each percentage (*10'd) as a dict value
3. We read through the dict and get the sum of all the values, which becomes the TOTAL value
4. Generate a random number in (0, TOTAL]
5. Traverse in this manner:
    a. Establish "count = 0" and "key = <whatever first job is>"
    b. Find the value of key in the dictionary, add it to count
    c. If the random number is less than/equal to count, we know that key is the correct job
    d. Else, we will move to the next one
6. WE HAVE OUR BIG BOI
'''

import random

# Read in CSV file
storage = open('occupations.csv','r')
words = storage.readlines()

# building dictionary from CSV file
occupation = {}
i = 1
while i < len(words)-1:       # exclude first and last line
    str = words[i].strip()    # takes off \n
    if str[0] == '"': #we noticed that there's some titles with commas in 'em so we made this whole section to fix that
        content = str.split('"')
        content.pop(0) #gets rid of emptyboi
        # getting the percentage
        percentage = content[1]
        percentage = percentage[1:]
        content.pop(1) # gets rid of comma in front of percentage
        content.append(percentage) # add to list with corresponding job
    else: #if we have no issues with commas then only split by comma
        content = str.split(",")
    num = float(content[1])
    num*=10
    occupation[content[0]] = num #moves the occupation and percentage pairs into the dictionary
    i+=1

# variable that holds the total of percentages
total = 0
for x in occupation:
    total+=occupation[x]
storage.close()

# function that returns a randomly selected occuptation where results are weigh
def return_beeg():
    beegboi = random.randint(0,total) #randomboi generated
    count = 0
    for x in occupation:
        count+=occupation[x]
        if(beegboi<=count):
            return(x)

#test case, because Stella said so
print(return_beeg())
print(return_beeg())
print(return_beeg())
print(return_beeg())
print(return_beeg())
