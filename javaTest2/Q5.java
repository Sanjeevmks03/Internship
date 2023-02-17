import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Q5 {
    static Boolean solve(Map<String,Boolean> mp,String s,int i)
    {
        if(i==s.length())return true;
        String tmp="";
        for(int j=i;j<s.length();j++)
        {
            tmp+=s.charAt(j);
            if(mp.containsKey(tmp) && solve(mp,s.substring(j+1),j+1)==true)
            {
                return true;
            }
        }
        return false;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number of test case:: ");
        int t=sc.nextInt();
        while(--t>=0)
        {
            Map<String,Boolean> mp=new HashMap<>();
            System.out.println("Enter no. of words in dictionary::");
            int n=sc.nextInt();
            for(int i=0;i<n;i++)
            {
                mp.put(sc.next(),true);
            }
            String s="";
            System.out.println("Please enter a string to segment::");
            s=sc.next();
            if(solve(mp,s,0)==true)
            {
                System.out.println("1");
            }
            else{
                System.out.println("0");
            }
            
        }
    }
}
