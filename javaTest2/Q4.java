import java.util.Scanner;

public class Q4 {
    static int solve(int n,int m,int i,int j)
    {
        if(i>=n || j>=m)return 0;
        if(i==n-1 || j==m-1)return 1;
        return solve(n,m,i+1,j)+solve(n,m,i,j+1);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number of test case:: ");
        int t=sc.nextInt();
        while(--t>=0)
        {
            System.out.println("Please enter row and column::");
            int n=sc.nextInt();
            int m=sc.nextInt();

            int ans=solve(n,m,0,0);
            System.out.println("No of paths is ::"+ ans);
        }
        
    }
}
