import java.util.Iterator;
import java.util.Scanner;
import java.util.Stack;

public class Q2 {
    public static void main(String[] args) {
        Stack<Character> st=new Stack<Character>();
        Scanner sc=new Scanner(System.in);
        System.out.println("please enter a string::-");
        String s=sc.next();
        char ch[]=s.toCharArray();
        for(int i=0;i<ch.length;i++)
        {
            st.push(ch[i]);
        }
        Iterator<Character> it=st.iterator();
        int i=ch.length-1;
        int flag=0;
        while(it.hasNext())
        {
            Object cr=it.next();
            if(!cr.equals(ch[i--]))
            {
                System.out.println("Not a Palindrome");
                flag++;
                break;
            }
        }
        if(flag==0)System.out.println("Yes it is a palindrome");
        sc.close();
    }
}
