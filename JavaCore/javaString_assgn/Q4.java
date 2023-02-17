import java.util.Scanner;

class Q4 {
	public static void main(String args[])
	{
        Scanner sc=new Scanner(System.in);

		
        System.out.print("Please enter the number of string::");
        int n=sc.nextInt();
        String[] arr= new String[n];
        for(int i=0;i<n;i++)
        {
            // String str="";
            // str=sc.nextLine();
            arr[i]=sc.next();
        }


        String s = arr[0];
		String ans = "";

		for (int i=0;i<n;i++) {
			for (int j=i+1;j<=n;j++) {
				String str=s.substring(i, j);
				int k=1;
				for (k=1;k<n;k++)
					if (!arr[k].contains(str))
						break;
				if (k == n && ans.length() < str.length())
					ans = str;
			}
		}
		System.out.println(ans);
	}
}
