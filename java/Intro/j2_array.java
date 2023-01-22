package Intro;
public class j2_array {
    public static void main(String[] args) {
        // wrapper class

        int [] nums = {11,23,24,1000};
        //length of nums
        int l = nums.length;
        System.out.println(l);
        Object s =nums.toString();
        System.out.println(s);
        /*loop an array*/
        for (int i = 0; i < nums.length; i++) {
            
            System.out.println(i);
           
        }

    //     String [] sr = new String [3], retun name;

    //     sr[0]= "Nasr";
    //     sr[1]= "Mona";
    //     sr[2]= "Shad";
    //     /* Loop an array of string using index []*/

    //     for (int i = 0; i < sr.length; i++) {
    //         System.out.println(sr[i]);
    //     }
        
    // }

    String [] sr = new String [3];

    sr[0]= "Nasr";
    sr[1]= "Mona";
    sr[2]= "Shad";
    /* Loop an array of string, retun position number*/

    for (int i = 0; i < sr.length; i++) {
        System.out.println(i);
    }
    



    }
}
