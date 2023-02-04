<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Naw</title>
</head>

<body>

    <?php
    $nam = "Nasr";
    // conct
    echo "Hello " . $nam;
    ?>

    <?php
    $nam = "Nasr";
    // string interploation
    echo "Hello {$nam} ";
    ?>

    <p>Logial operator</p>
    <?php
    $day = "Sunday";
    if ($day == "Sunday" || $$day == "Saturday") {
        echo "Day off";
    } else {
        echo "Working day";
    }
    ?>

    <?php
    $age = 12;
    if (!$age == 13) {

        echo  "it is not 12 ";
    }
    ?>


    <p>Array</p>

    <?php
    $days = array('Sunday', 'Monday', 'Tuesday', 'wed');
    $days2 = array('thrusday', 'friday', 'Saturday');
    // print_r used to print arrays
    print_r($days);
    print_r($days2);

    print_r($day[1] . "item 1");

    $nums = array(12, 13, 56, 17, 19);
    print_r($nums);
    // to remove an item
    // unset($nums[0]);
    print_r($nums);
    // to add the number back
    $nums[0] = 12;
    print_r($nums);
    // print_r(sort($nums));
    // // reverse sort
    print_r(rsort($nums));

    ?>

    <?php

    // Creating an array using the array function
    $colors = array("red", "green", "blue", "yellow");

    // Printing the array using print_r
    print_r($colors);

    // Accessing an element in the array
    echo $colors[0];

    // Adding an element to the end of the array using array_push
    array_push($colors, "purple");
    print_r($colors);

    // Removing an element from the end of the array using array_pop
    array_pop($colors);
    print_r($colors);

    // Adding an element to the beginning of the array using array_unshift
    array_unshift($colors, "pink");
    print_r($colors);

    // Removing an element from the beginning of the array using array_shift
    array_shift($colors);
    print_r($colors);

    // Counting elements in the array using count
    echo count($colors);

    // Sorting the array in ascending order using sort
    sort($colors);
    print_r($colors);

    // Sorting the array in descending order using rsort
    rsort($colors);
    print_r($colors);

    // Checking if a value exists in the array using in_array
    echo in_array("red", $colors);

    ?>

    <p>Associative array</p>

    <?php

    // Creating an associative array using the array function
    $person = array("name" => "John", "age" => 30, "gender" => "male");

    // Printing the associative array using print_r
    print_r($person);

    // Accessing an element in the associative array
    echo $person["name"];

    // Adding an element to the associative array
    $person["address"] = "123 Main St.";
    print_r($person);

    // Removing an element from the associative array using unset
    unset($person["age"]);
    print_r($person);

    // Counting elements in the associative array using count
    echo count($person);

    // Sorting the associative array in ascending order by key using ksort
    ksort($person);
    print_r($person);

    // Sorting the associative array in descending order by key using krsort
    krsort($person);
    print_r($person);

    // Sorting the associative array in ascending order by value using asort
    asort($person);
    print_r($person);

    // Sorting the associative array in descending order by value using arsort
    arsort($person);
    print_r($person);

    // Checking if a key exists in the associative array using array_key_exists
    echo array_key_exists("name", $person);

    ?>
    <p>Loop arrays</p>

    <?php

    // Indexed array
    $colors = array("red", "green", "blue", "yellow");

    // For Loop
    for ($i = 0; $i < count($colors); $i++) {
        echo $colors[$i] . "\n";
    }

    // Foreach Loop
    foreach ($colors as $color) {
        echo $color . "\n";
    }

    // Do-While Loop
    $i = 0;
    do {
        echo $colors[$i] . "\n";
        $i++;
    } while ($i < count($colors));

    // While Loop
    $i = 0;
    while ($i < count($colors)) {
        echo $colors[$i] . "\n";
        $i++;
    }

    // Associative array
    $person = array("name" => "John", "age" => 30, "gender" => "male");

    // Foreach Loop
    foreach ($person as $key => $value) {
        echo $key . ": " . $value . "\n";
    }

    // Do-While Loop
    $keys = array_keys($person);
    $i = 0;
    do {
        echo $keys[$i] . ": " . $person[$keys[$i]] . "\n";
        $i++;
    } while ($i < count($person));

    // While Loop
    $keys = array_keys($person);
    $i = 0;
    while ($i < count($person)) {
        echo $keys[$i] . ": " . $person[$keys[$i]] . "\n";
        $i++;
    }

    ?>

    <?php

    $marks = array('Arabic' => 90, 'English' => 89, 'Physics' => 100);

    echo $marks["Arabic"];
    sort($marks);
    print_r($marks)



    ?>

    <?php

    $namez = array('Omar', 'nasr', 'Mona', 'Malak', 'shahd');
    $name2 = array($namez[0], $namez[3]);
    // create an array from an existing array
    //
    print_r($namez);
    print_r($name2);
    //creat an array from existing array using array_slice function
    $name3 = array_slice($namez, 0, 3);
    //to retain the same  values in the old array , write true at the end
    //creat an array from existing array using array_slice function
    $name3 = array_slice($namez, 0, 3, true);
    print_r($name3);
    // check all methods using array_
    print_r($namez);
    // use sort(array name) or rSort(array_name)

    $things = array("")
    ?>

    <?php
    $things = array('item1' => 'cat', 'item2' => 'dog', 'item3' => 'cow', 'item4' => 'horse');
    // To get the sorted array, you need to call krsort on the array before printing it, like this:
    print_r($things);
    krsort($things);
    print_r($things);
    ?>
    <p>Chnage text to an array</p>
    <?php
    $text = "Hello Every one, from here";
    $arr = explode(' ', $text);
    print_r($arr);
    #implode
    $arr2 = implode(" ", $arr);
    print_r($arr2)."<br>";

    ?>

    <?php
    // The implode and explode functions are used to convert arrays to strings and vice versa in PHP, respectively.

    // The implode function takes an array and concatenates its elements using a specified delimiter to produce a single string. For example:
    $array = array("apple", "banana", "cherry");
    $string = implode(",", $array);

    echo $string."\n"; // Outputs: "apple,banana,cherry"
    ?>


<?php
    // The explode function, on the other hand, takes a string and splits it into an array using a specified delimiter. For example:

    $string = "apple,banana,cherry";
    $array = explode(",", $string);
    print_r($array); // Outputs: Array ( [0] => apple [1] => banana [2] => cherry )

    
?>


</body>

</html>
