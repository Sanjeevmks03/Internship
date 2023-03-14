import random
class player:
    def Guess():
        return random.randrange(0,10)
    def player_guess(k):
        n=int(input(f"player{k} Guess any number:: "))
        return n