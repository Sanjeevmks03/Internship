import java.io.IOException;

public class Q1{
    public static void methodc(){
        System.out.println(7/0);
    }
    // checked exception don't need to use throws clause
    public static void b(){
        throw new ArithmeticException();
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
    public static void methoda(){
        try{
            int a=3/0;
        }
        catch(ArithmeticException e)
        {
            System.out.println("Handled the exception in same method::");
        }
    }
    public static void main(String[] args) {
        methoda();
        methodb();
        methodc();
    }
}
