<?php

class Person
{
	private $name;
	private $lastname;
	private $age;
	// private $hp;
	private $mother;
	private $father;

	function __construct($name, $lastname, $age, $mother = null, $father = null)
	{
		$this->name = $name;
		$this->lastname = $lastname;
		$this->age = $age;
		$this->mother = $mother;
		$this->father = $father;
		// $this->hp = 100;
	}

	// function sayHi($name)
	// {
	// 	return "Hi, $name, I'm " . $this->name;
	// }

	// function setHp($hp)
	// {
	// 	if ($this->hp + $hp > 100) $this->hp = 100;
	// 	else $this->hp = $this->hp + $hp;
	// }

	// function getHp()
	// {
	// 	return $this->hp;
	// }

	function getName()
	{
		return $this->name;
	}
	function getLastname()
	{
		return $this->lastname;
	}
	function getMother()
	{
		return $this->mother;
	}
	function getFather()
	{
		return $this->father;
	}
	function getAge()
	{
		return $this->age;
	}
	function getInfo()
	{
		return "<h3>My Family:</h3>" . "My name is " . $this->getName() . " " . $this->getLastname() . ". I am " . $this->getAge() . " years old. " . "<br>My mother is " . $this->getMother()->getName() . " " . $this->getMother()->getLastname() . ", she is " . $this->getMother()->getAge() . " years old, my father's name is " . $this->getFather()->getName() . " " . $this->getFather()->getLastname() . " , he is 38.<br>I also have grandparents:<br>" . $this->getMother()->getMother()->getName() . " " . $this->getMother()->getMother()->getLastname() . " is my mother's mother, she is " . $this->getMother()->getMother()->getAge() . ". " . $this->getFather()->getMother()->getName() . " " . $this->getFather()->getMother()->getLastname() . " is my dad's mother, she is " . $this->getFather()->getMother()->getAge() . ".<br>" . $this->getMother()->getFather()->getName() . " " . $this->getMother()->getFather()->getLastname() . " is my mother's father, he is " . $this->getMother()->getFather()->getAge() . ", and " . $this->getFather()->getFather()->getName() . " " . $this->getFather()->getFather()->getLastname() . " is my dad's father and he is " . $this->getFather()->getFather()->getAge() . " years old.";
	}
}

$valya = new Person("Valentina", "Kirillova", 58);
$peter = new Person("Peter", "Kirillov", 64);

$ira = new Person("Irina", "Semenova", 55);
$tolik = new Person("Anatoly", "Semenov", 61);

$kate = new Person("Ekaterina", "Ivanova", 35, $valya, $peter);
$alex = new Person("Alexey", "Ivanov", 38, $ira, $tolik);

$valera = new Person("Valera", "Ivanov", 10, $kate, $alex);

echo $valera->getInfo();



// echo $valera->getMother()->getMother()->getName() . "<br>";
// echo $valera->getMother()->getMother()->getLastname() . "<br>";
// echo $valera->getMother()->getMother()->getAge() . "<br><br>";

// echo $valera->getMother()->getFather()->getName() . "<br>";
// echo $valera->getMother()->getFather()->getLastname() . "<br>";
// echo $valera->getMother()->getFather()->getAge() . "<br><br>";

// echo $valera->getFather()->getMother()->getName() . "<br>";
// echo $valera->getFather()->getMother()->getLastname() . "<br>";
// echo $valera->getFather()->getMother()->getAge() . "<br><br>";

// echo $valera->getFather()->getFather()->getName() . "<br>";
// echo $valera->getFather()->getFather()->getLastname() . "<br>";
// echo $valera->getFather()->getFather()->getAge() . "<br><br>";

// echo $valera->getMother()->getName() . "<br>";
// echo $valera->getMother()->getLastname() . "<br>";
// echo $valera->getMother()->getAge() . "<br><br>";

// echo $valera->getFather()->getName() . "<br>";
// echo $valera->getFather()->getLastname() . "<br>";
// echo $valera->getFather()->getAge() . "<br><br>";

// echo $valera->getName() . "<br>";
// echo $valera->getLastname() . "<br>";
// echo $valera->getAge() . "<br>";


//! здоровье не может быть болле 100 единиц

// $medKit = 50;
// $alex->setHp(-30); //? Упал
// echo $alex->getHp() . "<br>";
// $alex->setHp($medKit); //? Нашел аптечку
// echo $alex->getHp();

// echo $alex->sayHi($igor->name);
// echo "<br>" . $igor->sayHi($alex->name);