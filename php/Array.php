<?php

$nums = [12,13,14,15,12];
echo $nums;

// var_dump($nums);

$fruits = array("apple", "banana", "cherry");
foreach ($fruits as $fruit) {
  echo "$fruit\n";
}


$fruitz = array("apple", "banana", "cherry");
for ($i = 0; $i < count($fruitz); $i++) {
  echo "$fruitz[$i]\n";
}


$input = array("a" => "green", "red", "b" => "green", "blue", "red");
$result = array_unique($input);
print_r($result);

$input2 = array(4, "4", "3", 4, 3, "3");
$result2 = array_unique($input2);
var_dump($result2);


$details = array(

    0 => array("id"=>"1", "name"=>"Mike",    "num"=>"9876543210"),
    1 => array("id"=>"2", "name"=>"Carissa", "num"=>"08548596258"),
    2 => array("id"=>"1", "name"=>"Mathew",  "num"=>"784581254"),

);

$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>

<!-- Create an Array in PHP

In PHP, the array() function is used to create an array:

In PHP, there are three types of arrays:

    Indexed arrays - Arrays with a numeric index
    Associative arrays - Arrays with named keys
    Multidimensional arrays - Arrays containing one or more arrays

-->

<?php
$cars = array("Volvo", "BMW", "Toyota");
$arrlength = count($cars);

for($x = 0; $x < $arrlength; $x++) {
  echo $cars[$x];
  echo "<br>";
}
?>

<!-- PHP Associative Arrays

Associative arrays are arrays that use named keys that you assign to them.

There are two ways to create an associative array -->

<?php

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

?>

<!-- or:
$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";  -->

<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>

<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>




