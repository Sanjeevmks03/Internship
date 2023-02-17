package Junit_assign;
import org.junit.jupiter.api.Test;

public class test1 {
    junit j=new junit();
    
    @Test
    public int square()
    {
        int expected=16;
        assertEquals(expected,j.square(4));
    }

}
    
