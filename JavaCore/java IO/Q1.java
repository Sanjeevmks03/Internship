import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;
import java.io.FileOutputStream;

public class Q1{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=0;
        System.out.println("Please enter number of inputs");
        n=sc.nextInt();
        try{
            File f1 = new File("inp.txt");
            f1.createNewFile();
            PrintWriter pw1 = new PrintWriter(f1);

            File f2 = new File("output.txt");
            f2.createNewFile();
            PrintWriter pw2 = new PrintWriter(f2);

            for(int i=0;i<n;i++)
            {
                pw1.println(sc.next());
            }
            // BufferedReader br=new BufferedReader(new FileReader("inp.txt"));
            // String str;
            // while((str=br.readLine())!=null)
            // {
            //     System.out.println(str);
            //     pw2.write(str);
            //     //str=br.readLine();
            // }
                // File myObj = new File("inp.txt");
                // Scanner myReader = new Scanner(myObj);
                // while (myReader.hasNextLine()) {
                //   String data = myReader.nextLine();
                //   System.out.println(data);
                //   pw2.println(data);
                // }
                // myReader.close();
            pw1.close();
            pw2.close();
            //br.close();
        }
        catch(Exception e){
            System.out.println(e);
        }
        
        
    }
}