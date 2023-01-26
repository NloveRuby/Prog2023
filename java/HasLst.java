// public class HasLst {
// //     A HashSet in Java is a collection that implements the Set interface and is based on a hash table data structure. It does not allow duplicate elements, and provides constant-time performance for the basic operations such as adding, removing, and checking for the presence of an element.

// // Here is an example of creating and using a HashSet:


//     /**
//      * @param args
//      */
//     public static void main(String[] args) {

//         HashSet<String> set = new HashSet<>();
//         set.add("Apple");
//         set.add("Banana");
//         set.add("Cherry");
//         set.add("Apple"); // This will not be added to the set as it is already present
//         System.out.println(set); // Prints [Apple, Banana, Cherry]

//         set.remove("Banana");
//         System.out.println(set); // Prints [Apple, Cherry]

//         System.out.println(set.contains("Apple")); // Prints true
//         System.out.println(set.size()); // Prints 2

//         // In this example, we are creating a HashSet of strings and adding elements to it using the add() method. We are also removing an element from the set using the remove() method and checking if an element is present in the set using the contains() method. we are also using size() method to get the size of the set.

//         // You can also create a HashSet using the constructor that takes an initial capacity and a load factor as arguments:

//         // HashSet<String> set = new HashSet<>(16, 0.75f);

//         // threshold that controls when the hash table should be resized to accommodate more elements.

//         // You can also create a HashSet by passing a collection to the constructor:

//         List<String> list = Arrays.asList("Apple", "Banana", "Cherry");

//         HashSet<String> set = new HashSet<>(list);

//         // You can also use isEmpty() method to check whether the set is empty or not.

//         // You can use clear() method to remove all the elements from the set.

//         // You can use iterator() method to get the iterator for the set.

//         // You can use toArray() method to get the array of elements in the set.




//      }
// }
