<?php
class person
{
    var $name = "";
    function name($newname = NULL)
    {
        if(! is_null($newname))
        {
            $this->name=$newname;
        }
        return $this->name;
    }
    var $surname = "";
    function surname($newsurname = NULL)
    {
        if(! is_null($newsurname))
        {
            $this->surname=$newsurname;
        }
        return $this->surname;
    }
    var $age = "";
    function age($newage = NULL)
    {
        if(! is_null($newage))
        {
            $this->age=$newage;
        }
        return $this->age;
    }
}

$bob = new person;
$bob->name('Bob');
$bob->surname('Builder');
$bob->age('50');

printf("Hi %s, your surname is %s and you are %s years old", $bob->name, $bob->surname, $bob->age);
