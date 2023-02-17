public class rectangle extends Quad{
    rectangle(float x1,float x2,float x3,float x4,float y1,float y2,float y3,float y4)
    {
        super(x1,x2,x3,x4,y1,y2,y3,y4);
    }

    
    public float area(){
        return (sideLength(getP1(), getP2())*sideLength(getP3(), getP4()));
    }
}
