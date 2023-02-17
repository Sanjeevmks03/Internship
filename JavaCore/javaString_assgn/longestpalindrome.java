import java.util.Scanner;
public class longestpalindrome {
    public static int solve(String s)
    {
        int n=s.length();
        int mx=1,strt=0;
        int l,h;
        for(int i=0;i<n;i++)
        {
            l=i-1;
            h=i+1;
            while(h<n && s.charAt(h)==s.charAt(i))h++;
            while(l>=0 && s.charAt(l)==s.charAt(i))l--;
            while(l>=0 && h<n &&s.charAt(l)==s.charAt(h))
            {
                l--;
                h++;
            }

            int len=h-l-1;
            if(mx<len)mx=len;
            strt=l+1;

            System.out.println(s.substring(strt,strt+mx));
            
        }
        return mx;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        
        System.out.println(solve(s));
        sc.close();
    }
}
