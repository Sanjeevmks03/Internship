import java.util.Scanner;
public class Q2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s="";
        
        System.out.println("Please enter one string::");
        s=sc.next();
        StringBuilder str=new StringBuilder(s);
        sc.close();

        int n=s.length();
        StringBuilder tmp=new StringBuilder(s);
        tmp.reverse();

        int[][] a=new int[n+2][n+2];

        for(int i=0;i<=n;i++)
        {
            a[i][0]=0;
            a[0][i]=0;
        }

        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n;j++)
            {
                if(str.charAt(i-1)==(tmp.charAt(j-1)))
                {
                    a[i][j]=1+ Math.max(a[i-1][j],a[i][j-1]);
                }
                else{
                    a[i][j]=Math.max(a[i-1][j],a[i][j-1]);
                }
            }
        }

        for(int i=0;i<=n;i++)
        {
            for(int j=0;j<=n;j++)
            {
                System.out.print(a[i][j]+" ");
            }
            System.out.println();
        }

        System.out.println("ans="+ (n-a[n][n]));
    }
}
