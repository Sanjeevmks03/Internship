// Implementing function overriding 

class func2 extends func{ 

    public void show() 
    
    { 
    
    System.out.println("This is func2 class"); 
    
    } 
    
    } 
    
    class func extends Overiding{ 
    
    public void show() 
    
    { 
    
    System.out.println("This is extended class"); 
    
    } 
    
    } 
    
    class Overiding{ 
    
    public void show() 
    
    { 
    
    System.out.println("This is parent class"); 
    
    } 
    
    public static void main(String args[]) 
    
    { 
    
    Overiding obj3=new Overiding(); 
    
    obj3.show(); 
    
     
    
    // This is overriding 
    
    Overiding obj1=new func(); 
    
    obj1.show(); 
    
    Overiding obj=new func2(); 
    
    obj.show(); 
    
     
    
    } 
    
    } 