import java.util.Scanner;
public class Q2
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Please Enter one string::-");
        String s=new String();
        s=sc.nextLine();
        System.out.println();

        String str1="";
        String str2="";
        int n=s.length();
        int i=0;
        for(i=0;i<n;i++)
        {
            if(s.charAt(i)==' ')
            {
                break;
            }
            else{
                str1+=s.charAt(i);
            }

        }
        s=s.substring(i, s.length());

        System.out.println(s);
        for(i=s.length()-1;i>=0;i--)
        {
            if(s.charAt(i)==' ')
            {
                break;
            }
            else{
                str2=s.charAt(i)+str2;
            }
        }
        s=s.substring(0, i);
        System.out.println(s);

        n=s.length();
        StringBuilder string = new StringBuilder(s);
        string.reverse();

        System.out.println(s);
        str2+=" "+string+ " ";
        str2+=str1;

        
        System.out.println(str2);
    }
}