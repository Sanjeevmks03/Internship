import java.sql.*;
import java.util.*;

class Employee
{
    int id;
    String name;
    int age;
    
    Employee(int id, String name, int age)
    {
        this.id=id;
        this.name=name;
        this.age=age;
    }
}

public class code
{    
    public static void main(String[] args)
    {
        try
        {

            ArrayList<Employee> arr=new ArrayList<Employee>();
            arr.add(new Employee(1009,"Sanjeev",21));
            arr.add(new Employee(1007,"Gaurav",25));
			arr.add(new Employee(1008,"Nitish",22));
			arr.add(new Employee(1011,"Tushar",27));
			arr.add(new Employee(1005,"sunil",18));

            Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/BeehyvEmployee","root","Sanjeev@sql01");
            Statement stmt=conn.createStatement();
            System.out.println("Database Connected");
            
            for(int i=0;i<arr.size();i++){
                String str="INSERT INTO  Employee VALUES("+arr.get(i).id+","+"'"+arr.get(i).name+"'"+","+arr.get(i).age+")";
                int q1=stmt.executeUpdate(str);
            }

            ResultSet res=stmt.executeQuery("SELECT * FROM Employee ORDER BY Age");
          
            while(res.next())
            {
                System.out.println(res.getInt("age")+" "+res.getString("name")+" "+res.getInt("empid"));
            }
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
}