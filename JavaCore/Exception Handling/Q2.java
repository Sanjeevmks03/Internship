import java.io.IOException;

public class Q2{
    //unchecked exception needs to use throw clause
    public static void b() throws IOException{
        throw new IOException();
    }
    public static void methodb(){
        try{
            b();
        }
        catch(Exception e)
        {
            System.out.println("Exception occured in method b is" + e);
        }
        
    }
    public static void main(String[] args) {
        
        methodb();
    }
}