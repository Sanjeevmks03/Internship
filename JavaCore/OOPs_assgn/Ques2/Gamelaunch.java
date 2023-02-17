import java.util.Scanner; 
import java.lang.Math; 
public class Gamelaunch 
{ 
    public static void main(String[] args) 
    { 
        guessgame obj=new guessgame(); 
        obj.startgame(); 
    } 
} 

class player 
{ 
    int k; 
    int guess(int num) 
    { 
        System.out.println("player "+num+" Guess a number::");
        Scanner sc=new Scanner(System.in);
        int g=sc.nextInt();
        return g; 
    } 
} 

class guessgame 
{ 
    void startgame() 
    { 
        int x= ((int)(10*Math.random())); 
        
        player p1=new player(); 
        player p2=new player(); 
        player p3=new player(); 
        int n=0; 
        while(n==0) 
        { 
            int x1=p1.guess(1); 
            int x2=p2.guess(2); 
            int x3=p3.guess(3); 
            if(x==x1) 
            { 
                System.out.println("player 1 guessed correctly"); 
                n++; 
            } 
            if(x==x2) 
            { 
                System.out.println("player 2 guessed correctly"); 
                n++; 
            } 
            if(x==x3) 
            { 
                System.out.println("player 3 guessed correctly"); 
                n++; 
            } 
            if(n>0) 
            { 
                System.out.println("player1 has guessed:: " + x1); 
                System.out.println("player2 has guessed:: " + x2); 
                System.out.println("player3 has guessed:: " + x3); 
            } 
            if(n==0) 
            { 
                System.out.println("No one guessed correctly,"); 

                System.out.println("Please guess again::"); 
            } 
        } 
        System.out.println("Random number is:: " + x); 
    } 
} 