# Team Nintentoads (Stella Oh, Helena Williams, Jason Chan)
# SoftDev
# K06 -- Amalgate the KREWES
# 2020-09-26

# A program that will print the name of a randomly-selected student
# from team (orpheus, rex, or endymion)

import random

# Dictionary of team (str) and names in each team (list)
KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

# Prints the name of a randomly-selected student from team (orpheus, rex, or endymion)
def pick_name():
    team = input("orpheus, rex, or endymion: ") #ask for team name
    team = team.lower() #non-case sensitive

    if team != "orpheus" and team != "rex" and team != "endymion": #Not a teamname
        print("That's not one of the three")
    else: # picks random name from that chosen team
        print(random.choice(KREWES.get(team)))

#test-run of random name
pick_name()
    

