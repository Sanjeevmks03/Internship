class Quad{  
    point p1,p2,p3,p4;
    Quad(float x1,float x2,float x3,float x4,float y1,float y2,float y3,float y4)
    {
        p1=new point(x1,y1);
        p2=new point(x2,y2);
        p3=new point(x3,y3);
        p4=new point(x4,y4);
    }
    public float Trainglearea(point a, point b, point c){
        float area = (a.x * (b.y - c.y)
                    + b.x * (c.y - a.y) + c.x * (a.y - b.y)) / 2.0f;
        return Math.abs(area);
    }

    public float sideLength(point a, point b){
        float dis = (float) Math.sqrt((b.x-a.x)*(b.x-a.x) + (b.y-a.y)*(b.y-a.y));
        return dis;
    }
    point getP1()
    {
        return p1;
    }
    point getP2()
    {
        return p2;
    }
    point getP3()
    {
        return p3;
    }
    point getP4()
    {
        return p4;
    }
    
}