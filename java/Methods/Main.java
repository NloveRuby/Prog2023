package Methods;

public class Main{

    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println();
        // declare the function outside main , and call it in main
        
        hello();
        hello();
        hello();
        System.out.println();
        greet("Nasr");
        System.out.println(add(2,5));
        System.out.println(div(10,5));
        NameAge("Nasr", 49);
        NameAge("omar ", "white");

        }

       /**
     * 
     */
    static void hello(){

        System.out.println("hello");
    }
    
    static void greet(String name){

        System.out.println("hello "+ name);
    }

    static int add(int x,int y){

        return x*y;
    }

    static int div(int x, int y){

        return x/y;
    
    }

static void NameAge(String name, int age){

    System.out.println("hello " + name + " your age is " +age);
}

// overloads of function NameAge
static void NameAge(String name,String color){
    System.out.println("your name is "+ name + "and your color is "+ color);
}

}
