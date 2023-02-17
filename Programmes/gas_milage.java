import java.util.Scanner;
class gas_milage{
    public static void main(String[] args)
    {
        System.out.print("Pls enter the number of trips::");
        System.out.println();
        int n=0;
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();

        int totalg=0,totald=0;
        int galon,dis;
        for(int i=0;i<n;i++)
        {
            System.out.print("Pls enter the distance covered in this trip::");
            System.out.println();
            dis=sc.nextInt();
            System.out.print("Pls enter the galons used in this trip::");
            System.out.println();
            galon=sc.nextInt();
            System.out.print("miles per galon for this trip is::");
            System.out.println((float)dis/galon);
            totalg+=galon;
            totald+=dis;
        }
        System.out.print("Average milage of total trip is::");
        System.out.println((float)totald/totalg);

    }
}