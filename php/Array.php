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
