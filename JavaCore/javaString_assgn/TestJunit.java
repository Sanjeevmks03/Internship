import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TestJunit {
    @Test
	public void test() {
		junit j=new junit();
		int expected=4;
		int actual=j.add(3,1);
		assertEquals(expected,actual);
	}
}
