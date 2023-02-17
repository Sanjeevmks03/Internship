import java.util.Scanner;

public class Q3{
    public static void main(String[] args) {
        String[] arr=new String[]{"Sanjeev","Gaurav","Nitish","Sunny"};
        System.out.print("Please Enter one name::");
        Scanner sc=new Scanner(System.in);
        String s=sc.next();
        try{
            int flag=0;
            for(String ele:arr)
            {
                if(ele.equals(s))
                {
                    System.out.println("Exceptions not occured::");
                    flag++;
                    break;
                }
            }
            if(flag==0)throw new custom("Name not in the list::");
            
        }
        catch(custom e){
            System.out.println(" Exception found is "+e);
        }
        finally{
            System.out.println("Exception handled::");
        }
    }
    
}

