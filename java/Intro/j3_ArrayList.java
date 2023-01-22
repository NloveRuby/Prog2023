package Intro;
import java.util.ArrayList;

class food{

    public static void main(String[] args) {
        // arrayList stores reference data type
        // write <dataType in full letters>
        // Array list is dynamically resized

        ArrayList <String> food = new ArrayList<String>();
            food.add("kk");
            food.add("cheese");
            food.add("pepsi");

            for (String foodd : food) {
            // this means for foodd in food
                System.out.println(foodd);
            }
        System.out.println();
        System.out.println("Different way to loop , but same result");
        System.out.println();

        // methods
        food.set(0, "Formage");
        food.add("kebaba"); // add a string at the end
        food.add(1, "Kofta");
        // food.clone();
        System.out.println("contains "+ food.contains("Kebaba"));
        System.out.println("Get class "+food.getClass());
        System.out.println("index of "+food.indexOf("Formage"));
        System.out.println("is empty = "+food.isEmpty());
        System.out.println(food.get(0));
        System.out.println(food.lastIndexOf(food));
        System.out.println(food.remove("Formage"));
        System.out.println("Sublist "+food.subList(0, 2));
        System.out.println("to  array "+food.toArray());
        System.out.println("Iterator "+food.iterator());
        System.out.println(food.spliterator());


        for (int i = 0; i < food.size(); i++) {
            
            System.out.println(food.get(i));

        
        }

        // arrayList methods
       
    }

}