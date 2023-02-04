<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- In PHP, "array_map", "array_filter", and "array_reduce" are functions that operate on arrays and provide a way to perform common operations on arrays in a functional programming style.

    "array_map" is a function that applies a callback function to each element of an array and returns a new array with the modified elements. For example: -->

    <a href="http://https://www.php.net/manual/en/function.array-column.php">Array Web Site</a>
    <p>Map</p>
    <?php
    $numbers = [1, 2, 3, 4, 5];
    $squared = array_map(function($n) { return $n * $n; }, $numbers);
    print_r($squared); // Output: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )
    ?>

    <!-- "array_filter" is a function that filters the elements of an array based on a given condition and returns a new array with only the elements that pass the condition. For example: -->
    <p>filter function</p>
    <?php
    $numbers = [1, 2, 3, 4, 5];
    $evens = array_filter($numbers, function($n) { return $n % 2 == 0; });
    print_r($evens); // Output: Array ( [1] => 2 [3] => 4 )

    ?>
    <p>Reduce</p>
    <?php
    // "array_reduce" is a function that reduces an array to a single value by applying a callback function to each element and accumulating the result. For example:
    $numbers = [1, 2, 3, 4, 5];
    $sum = array_reduce($numbers, function($carry, $n) { return $carry + $n; }, 0);
    echo $sum; // Output: 15
    ?>
    <br>

    <p>function: array_change_key_case</p>
    <?php
    // function: array_change_key_case
    $input_array = array("FirSt" => 1, "SecOnd" => 4);
    print_r(array_change_key_case($input_array, CASE_UPPER));
    ?>
    <br>

    <?php
    function array_change_key_case_unicode($arr, $c = CASE_LOWER) {
        $c = ($c == CASE_LOWER) ? MB_CASE_LOWER : MB_CASE_UPPER;
        foreach ($arr as $k => $v) {
            $ret[mb_convert_case($k, $c, "UTF-8")] = $v;
        }
        return $ret;
    }

    $arr = array("FirSt" => 1, "yağ" => "Oil", "şekER" => "sugar");
    print_r(array_change_key_case($arr, CASE_UPPER));
    print_r(array_change_key_case_unicode($arr, CASE_UPPER));
    ?>

    <br>
    <?php

    function array_change_key_case_recursive($arr, $case = CASE_LOWER)
    {
        return array_map(function($item) use($case) {
            if(is_array($item))
                $item = array_change_key_case_recursive($item, $case);
            return $item;
        },array_change_key_case($arr, $case));
    }
    ?>

    <p>Array Chunck</p>
    <br>
    <?php
    $input_array = array('a', 'b', 'c', 'd', 'e');
    print_r(array_chunk($input_array, 2));
    print_r(array_chunk($input_array, 2, true));
    ?>
    <br>


    <p>Array_column</p>

    <?php
// Array representing a possible record set returned from a database
$records = array(
    array(
        'id' => 2135,
        'first_name' => 'John',
        'last_name' => 'Doe',
    ),
    array(
        'id' => 3245,
        'first_name' => 'Sally',
        'last_name' => 'Smith',
    ),
    array(
        'id' => 5342,
        'first_name' => 'Jane',
        'last_name' => 'Jones',
    ),
    array(
        'id' => 5623,
        'first_name' => 'Peter',
        'last_name' => 'Doe',
    )
);

$first_names = array_column($records, 'first_name');
print_r($first_names);
?>
<br>
<strong><p>array_combine — Creates an array by using one array for keys and another for its values</p>  </strong>

<?php
$a = array('green', 'red', 'yellow');
$b = array('avocado', 'apple', 'banana');
$c = array_combine($a, $b);

print_r($c);
?>
<strong><p>Array count values</p></strong>
<?php
$array = array(1, "hello", 1, "world", "hello");
print_r(array_count_values($array));
?>


</body>
</html>
