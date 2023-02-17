public class test2 {
    junit j=new junit();
    
    @Test
    public void cube()
    {
        int expected=16;
        assertEquals(expected,j.cube(4));
    }
}
