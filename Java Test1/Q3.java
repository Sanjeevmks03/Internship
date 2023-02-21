import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class Q3 {
    private static final String NULL = null;
    private static final HashSet<Object> Character = null;

    public static void main(String[] args) throws IOException {
        File f=new File("input.txt");
        String s="";
        Scanner sc=new Scanner(System.in);
        sc.nextLine();
        try (
        // FileReader f1=new FileReader(f);
       

        PrintWriter pw = new PrintWriter(new FileWriter(f))) 
        {
            pw.print(s);
        }
        
        File fout=new File("output.txt");
        BufferedReader bf=new BufferedReader(new FileReader(new File("input.txt")));
        try (PrintWriter pw1 = new PrintWriter(fout))
        {
            String ln=bf.readLine();
            while(ln!=NULL)
            {
                char[] ch=ln.toCharArray();
                Set<Character>st=new HashSet<Character>();
                for(int j=0;j<ch.length;j++)
                {
                    st.add(ch[j]);
                }
            }
            Iterator<Character>it=Set.iterator<Character>();
            // Iterator is not working here...
            while(it.hasNext())
            {
                pw1.println(it.next());
            }
        }

    }
}
