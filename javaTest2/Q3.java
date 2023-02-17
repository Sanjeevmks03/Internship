import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Q3 {
    static void solve(ArrayList<ArrayList<Integer>> st,ArrayList<Integer> arr,ArrayList<Integer> tmp,int i)
    {
        if(i>=arr.size())
        {
            st.add(tmp);
            return;
        }
        else{
            solve(st,arr,new ArrayList(tmp),i+1);
            tmp.add(arr.get(i));
            solve(st,arr,new ArrayList(tmp),i+1);
        }
        
    }
    public static void main(String[] args) {
        ArrayList<Integer> arr=new ArrayList<Integer>();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number of test cases::-");
        int t=sc.nextInt();
        while(--t >=0)
        {
            System.out.print("enter number of elements");
            int n=sc.nextInt();
            for(int i=0;i<n;i++)
            {
                arr.add(sc.nextInt());
            }
            // sorting is not working here pls consider it.. In java some syntax i am forgoting...
            Collections.sort(arr);
            ArrayList<ArrayList<Integer>> st=new ArrayList<ArrayList<Integer>>();
            ArrayList<Integer> tmp=new ArrayList<Integer>();

            solve(st,arr,tmp,0);
            System.out.println(st);
            st.clear();
            System.out.println("");

            
        }
        

    }
}
