<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!-- https://www.php.net/manual/en/function.str-split.php -->
<?php
$name ="Nasr";
echo strlen($name);
// echo strtr($name,0,0);

$string = "  This is a test string.  ";

$length = strlen($string);
// echo "<h5>Length</h5>";
echo $length;
$lower = strtolower($string);
echo $lower;
echo "<h5>Lower</h5>";
$upper = strtoupper($string);
echo $upper;
echo "<h5>Upper</h5>";
$sub = substr($string, 5, 10);
echo $sub;
echo "<h5>Sub</h5>";
$pos = strpos($string, "test");
echo $pos;
echo "<h5>Pos</h5>";
$replaced = str_replace("test", "example", $string);
echo $replaced;
echo "<h5>Replaced</h5>";
$trimmed = trim($string);
echo $trimmed;
echo "<h5>Trimmed</h5>";
$exploded = explode(" ", $string);
echo $exploded;
echo "<h5>Exploded</h5>";
$imploded = implode(", ", $exploded);
echo $imploded;
echo "<h5>Imploded</h5>";
$split = str_split($string);
echo $split;
echo "<h5>Split</h5>";
// echo "<h5>Length</h5>";
echo addslashes($string);
echo "<br>";
echo addslashes("Nasr");
echo "<br>";
//while

while ($bytevalue < 0) {
    $bytevalue += 256;
    }
    $bytevalue %= 256;
?>

<?php

$str = "Hello Friend";

$arr1 = str_split($str);
$arr2 = str_split($str, 3);

print_r($arr1);
print_r($arr2);

?>

</body>
</html>
