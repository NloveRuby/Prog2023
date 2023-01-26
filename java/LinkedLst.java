// A LinkedList in Java is a collection that implements the List interface and is based on a doubly-linked list data structure. It allows for efficient insertion and removal of elements at the beginning and end of the list, as well as efficient access to elements in the middle of the list.

// Here is an example of creating and using a LinkedList:

import java.util.LinkedList;

public class LinkedLst {
    /**
     * @param args
     */
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        System.out.println(list);

        list.addFirst("Strawberry");
        System.out.println(list);

        list.addLast("Peach");
        System.out.println(list);

        list.removeFirst();
        System.out.println(list);

        list.removeLast();
        System.out.println(list);

        list.add(0, "Nasr");
        System.out.println();
        System.out.println("Get an element at o index");
        System.out.println();
        list.get(0);
        list.addLast("Omar");
        System.out.println(list.subList(0, 2));
        System.out.println("Contains Method");
        System.out.println("Contains method = "+list.contains("Omar"));
    


        for (String l : list) {
            System.out.println(l);
        }
    }
}

// In this example, we are creating a LinkedList of strings and adding elements to it using the add() method. We are also using the addFirst() and addLast() methods to insert elements at the beginning and end of the list, respectively. We are also using the removeFirst() and removeLast() methods to remove elements from the beginning and end of the list.

// You can also use getFirst() and getLast() method to get the first and last element from the list respectively.

// You can also use add(index, element) method to add element at specific index.

// You can use remove(index) method to remove element from specific index.

// You can use get(index) method to get element from specific index.

// You can use size() method to get the size of the LinkedList.

// You can use contains(element) method to check whether the element is present or not in the list.
