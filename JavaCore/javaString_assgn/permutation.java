import java.util.*;
public class permutation{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        sc.close();
        int n=s.length();
        permutation p=new permutation();
        p.solve(s,0,n-1);
    }

    public void solve(String s,int l,int r)
    {
        if(l==r)
        {
            System.out.println(s);
        }
        else{
            for(int i=l;i<=r;i++)
            {
                s=swap(s,l,i);
                solve(s,l+1,r);
                s=swap(s,l,i);
            }
        }
    }
    public String swap(String a,int i,int j)
    {
        char tmp;
        char[] ch=a.toCharArray();
        tmp=ch[i];
        ch[i]=ch[j];
        ch[j]=tmp;
        return String.valueOf(ch);
    }
}