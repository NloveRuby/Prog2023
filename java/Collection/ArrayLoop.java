import java.util.ArrayList;
import java.util.List;

public class ArrayLoop{
    /**
     * @param args
     */
    public static void main(String[] args) {
        // define a list of integer
        // List <Integer> myNum= new ArrayList<Integer>(){
        // };

        // array syntax
        // dataType [] arrayName = {} , fill the items into brackets

        String [] animals = {"Cat","Dog","Cow","Rabbit"};


        for (int i = 0; i < animals.length; i++) {
            System.out.println(animals[i]);
        }

        ArrayList<Integer> intList = new ArrayList<Integer>(5);
        intList.add(1);
        intList.add(2);
        intList.add(3);
        intList.add(4);
        intList.add(5);

        // Iterating through the list
        for (Integer i : intList) {
            System.out.println(i);

    }

}
}
