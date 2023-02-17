import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
public class Q6{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Pls enter any number::");
        int n=sc.nextInt();
        // HashMap<Integer,Integer> mp=new HashMap<>();
        // ArrayList arr=new ArrayList<>();
        // arr.add(1);
        // for(int i=2;i<=n;i++)
        // {
        //     mp.put(i,0);
        // }
        // for(int i=2;i<=n;i++)
        // {
        //     int flag=2;
        //     for(int m=i;m<=n;m++)
        //     {
        //         if(mp.get(m)==0)
        //         {
        //             arr.add(m);
        //             flag=m;
        //             break;
        //         }
        //     }
        //     int cnt=-1;
        //     for(int j=flag;j<=n;j++)
        //     {
        //         if(mp.get(j)==0)
        //         {
        //             cnt++;
        //         }
        //         //cnt++;
        //         if(cnt%i==0)
        //         {
        //             mp.put(j,1);
        //         }
                
        //     }
        // }

        // for(int i=0;i<arr.size();i++)
        // {
        //     System.out.print(arr.get(i));
        //     System.out.print(" ");
        // }

        ArrayList<Integer> arr =  new ArrayList<>();
        for(int i =1;i<=n;i++){
            arr.add(i);
        }
        for(int i=1;i<arr.size();i++)
        {
            int top = arr.get(i);
            int remove = top+i;
            while(remove<arr.size()){
                arr.remove(remove);
                remove = remove+top-1;
            }
        }
        System.out.println(arr);
    }
}