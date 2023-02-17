import java.util.Scanner;
import java.io.PrintStream;
public class Q2 {
    public static void main(String[] args) {
        String[] arr={"","","ABC","DEF","GHI","JKL","MNO","PQS","TUV","WXY"};
        Scanner sc=new Scanner(System.in);
        int flag = 0;
        int[] n =new int[4];
        while(flag==0){
            try 
            {
                System.out.print("Pls enter a 4 Digit number::");
                String num = sc.next();
                char[] chars = num.toCharArray();
                for (int i = 0; i < chars.length; i++)
                {
                    n[i] = chars[i]-'0';
                    System.out.println(n[i]);
                    if(n[i]==0 || n[i]==1)
                    {
                        throw new customException("Please enter four digit except 0 and 1");
                    }
                    flag++;
                }
            } 
            catch (Exception e) 
            {
                System.out.println(e);
                
            }
        }
        try{
            PrintStream output = new PrintStream("outputQ2.txt");
            for(int i=0;i<3;i++)
            {
                for(int j=0;j<3;j++)
                {
                    for(int k=0;k<3;k++)
                    {
                        for(int l=0;l<3;l++)
                        {
                            output.printf("%c%c%c%c\n",arr[n[0]].charAt(i) , arr[n[1]].charAt(j) , arr[n[2]].charAt(k) , arr[n[3]].charAt(l));
                        }
                    }
                }
            }
            output.close();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        
        
    }
}
