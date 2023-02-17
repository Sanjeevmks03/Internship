import java.net.SocketImpl;
import java.util.ArrayList;
import java.util.Scanner;
public class Q1
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Please Enter one string::-");
        String s=new String();
        s=sc.nextLine();
        System.out.println();
        String arr="";
        //String arr="";
        //arr=s.toHexString();
        for(int i=0;i<s.length();i++)
        {
            //System.out.println(s.charAt(i));
            int k=((int)s.charAt(i));
            arr+=(Integer.toHexString(k));
        }
        System.out.println(arr);
        
    }
}