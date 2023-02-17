import java.util.Scanner;


public class Q2 {
    public static void main(String[] args) {
        String s;
        Scanner sc=new Scanner(System.in);
        System.out.print("Please eneter number of test cases::-");
        int t=sc.nextInt();
        while(--t >= 0)
        {
            
            System.out.println("Please eneter string:: ");
            s=sc.next();
            System.out.println("");
            int n=s.length();
            int ans=0;
            int strt=0,end=1;
            while(end<n)
            {
                if(end==n-1)
                {
                    ans=Math.max(ans,strt+1);
                    break;
                }
                else if(s.charAt(strt)==s.charAt(end))
                {
                    strt++;
                    end++;
                }
                else 
                {
                    end=end-strt+1;
                    strt=0;
                }
            }
            System.out.println("The length is::"+ ans);
            

        }
        
    }
}
