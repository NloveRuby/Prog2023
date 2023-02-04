<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Functions</title>
</head>
<body>

<strong><p>Spli Function</p></strong>

<?php
//split function

$str = "Hello Friend";
$arr1 = str_split($str);
$arr2 = str_split($str, 3);
print_r($arr1);
print_r($arr2);

?>
<br>
<strong><p>Str pad</p></strong>

<?php
//str_pad
$input = "Alien";
echo str_pad($input, 10);                      // produces "Alien     "
echo str_pad($input, 10, "-=", STR_PAD_LEFT);  // produces "-=-=-Alien"
echo str_pad($input, 10, "_", STR_PAD_BOTH);   // produces "__Alien___"
echo str_pad($input,  6, "___");               // produces "Alien_"
echo str_pad($input,  3, "*");                 // produces "Alien"
?>

<br>
<strong><p>Add slashes</p></strong>
<?php
echo addcslashes('foo[ ]', 'A..z');
// output:  \f\o\o\[ \]
// All upper and lower-case letters will be escaped
// ... but so will the [\]^_`
?>
<br>
https://www.php.net/manual/en/function.addslashes.php







</body>
</html>
