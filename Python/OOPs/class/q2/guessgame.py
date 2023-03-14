import player

class guessgame:
    def startgame():
        player1=player.player
        player2=player.player
        player3=player.player

        guessed=player.player
        rand=guessed.Guess()

        flag=0
        while flag==0:
            n1=player1.player_guess(1)
            n2=player2.player_guess(2)
            n3=player3.player_guess(3)
            if n1==rand:
                print("player1 wins")
                flag=1
            elif n2==rand: 
                print("player2 wins")
                flag=1
            elif n3==rand: 
                print("player3 wins")
                flag=1
            else: print("noone wins...Try again!")

        print(rand)
