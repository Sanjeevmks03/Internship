public class Q1{
    public static <T> void printArray(T[] input)
    {
        for(T ele:input)
        {
            System.out.print(ele+" ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Integer arr[]={1,2,3,4,5};
        Double arrd[]={1.2,2.365,5.657};
        Character arrc[]={'a','3','f'};
        System.out.println("Integer elements are::-");
        printArray(arr);
        System.out.println("Double elements are::-");
        printArray(arrd);
        System.out.println("Character elements are::-");
        printArray(arrc);
    }
}