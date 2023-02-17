import java.util.Formatter;
import java.io.File;
import java.util.Scanner;
public class test {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=0;
        System.out.println("Please enter number of inputs");
        n=sc.nextInt();
        try{
            Formatter input=new Formatter("numbers.txt");
            Formatter out=new Formatter("outnumbers.txt");
            for(int i=0;i<n;i++)
            {
                int s=sc.nextInt();
                input.format("%n%d",s);
            }
            input.close();

            Scanner scanner = new Scanner(new File("numbers.txt"));
            while(scanner.hasNextInt())
            {
                int k = scanner.nextInt();
                System.out.println(k);
                out.format("%n%d",k);
            }
            out.close();
            scanner.close();
        }
        catch(Exception e){
            System.out.println(e);
        }
        finally{
            
        }
    }
}
