import java.util.Scanner;
import java.util.Stack;

public class Q1{
    public static void main(String[] args) {
        Stack<Integer> st=new Stack<Integer>();
        Scanner sc=new Scanner(System.in);
        System.out.print("Please enter number of inputs::");
        int n=sc.nextInt();
        for(int i=0;i<n;i++)
        {
            st.add(sc.nextInt());
        }

        Stack<Integer> st1=new Stack<Integer>();
        while(!st.isEmpty())
        {
            int k=st.peek();
            st.pop();
            while(!st1.isEmpty() && st1.peek()>k)
            {
                st.add(st1.peek());
                st1.pop();
            }
            st1.add(k);
        }
        while(!st1.isEmpty())
        {
            System.out.println(st1.peek());
            st1.pop();
        }
    }
}