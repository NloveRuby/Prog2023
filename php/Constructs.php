<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- "current", "next", "previous", and "repeat" are functions or constructs commonly used in programming languages, including PHP.

"current" is a function in PHP that returns the value of the current element in an array. It is commonly used in loops to iterate through an array and access its elements.

"next" is a function in PHP that advances the internal pointer of an array to the next element and returns the value of the next element. It can be used to traverse an array in a loop and access its elements one by one.

"previous" is a function in PHP that moves the internal pointer of an array to the previous element and returns the value of the previous element. It can be used to traverse an array in reverse order.

"repeat" is a language construct in PHP that repeats a block of code a specified number of times. It is implemented using the "for" loop and can be used to execute a piece of code several times in succession. -->

<?php

$array = array(1, 2, 3, 4, 5);

// Using "current"
echo "Current element: " . current($array) . "<br>";

// Using "next"
next($array);
echo "Next element: " . current($array) . "<br>";

// Using "previous"
prev($array);
echo "Previous element: " . current($array) . "<br>";

// Using "repeat"
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i <br>";
}

?>
</body>
</html>
