import java.util.HashMap;
import java.util.Scanner;
import java.util.Arrays;
public class Q3{
    public static void main(String[] args) {
        // HashMap<Character,Integer> mp=new HashMap<>();
        // HashMap<Character,Integer> mp2=new HashMap<>();
        // StringBuilder s=new StringBuilder();
        // StringBuilder s2=new StringBuilder();
        // Scanner sc=new Scanner(System.in);
        // System.out.print("Please Enter one string::-");
        // s.append(sc.nextLine());
        // System.out.println();
        
        // System.out.print("Please Enter another string::-");
        // s2.append(sc.nextLine());
        // System.out.println();

        // if(s.length()!=s2.length())
        // {
        //     System.out.println("Not Anagram");
        // }
        // else
        // {
        //     for(int i=0;i<s.length();i++)
        //     {

        //         mp.put(s.charAt(i), mp.get(s.charAt(i)) + 1);
        //     }

        //     for(int i=0;i<s2.length();i++)
        //     {
        //         mp2.put(s2.charAt(i), mp2.get(s2.charAt(i)) + 1);
        //     }

        //     for(int i=0;i<s2.length();i++)
        //     {
        //         int val1=mp.get(s.charAt(i));
        //         int val2=mp2.get(s2.charAt(i));
        //         if(val1!=val2)
        //         {
        //             System.out.println("Not Anagram");
        //         }
        //         else{
        //             System.out.println("Yes it is an Anagram");
        //         }
        //     }
        // }
        

        String s="";
        String s2="";
        Scanner sc=new Scanner(System.in);
        System.out.print("Please Enter one string::-");
        s=sc.nextLine();
        System.out.println();
        
        System.out.print("Please Enter another string::-");
        s2=sc.nextLine();
        System.out.println();

         if(s.length()!=s2.length())
        {
            System.out.println("Not Anagram");
        }
        int arr[]=new int[26];
        for(int i=0;i<s.length();i++)
        {
            arr[s.charAt(i)-'a']++;
        }
        for(int i=0;i<s2.length();i++)
        {
            arr[s2.charAt(i)-'a']--;
        }
        int flag=0;
        for(int i=0;i<26;i++)
        {
            if(arr[i]!=0)
            {
                System.out.println("Not Anagram");
                flag++;
                break;

            }
            
        }
        if(flag==0)
        {
            System.out.println("Yes it is an Anagram");
        }
        // if(s.length()!=s2.length())
        // {
        //     System.out.println("Not Anagram");
        // }
        // else
        // {
        //     char charArray1[] = s.toCharArray();
        //     Arrays.sort(charArray1);

        //     char charArray2[] = s2.toCharArray();
        //     Arrays.sort(charArray2);
        //     if(Arrays.equals(charArray1,charArray2))
        //     {
        //         System.out.println("Yes it is an Anagram");
        //     }
        //     else
        //     {
        //         System.out.println("Not Anagram");
        //     }
        // }

    }
}