// Implementing function overloading 

public class Overloading{ 

    public static void main(String args[]) 
    
    { 
    
    func(); 
    
    func("Sanjeev"); 
    
    func(9); 
    
    } 
    
    public static void func() 
    
    { 
    
    System.out.println("This is a function with 0 argument"); 
    
    } 
    
    public static void func(String name) 
    
    { 
    
    System.out.println("Hello " + name + " ,This is a function with 1 argument"); 
    
    } 
    
    public static void func(int date) 
    
    { 
    
    System.out.println("This is a function with argument as integer as today date is"+ date+ "(passed argument)"); 
    
    } 
    
    } 