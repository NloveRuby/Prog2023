<?php
// Check if the cookie exists
if (isset($_COOKIE['name']) && isset($_COOKIE['age'])) {
    // Retrieve the cookie data
    $name = $_COOKIE['name'];
    $age = $_COOKIE['age'];

    // Print the cookie data
    echo 'Hello, ' . $name . '. You are ' . $age . ' years old.<br>';
} else {
    // Set a cookie
    setcookie('name', 'John Doe', time() + 3600);
    setcookie('age', 30, time() + 3600);
    echo 'Cookies have been set.<br>';
}

// Print all cookies
echo '<pre>';
print_r($_COOKIE);
echo '</pre>';
?>

<!-- In this example, the program first checks if the name and age cookies exist. If they do, the values of the cookies are retrieved and printed. If the cookies do not exist, they are set using the setcookie() function, with a lifespan of one hour. Finally, all cookies are printed using the print_r() function. -->
