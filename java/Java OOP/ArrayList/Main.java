import java.util.ArrayList;

public class Main {
    /**
 * @param args
 */
public static void main(String[] args)

    {

        String [] fruits = new  String[3];
        // you should provide the number of elements
        fruits[0]="mango";
        fruits[1]="Apple";
        fruits[2]="Straberry";
        System.out.printf(fruits[0]);
        System.out.println();

//        Create an arrayList
        ArrayList <String> fruitList = new <String > ArrayList();
        fruitList.add("Kiwi");
        fruitList.add("Apple");
        System.out.println("Print the array lis");
        System.out.println(fruitList);
        System.out.println(fruitList.get(0));
        System.out.println(fruitList.contains("Apple"));
        System.out.println("Size of ArrayList");
        System.out.println(fruitList.size());
        System.out.println("Index of");
        System.out.println(fruitList.indexOf(1));
        System.out.println("Is empty");
        System.out.println(fruitList.isEmpty());
/*
        System.out.println("Iterator");
        System.out.println(fruitList.stream().iterator());
*/
        System.out.println("to Arryas");
        System.out.println(fruitList.toArray());


        //          System.out.println(fruitList.iterator());
        for (int i = 0; i < fruitList.size(); i++) System.out.println(fruitList.get(i));



    }



}
