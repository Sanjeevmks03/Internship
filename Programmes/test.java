import java.util.HashMap;
import java.util.Map;

public class test{
    public static void main(String[] args) {
        String[] str={"sanjeev","manish","chhotu"};
        Map<String,Boolean> mp=new HashMap<String,Boolean>();
        for(String s:str)
        {
            mp.put(s,true);
        }
        System.out.println(mp.containsKey("sanjeev"));
    }
}

