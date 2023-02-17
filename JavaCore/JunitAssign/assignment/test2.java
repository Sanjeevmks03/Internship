import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class test2 {
    Junit j=new Junit();
    
    @Test
    public void positive()
    {
        int expected=64;
        assertEquals(expected,j.cube(4));
    }
    @Test
    public void negative()
    {
        int expected=64;
        assertEquals(expected,j.cube('b'));
    }
    @Test
    public void fail()
    {
        int expected=6;
        assertEquals(expected,j.cube(4));
    }
}
