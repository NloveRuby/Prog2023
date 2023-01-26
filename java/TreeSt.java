// // public class TreeSt {

// // //     A TreeSet in Java is a collection that implements the SortedSet interface and is based on a balanced tree data structure. It does not allow duplicate elements, and provides logarithmic-time performance for the basic operations such as adding, removing, and checking for the presence of an element. The elements in a TreeSet are sorted according to their natural order or according to a specified comparator.

// // // Here is an example of creating and using a TreeSet:

// // // import java.util.TreeSet;

// public class TreeSt {
//     public static void main(String[] args) {
//         TreeSet<String> set = new TreeSet<>();
//         set.add("Apple");
//         set.add("Banana");
//         set.add("Cherry");
//         System.out.println(set); // Prints [Apple, Banana, Cherry] in ascending order

//         set.remove("Banana");
//         System.out.println(set); // Prints [Apple, Cherry]

//         System.out.println(set.contains("Apple")); // Prints true
//         System.out.println(set.size()); // Prints 2
//     }
// }

// // In this example, we are creating a TreeSet of strings and adding elements to it using the add() method. The elements are stored in the set in ascending order, based on their natural order. We are also removing an element from the set using the remove() method and checking if an element is present in the set using the contains() method. we are also using size() method to get the size of the set.

// // You can also create a TreeSet using a comparator:




// // public class Main {
// //     public static void main(String[] args) {
// //         TreeSet<String> set = new TreeSet<>(new LengthComparator());
// //         set.add("Apple");
// //         set.add("Banana");
// //         set.add("Cherry");
// //         System.out.println(set); // Prints [Apple, Cherry, Banana] based on the length of the string
// //     }

// //     static class LengthComparator implements Comparator<String> {
// //         @Override
// //         public int


// // }
