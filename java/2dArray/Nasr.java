import java.util.ArrayList;

public class Nasr {
 
    /**
     * @param args
     */
    public static void main(String[] args) {
        ArrayList<String> bakeryList = new ArrayList<String>();

        bakeryList.add("pasta");
		bakeryList.add("garlic bread");
		bakeryList.add("donuts");
		System.out.println("bakeryList");
		// return the list as an array
        System.out.println(bakeryList);
		// return first item in the ArrayList
		System.out.println(bakeryList.get(0));

        ArrayList<String> produceList = new ArrayList<String>();
		produceList.add("tomatoes");
		produceList.add("zucchini");
		produceList.add("peppers");
		System.out.println("produceList");
		// return the list as an array
		System.out.println(produceList);
		// return first item in the ArrayList
		System.out.println(produceList.get(0));

        ArrayList<String> drinksList = new ArrayList<String>();

		drinksList.add("soda");
		drinksList.add("coffee");
		// return the list as an array
		System.out.println("drinksList");
		System.out.println(drinksList);
		// return first item in the ArrayList
		System.out.println(drinksList.get(0));

		//combine all in one
		ArrayList<ArrayList<String>> combinedArrayListt = new ArrayList<ArrayList<String> >();


		combinedArrayListt.add(bakeryList);
		combinedArrayListt.add(produceList);
		combinedArrayListt.add(drinksList);
		System.out.println("combinedArrayListt");
		System.out.println(combinedArrayListt );
		//return first array in 2d array list
		System.out.println(combinedArrayListt.get(0) );
		//return first item in first array in 2d array list
		System.out.println(combinedArrayListt.get(0).get(0));
		// loop 2d array
		System.out.println("****** loop 2d array");
		System.out.println();
		for (ArrayList item  : combinedArrayListt) {
			
			System.out.println(item);
		}

    }
}
