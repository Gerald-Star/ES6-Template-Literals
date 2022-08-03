// TOPIC 1 : Create Strings using Template Literals
/*A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:*/

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
/*The console will display the strings Hello, my name is 
Zodiac Hasbro! and I am 56 years old..

A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.


//EXERCISE

Use template literal syntax with backticks to create an 
array of list element (li) strings. Each list element's 
text should be one of the array elements from the failure 
property on the result object and have a class attribute
 with the value text-warning. The makeList function should
  return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired 
output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]*/


//SOLUTION

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [
    ];
  
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
console.log(failuresList);  


//OR 2 SOLUTION


/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);


*/

//TOPIC 2. Write Concise Object Literal Declarations Using Object Property Shorthand
/*ES6 adds some nice support for easily defining object literals.

Consider the following code:
*/

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

/*
getMousePosition is a simple function that returns an
 object containing two properties. ES6 provides the 
 syntactic sugar to eliminate the redundancy of 
 having to write x: x. You can simply write x once, 
 and it will be converted tox: x (or something equivalent)
  under the hood. Here is the same function from above
   rewritten to use this new syntax:*/

//const getMousePosition = (x, y) => ({ x, y });

//EXERCISE
/*
Use object property shorthand with object literals
 to create and return an object with name, age and gender 
 properties. */



 const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
}


//SOLUTION 
/*
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
       age,
       gender
    };
  
    
    // Only change code above this line
  };*/



  //TOPIC 3  Write Concise Declarative Functions with ES6

/*  When defining functions within objects in ES5, 
we have to use the keyword function as follows:*/

const namePerson = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

/*
With ES6, you can remove the function keyword and colon 
altogether when defining functions in objects.

Here's an example of this syntax refactor*/

//SOLUTION

const makePerson = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

console.log(makePerson.name);

//EXERCISE
/*
Refactor the function setGear inside the 
object bicycle to use the shorthand syntax described above*/

//EXERCISE
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

  //SOLUTION - REFACTOR TO OBJECT LITERAL BY REMOVING THE FUNCTION

  // Only change code below this line
const rider = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(rider.gear);




  //TOPIC 4.  Use class Syntax to Define a Constructor Function


/*  ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the
 new keyword to instantiate an object.*/

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');
//The class syntax simply replaces the constructor 
//function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

/*
It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.



//EXERCISE
Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

*/

//SOLUTION

// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 
  
  // Should display 'carrot'




  //TOPIC 5. Use getters and setters to 
  //Control Access to an Object
  /*
You can obtain values from an object and set the value of a 
property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the
 value of an object's private variable to the user without
  the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of
 an object's private variable based on the value passed 
 into the setter function. This change could involve 
 calculations, or even overwriting the previous value 
 completely.

*/
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

//The console would display the strings anonymous and newAuthor.


//QUESTION
/*
Use the class keyword to create a Thermostat class. 
The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in
 Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, 
where F is the value of temperature in Fahrenheit, 
and C is the value of the same temperature in Celsius.*/
  //EXERCISE

  // Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature;