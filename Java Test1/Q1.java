import java.util.Scanner;
public class Q1{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        try{
            System.out.print("Please enter one string::");
            int n=sc.nextInt();
            sc.close();
            int tmp=0;
            while(n>0)
            {
                tmp=tmp*10+(n%10);
                n/=10;
            }
            System.out.println(tmp);
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        
    }
}