import java.util.Scanner;
public class Main {
    public static void main(String[] args)
    {
        float x1,x2,x3,x4,y1,y2,y3,y4;
        Scanner sc=new Scanner(System.in);
        int n=0;
        while(n==0)
        {
            System.out.println("Which figure area you want? ");
            System.out.println("1. Square");
            System.out.println("2. rectangle");
            System.out.println("3. parallelogram");
            System.out.println("4. Trapezoid");
            int k=sc.nextInt();
            if(k>=1 && k<=4)
            {
                System.out.println("Please, Enter the sides accordingly::");
                System.out.println("Enter x,y,coordinates for point 1:: ");
                x1=sc.nextInt();
                y1=sc.nextInt();

                System.out.println("Enter x,y,coordinates for point 2:: ");
                x2=sc.nextInt();
                y2=sc.nextInt();

                System.out.println("Enter x,y,coordinates for point 3:: ");
                x3=sc.nextInt();
                y3=sc.nextInt();

                System.out.println("Enter x,y,coordinates for point 4:: ");
                x4=sc.nextInt();
                y4=sc.nextInt();

                switch(k)
                {
                    case 1:
                    System.out.println("Area of Square::");
                    sqre s=new sqre(x1,x2,x3,x4,y1,y2,y3,y4);
                    System.out.println(s.area());
                    n++;
                    break;

                    case 2:
                    System.out.println("Area of rectangle::");
                    rectangle r=new rectangle(x1,x2,x3,x4,y1,y2,y3,y4);
                    System.out.println(r.area());
                    n++;
                    break;

                    case 3:
                    System.out.println("Area of parallelogram::");
                    parallelogram p=new parallelogram(x1,x2,x3,x4,y1,y2,y3,y4);
                    System.out.println(p.area());
                    n++;
                    break;

                    case 4:
                    System.out.println("Area of Trapezoid::");
                    trapezoid t=new trapezoid(x1,x2,x3,x4,y1,y2,y3,y4);
                    System.out.println(t.area());
                    n++;
                    break;

                }
            }
            if(n==0)
            {
                System.out.println("Please enter correct number::");
            }
        }
    }
}
