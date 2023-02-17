import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class test1 {
    Junit j=new Junit();
    
    @Test
    public void positive()
    {
        int expected=6;
        assertEquals(expected,j.div(24,4));
    }
    @Test
    public void negative()
    {
        int expected=-1;
        assertEquals(expected,j.div(5,0));
    }
    @Test
    public void fail()
    {
        int expected=6;
        assertEquals(expected,j.div(4,8));
    }
}
