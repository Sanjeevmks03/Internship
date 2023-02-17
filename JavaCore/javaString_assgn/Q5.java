import java.util.Scanner;
public class Q5{
    public static void main(String[] args) {
        System.out.println("Please enter any odd number");
        Scanner sc=new Scanner(System.in);
        int x=sc.nextInt();
        if(x%2==0)
        {
            System.out.println("The number is even Please enter any odd");
        }
        else
        {
            int[][] arr=new int[x][2*x-1];
            for(int i=0;i<=x/2;i++)
            {
                int k=2*i +1;

                for(int j=0;j<x;j++)
                {
                    if(j>=(x-k)/2&&j<x-(x-k)/2)
                    {
                        System.out.print("-");
                    }
                    else
                    {
                        System.out.print(" ");
                    }
                }
                System.out.println("");
            }


            for(int i=x/2-1;i>=0;i--)
            {
                int k=2*i +1;

                for(int j=0;j<x;j++)
                {
                    if(j>=(x-k)/2&&j<x-(x-k)/2)
                    {
                        System.out.print("-");
                    }
                    else
                    {
                        System.out.print(" ");
                    }
                }
                System.out.println("");
            }

        }
    }
}