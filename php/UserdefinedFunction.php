<!-- Create a User Defined Function in PHP

A user-defined function declaration starts with the word function:
Syntax
function functionName() {
  code to be executed;
} -->

<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // call the function
?>
br

<?php
function familyName($fname) {
  echo "$fname Refsnes.";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");
?>

<?php
function familyName2($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
  echo "<br>";
}

familyName2("Hege", "1975");
familyName2("Stale", "1978");
familyName2("Kai Jim", "1983");
?>

<!-- PHP is a Loosely Typed Language

In the example above, notice that we did not have to tell PHP which data type the variable is.

PHP automatically associates a data type to the variable, depending on its value. Since the data types are not set in a strict sense, you can do things like adding a string to an integer without causing an error.

In PHP 7, type declarations were added. This gives us an option to specify the expected data type when declaring a function, and by adding the strict declaration, it will throw a "Fatal Error" if the data type mismatches.

In the following example we try to send both a number and a string to the function without using strict: -->


<?php
function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is NOT enabled "5 days" is changed to int(5), and it will return 10
?>

<!-- To specify strict we need to set declare(strict_types=1);. This must be on the very first line of the PHP file.

In the following example we try to send both a number and a string to the function, but here we have added the strict declaration: -->


