import java.util.Scanner;
import java.util.LinkedList;

public class Q3 {
    public static void main(String[] args) {
        LinkedList<Character> ll1=new LinkedList<Character>();
        LinkedList<Character> ll2=new LinkedList<Character>();
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter the number of characters you want for linkedlist1::");
        int n1=sc.nextInt();
        //char c = sc.next().charAt(0);   
        for(int i=0;i<n1;i++)
        {
            ll1.addLast(sc.next().charAt(0));
        }
        System.out.print("Enter the number of characters you want for linkedlist1::");
        int n2=sc.nextInt();
        for(int i=0;i<n2;i++)
        {
            ll2.addLast(sc.next().charAt(0));
        }
        //ListConcatenate l=new ListConcatenate();
        ListConcatenate.concatenate(ll1, ll2);
        System.out.println(ll1);
        sc.close();
    }
}
